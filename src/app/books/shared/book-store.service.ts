import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('https://api.angular.schule/books').pipe(
      retry(3),
      catchError(() => of([{
        isbn: '0000',
        title: 'Ersatzbuch',
        description: 'Echte Bücher nicht verfügbar',
        rating: 1
      }]))
    );
  }

  get(isbn: string): Observable<Book> {
    return this.http.get<Book>(`https://api.angular.schule/book/${isbn}`);
  }
}
