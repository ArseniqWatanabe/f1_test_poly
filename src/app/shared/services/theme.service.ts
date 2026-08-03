import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

import { Theme } from '../types/types';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private platformId = inject(PLATFORM_ID);
    private cookieService = inject(CookieService);

    currentTheme = signal<Theme>('gradient');

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const savedTheme = this.cookieService.get('app-theme') as Theme;
            if (savedTheme && ['gradient', 'dark', 'light'].includes(savedTheme)) {
                this.currentTheme.set(savedTheme);
                this.applyTheme(savedTheme);
            }
        }
    }

    setTheme(theme: Theme) {
        this.currentTheme.set(theme);

        if (isPlatformBrowser(this.platformId)) {
            this.cookieService.set('app-theme', theme, {
                expires: 365,
                path: '/',
                sameSite: 'Lax'
            });
            this.applyTheme(theme);
        }
    }

    private applyTheme(theme: Theme) {
        if (isPlatformBrowser(this.platformId)) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }
}