import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MOCK_BADGES, MOCK_PROFILE_STATS } from '../../shared/constants/constants';
import { Badge, ProfileStat } from '../../shared/types/types';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    profile = signal({
        name: 'Alex Chen',
        walletAddress: '0x742d35C...',
        joinDate: 'March 2025',
        status: 'Active Researcher'
    });

    stats = signal<ProfileStat[]>(MOCK_PROFILE_STATS);
    badges = signal<Badge[]>(MOCK_BADGES);

    getInitials(name: string): string {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
}