import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBookList() {
    return this.http.post('http://krapipl.imumk.ru:8082/api/mobilev1/update', { data: '' })
  }
}
