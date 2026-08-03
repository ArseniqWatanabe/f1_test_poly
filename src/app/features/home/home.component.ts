import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MOCK_NEWS, MOCK_STATS } from '../../shared/constants/constants';
import { NewsItem, PlatformStat } from '../../shared/types/types';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    news = signal<NewsItem[]>(MOCK_NEWS);
    stats = signal<PlatformStat[]>(MOCK_STATS);
}