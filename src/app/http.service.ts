import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  code: string;
  constructor(private http: HttpClient) { }

  getCurrency(code) {
    return this.http.get('http://api.nbp.pl/api/exchangerates/rates/a/'+code+'/?format=json');
  }
}
