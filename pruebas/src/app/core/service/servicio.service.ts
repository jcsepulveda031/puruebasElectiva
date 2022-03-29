import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Libro } from '../models/libro';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url;
  
  constructor(
    private _http:HttpClient) { 
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }
  consumirServicio(){
    return this._http.get<Libro[]>(this.url);
  }
}
