import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getallbooklist(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/booklists');
  }
  public submitbook(book: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/booklists', book, {
      responseType: 'text' as 'json',
    });
  }
  public getdatabyid(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/booklists/` + id, {
      responseType: 'text' as 'json',
    });
  }
  public submitbookmark(bookmarks): Observable<any> {
    return this.http.post<any>('http://localhost:3000/bookmarks', bookmarks, {
      responseType: 'text' as 'json',
    });
  }
  public getallbookmarklist(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/bookmarks');
  }
  public deletalldatabyid(id: any): Observable<any> {
    return this.http.delete<any>(` http://localhost:3000/bookmarks/` + id, {
      responseType: 'text' as 'json',
    });
  }
}
