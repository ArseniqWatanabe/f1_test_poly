import { Component, inject, OnInit, signal } from '@angular/core';
import { firstValueFrom, map, timeout } from 'rxjs';

import { TableColumn, TableComponent } from '../../shared/components/feature/table/table.component';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-admin',
  imports: [TableComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
})
export class AdminComponent implements OnInit {
  private apiService = inject(ApiService);

  isLoadingDict = signal(true);
  errorDict = signal<string | null>(null);
  selectedTable = signal<string | null>(null);

  dictionaries = signal<any[]>([]);
  tableData = signal<any[]>([]);
  isLoadingData = signal(false);
  errorData = signal<string | null>(null);

  columnsDict: TableColumn[] = [
    { key: 'name', label: 'Name' },
  ];

  columnsData = signal<any[]>([]);

  ngOnInit() {
    this.loadDictionaries();
  }

  loadDictionaries() {
    this.isLoadingDict.set(true);
    this.errorDict.set(null);

    this.apiService.getDictionaries().pipe(
      timeout(5000),
      map((items: string[]) => items.map((item, i) => ({ id: i, name: item }))),
    ).subscribe({
      next: (data) => {
        this.dictionaries.set(data);
        this.isLoadingDict.set(false);
      },
      error: () => {
        this.errorDict.set('DATA ERR');
        this.isLoadingDict.set(false);
      }
    });
  }

  onTableSelect(tableName: string) {
    this.selectedTable.set(tableName);
    this.loadTableData(tableName);
  }

  async loadTableData(tableName: string) {
    this.isLoadingData.set(true);
    this.errorData.set(null);

    try {
      const columns = await firstValueFrom(
        this.apiService.getTableColumns(tableName).pipe(timeout(5000))
      );

      this.columnsData.set(
        columns.map(col => ({ key: col, label: col.toUpperCase() }))
      );

      const data = await firstValueFrom(
        this.apiService.getData(tableName).pipe(timeout(5000))
      );

      this.tableData.set(data);
      this.isLoadingData.set(false);
    } catch (err) {
      this.errorData.set('DATA ERR');
      this.isLoadingData.set(false);
      console.error('API Error:', err);
    }
  }
}