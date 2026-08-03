import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CATEGORIES, DOCS_DATA } from '../../shared/constants/constants';
import { DocCategory, DocsDocument } from '../../shared/types/types';

@Component({
    selector: 'app-docs',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './docs.component.html',
    styleUrl: './docs.component.scss'
})
export class DocsComponent {
    documents = signal<DocsDocument[]>(DOCS_DATA);
    categories = CATEGORIES;

    getDocsByCategory(category: DocCategory) {
        return this.documents().filter(doc => doc.category === category);
    }
}