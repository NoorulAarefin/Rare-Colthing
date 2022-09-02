import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpservice :HttpClient) { }

  getDailyQuotes(){
    let url = 'https://type.fit/api/quotes'
    return this.httpservice.get(url);
  }
}
