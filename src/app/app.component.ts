import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  private router = inject(Router);

  private currentUrl = signal(this.router.url);

  isPresentationPage = computed(() => {
    const url = this.currentUrl();
    return url === '/' || url === '/404'
      || url === '/news'
      || url.startsWith('/news/')
      || url.startsWith('/0xDEAD')
      || url.startsWith('/profile/');
  });

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.currentUrl.set(event.urlAfterRedirects);
    });
  }
}
