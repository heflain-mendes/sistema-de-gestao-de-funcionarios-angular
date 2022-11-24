import { environment } from 'src/environments/environment';
import { Estado } from '../../model/Estado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  private url = environment.URL + 'estados';
  constructor(private http : HttpClient) { }

  get estados(){
    return this.http.get<Estado[]>(this.url);
  }

  estado(id : number){
    return this.http.get<Estado>(this.url + '/' + id);
  }
}
