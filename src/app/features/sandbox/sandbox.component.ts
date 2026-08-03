import { Component, inject, OnInit, signal, viewChild, ElementRef, PLATFORM_ID, effect, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { timeout } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { AnimationType, CanvasColorKey, CanvasEffect, Coordinate, PointColorKey, SelectOption } from '../../shared/types/types';
import { CustomSelectComponent } from '../../shared/components/feature/custom-select/custom-select.component';
import { CANVAS_COLORS, POINT_COLORS } from '../../shared/constants/constants';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [CustomSelectComponent],
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  private apiService = inject(ApiService);
  private platformId = inject(PLATFORM_ID);
  private canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('sandboxCanvas');
  private containerRef = viewChild<ElementRef<HTMLDivElement>>('canvasContainer');

  canvasColorOptions: SelectOption[] = [
    { id: 'red', label: 'Red', preview: '#c62828' },
    { id: 'white', label: 'White', preview: '#ffffff' },
    { id: 'green', label: 'Green', preview: '#2e7d32' },
    { id: 'black', label: 'Black', preview: '#1a1a1a' }
  ];

  animationOptions: SelectOption[] = [
    { id: 'none', label: 'None' },
    { id: 'pulse', label: 'Pulse' },
    { id: 'orbit', label: 'Orbit' },
    { id: 'wave', label: 'Wave' }
  ];

  pointColorOptions: SelectOption[] = [
    { id: 'gold', label: 'Gold', preview: '#FFD700' },
    { id: 'cyan', label: 'Cyan', preview: '#22d3ee' },
    { id: 'purple', label: 'Purple', preview: '#8b5cf6' },
    { id: 'black', label: 'Black', preview: '#000000' },
    { id: 'white', label: 'White', preview: '#ffffff' }
  ];

  canvasEffectOptions: SelectOption[] = [
    { id: 'none', label: 'None' },
    { id: 'glass', label: 'Glass' },
    { id: 'grid', label: 'Grid' },
    { id: 'scanline', label: 'Scanline' }
  ];

  points = signal<Coordinate[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  isStreaming = signal(false);
  streamError = signal<string | null>(null);

  canvasColor = signal<CanvasColorKey>('white');
  pointColor = signal<PointColorKey>('black');
  animationType = signal<AnimationType>('none');
  canvasEffect = signal<CanvasEffect>('none');

  actualCanvasColor = computed(() => CANVAS_COLORS[this.canvasColor()] || CANVAS_COLORS.white);
  actualPointColor = computed(() => POINT_COLORS[this.pointColor()] || POINT_COLORS.black);

  private animationFrameId: number | null = null;
  private animationTime = 0;

  constructor() {
    effect(() => {
      const points = this.points();
      if (!isPlatformBrowser(this.platformId)) return;
      this.resizeCanvas();
      this.startAnimationLoop();
    });
  }

  ngOnInit() {
    this.loadCoordinates();

    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', () => this.resizeCanvas());
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  onCanvasColorSelect(colorId: string) {
    const key = colorId as keyof typeof CANVAS_COLORS;
    if (key in CANVAS_COLORS) {
      this.canvasColor.set(key);
    }
  }

  onPointColorSelect(colorId: string) {
    const key = colorId as keyof typeof POINT_COLORS;
    if (key in POINT_COLORS) {
      this.pointColor.set(key);
    }
  }

  onAnimationSelect(typeId: string) {
    const type = typeId as AnimationType;
    const validTypes = ['none', 'pulse', 'orbit', 'wave'];
    if (validTypes.includes(type)) {
      this.animationType.set(type);
      this.animationTime = 0;
    }
  }

  onCanvasEffectSelect(effectId: string) {
    const effect = effectId as CanvasEffect;
    const validEffects = ['none', 'glass', 'grid', 'scanline'];
    if (validEffects.includes(effect)) {
      this.canvasEffect.set(effect);
    }
  }

  loadCoordinates() {
    this.isLoading.set(true);
    this.error.set(null);

    this.apiService.getCoordinates().pipe(
      timeout(5000)
    ).subscribe({
      next: (data) => {
        this.points.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('DATA ERR');
        this.isLoading.set(false);
        console.error('API Error:', err);
      }
    });
  }

  loadCoordinate() {
    this.isLoading.set(true);
    this.error.set(null);

    this.apiService.getCoordinate().pipe(
      timeout(5000)
    ).subscribe({
      next: (data) => {
        this.points.set([data]);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('DATA ERR');
        this.isLoading.set(false);
        console.error('API Error:', err);
      }
    });
  }

  movePoint(direction: 'up' | 'down' | 'left' | 'right') {
    this.apiService.moveCoordinate(direction).subscribe({
      next: (coordinate) => {
        this.points.set([coordinate]);
      },
      error: (error) => {
        console.error('Failed to move coordinate:', error);
      }
    });
  }

  changeRadius(radius: number) {
    this.apiService.changeRadius(radius).subscribe({
      next: (coordinate) => {
        this.points.set([coordinate]);
      },
      error: (error) => {
        console.error('Failed to change radius:', error);
      }
    });
  }

  startStream() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isStreaming.set(true);

    this.apiService.streamCoordinates().subscribe({
      next: (response: any) => {
        let coordinates: Coordinate[] = [];

        if (Array.isArray(response)) {
          coordinates = response;
        } else if (response.data && Array.isArray(response.data)) {
          coordinates = response.data;
        }

        this.points.set(coordinates);
      },
      error: (err) => {
        console.error('Stream error:', err);
        this.isStreaming.set(false);
      },
      complete: () => {
        this.isStreaming.set(false);
      }
    });
  }

  private startAnimationLoop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    const animate = () => {
      this.animationTime += 0.016;
      this.draw(this.points());
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  private resizeCanvas() {
    const canvas = this.canvasRef()?.nativeElement;
    const container = this.containerRef()?.nativeElement;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = container.clientWidth * dpr;
    canvas.height = container.clientHeight * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }

  private draw(points: Coordinate[]) {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    ctx.fillStyle = this.actualCanvasColor();
    ctx.fillRect(0, 0, width, height);

    this.drawEffect(ctx, width, height);

    const scaleX = width / 800;
    const scaleY = height / 400;

    points.forEach((p, index) => {
      const baseRadius = p.radius || 3;
      let radius = baseRadius;
      let x = p.x * scaleX;
      let y = p.y * scaleY;

      switch (this.animationType()) {
        case 'pulse':
          radius = baseRadius + Math.sin(this.animationTime * 3 + index) * 2;
          break;
        case 'orbit':
          x += Math.cos(this.animationTime * 2 + index) * 10;
          y += Math.sin(this.animationTime * 2 + index) * 10;
          break;
        case 'wave':
          y += Math.sin(this.animationTime * 4 + index * 0.5) * 15;
          break;
      }

      ctx.fillStyle = this.actualPointColor()
      ctx.beginPath();
      ctx.arc(x, y, Math.max(radius, 1), 0, Math.PI * 2);
      ctx.fill();
    });
  }

  private drawEffect(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const effect = this.canvasEffect();
    if (effect === 'none') return;

    ctx.save();

    switch (effect) {
      case 'glass':
        const offset = (this.animationTime * 150) % (width + height);
        const gradient = ctx.createLinearGradient(
          -width + offset, 0, offset, height
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        break;

      case 'grid':
        ctx.strokeStyle = 'rgba(128, 128, 128, 0.2)';
        ctx.lineWidth = 1;
        const gridSize = 40;

        ctx.beginPath();
        for (let x = 0; x <= width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y <= height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();
        break;

      case 'scanline':
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        const scanlineHeight = 4;
        for (let y = 0; y < height; y += scanlineHeight * 2) {
          ctx.fillRect(0, y, width, scanlineHeight);
        }
        break;
    }

    ctx.restore();
  }
}