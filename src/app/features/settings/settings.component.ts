import { Component, inject } from '@angular/core';

import { CustomSelectComponent } from '../../shared/components/feature/custom-select/custom-select.component';
import { ThemeService } from '../../shared/services/theme.service';
import { SelectOption, Theme } from '../../shared/types/types';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CustomSelectComponent],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
})
export class SettingsComponent {
    private themeService = inject(ThemeService);

    currentTheme = this.themeService.currentTheme;

    themeOptions: SelectOption[] = [
        { id: 'gradient', label: 'Gradient', preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { id: 'dark', label: 'Dark', preview: '#1a1a1a' },
        { id: 'light', label: 'Light', preview: '#f5f5f5' },
    ];

    changeTheme(themeId: string) {
        this.themeService.setTheme(themeId as Theme);
    }
}