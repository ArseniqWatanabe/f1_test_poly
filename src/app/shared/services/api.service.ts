import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Coordinate } from '../types/types';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private http = inject(HttpClient);

    getDictionaries(): Observable<any[]> {
        return this.http.get<string[]>(`${environment.apiUrl}/dictionaries`);
    }

    getTableColumns(tableName: string): Observable<string[]> {
        return this.http.get<string[]>(`${environment.apiUrl}/dictionaries?id=${tableName}`);
    }

    getData(tableName: string): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/${tableName}`);
    }

    getCoordinate(): Observable<Coordinate> {
        return this.http.get<Coordinate>(`${environment.apiUrl}/coordinates/default`);
    }

    moveCoordinate(direction: string): Observable<Coordinate> {
        return this.http.patch<Coordinate>(
            `${environment.apiUrl}/coordinates/move`,
            { direction }
        );
    }

    changeRadius(radius: number): Observable<Coordinate> {
        return this.http.patch<Coordinate>(
            `${environment.apiUrl}/coordinates/radius`,
            { radius }
        );
    }

    getCoordinates(): Observable<Coordinate[]> {
        return this.http.get<Coordinate[]>(`${environment.apiUrl}/coordinates`);
    }

    streamCoordinates(
        frequency: string = '1000',
        duration: string = '5000'
    ): Observable<Coordinate[]> {
        const subject = new Subject<Coordinate[]>();

        const params = new HttpParams()
            .set('frequency', frequency)
            .set('duration', duration);

        const url = `${environment.apiUrl}/coordinates/stream?${params.toString()}`;

        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            try {
                const data: Coordinate[] = JSON.parse(event.data);
                subject.next(data);
            } catch (e) {
                console.error('Parse error:', e);
            }
        };

        eventSource.onerror = (err) => {
            console.error('SSE Error:', err);
            eventSource.close();
            subject.complete();
        };

        setTimeout(() => {
            eventSource.close();
            subject.complete();
        }, parseInt(duration, 10));

        return subject.asObservable();
    }
}