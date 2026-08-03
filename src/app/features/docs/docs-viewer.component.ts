import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

import { DOCS_DATA } from '../../shared/constants/constants';
import { DocsDocument } from '../../shared/types/types';

@Component({
    selector: 'app-docs-viewer',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './docs-viewer.component.html',
    styleUrl: './docs-viewer.component.scss'
})
export class DocsViewerComponent {
    private route = inject(ActivatedRoute);
    private sanitizer = inject(DomSanitizer);

    document = signal<DocsDocument | null>(null);
    parsedContent = signal<SafeHtml>('');

    constructor() {
        marked.setOptions({
            gfm: true,
            breaks: true,
        });

        const id = this.route.snapshot.paramMap.get('id');
        const doc = DOCS_DATA.find(d => d.id === id);
        if (doc) {
            this.document.set(doc);
            this.parseMarkdown(doc.content);
        }
    }

    private parseMarkdown(content: string) {
        const html = marked.parse(content.trim(), { async: false }) as string;
        this.parsedContent.set(this.sanitizer.bypassSecurityTrustHtml(html));
    }
}