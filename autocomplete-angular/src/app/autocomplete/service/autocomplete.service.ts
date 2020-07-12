import { schools } from './../schools';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  endpoint : string = "http://localhost:3030/autocomplete";
  constructor(private httpClient: HttpClient) { 
    
  }

  getSuggestions(keyword:string)  {
    const params = new HttpParams()
    .set('keyword', keyword)

    return this.httpClient.get<schools[]>(this.endpoint, {params});
  }

}
