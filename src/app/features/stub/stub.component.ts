import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-stub',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stub.component.html',
    styleUrl: './stub.component.scss'
})
export class StubComponent {
    private route = inject(ActivatedRoute);
    private location = inject(Location);
    private router = inject(Router);

    featureName = this.route.snapshot.data['feature'] || 'This feature';

    goBack() {
        if (history.length > 1) {
            this.location.back();
        } else {
            this.router.navigate(['/0xDEAD']);
        }
    }
}