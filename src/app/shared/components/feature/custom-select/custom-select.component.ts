import { Component, HostListener, input, output, signal } from '@angular/core';

import { SelectOption } from '../../../types/types';

@Component({
    selector: 'app-custom-select',
    standalone: true,
    templateUrl: './custom-select.component.html',
    styleUrl: './custom-select.component.scss',
})
export class CustomSelectComponent {
    options = input.required<SelectOption[]>();
    selectedId = input<string | null>(null);
    placeholder = input<string>('Select...');

    selected = output<string>();

    isOpen = signal(false);

    toggle() {
        this.isOpen.update(v => !v);
    }

    select(option: SelectOption) {
        this.selected.emit(option.id);
        this.isOpen.set(false);
    }

    getSelectedLabel(): string {
        if (!this.selectedId()) return this.placeholder();
        const option = this.options().find(o => o.id === this.selectedId());
        return option?.label || this.placeholder();
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.custom-select')) {
            this.isOpen.set(false);
        }
    }
}