import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableColumn {
    key: string;
    label: string;
}

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: '/table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    columns = input.required<TableColumn[]>();
    data = input.required<any[]>();
    enableClick = input<boolean>(false);
    rowClick = output<any>();

    onRowClick(row: any) {
        if (this.enableClick()) {
            this.rowClick.emit(row);
        }
    }
}