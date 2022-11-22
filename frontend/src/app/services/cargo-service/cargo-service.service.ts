import { Cargo } from './../../model/Cargo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoServiceService {
  private readonly url= `${environment.URL}cargos`;
  constructor(private http : HttpClient) {}

  getAll(){
    return this.http.get<Cargo[]>(this.url);
  }

  getItem(id : number){
    return this.http.get<Cargo>(`${this.url}/${id}`);
  }
}
