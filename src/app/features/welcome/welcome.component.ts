import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    private router = inject(Router);

    showAuthScreen = false;

    submitLogin() {
        this.router.navigate(['/home']);
    }
}