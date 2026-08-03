import { Routes } from '@angular/router';

import { SandboxComponent } from './features/sandbox/sandbox.component';
import { AdminComponent } from './features/admin/admin.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { SettingsComponent } from './features/settings/settings.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { DocsComponent } from './features/docs/docs.component';
import { DocsViewerComponent } from './features/docs/docs-viewer.component';
import { ShopComponent } from './features/shop/shop.component';
import { FriendsComponent } from './features/friends/friends.component';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { StubComponent } from './features/stub/stub.component';
import { ZeroDeadComponent } from './features/0xDEAD/0xDEAD.component';

export const routes: Routes = [
    { path: '0xDEAD', component: ZeroDeadComponent },

    { path: '', component: WelcomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sandbox', component: SandboxComponent },
    { path: 'docs', component: DocsComponent },
    { path: 'docs/:id', component: DocsViewerComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '404', component: NotFoundComponent },
    { path: 'news', component: StubComponent, data: { feature: 'News Feed' } },
    { path: 'news/:id', component: StubComponent, data: { feature: 'News Article' } },
    { path: 'profile/:id', component: StubComponent, data: { feature: 'User Profile' } },

    { path: '**', redirectTo: '/404' }
];
