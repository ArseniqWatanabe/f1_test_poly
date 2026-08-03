import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Friend, FriendRequest } from '../../shared/types/types';
import { MOCK_FRIENDS, MOCK_REQUESTS } from '../../shared/constants/constants';


@Component({
    selector: 'app-friends',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './friends.component.html',
    styleUrl: './friends.component.scss'
})
export class FriendsComponent {
    friends = signal<Friend[]>(MOCK_FRIENDS);
    requests = signal<FriendRequest[]>(MOCK_REQUESTS);
    activeTab = signal<'friends' | 'requests'>('friends');

    setTab(tab: 'friends' | 'requests') {
        this.activeTab.set(tab);
    }

    getInitials(name: string): string {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }

    getAvatarColor(name: string): string {
        const colors = ['#c62828', '#2e7d32', '#1565c0', '#6a1b9a', '#ef6c00', '#00838f'];
        const index = name.length % colors.length;
        return colors[index];
    }
}