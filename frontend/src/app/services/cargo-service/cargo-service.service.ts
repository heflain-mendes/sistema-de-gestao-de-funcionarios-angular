import { Cargo } from './../../model/Cargo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargoServiceService {
  private url = ""
  constructor(private http : HttpClient) {}

  getAll(){
    return this.http.get<Cargo[]>(this.url);
  }

  getItem(id : number){
    return this.http.get<Cargo>(`${this.url}/${id}`);
  }

  removeItem(id : number){
    this.http.delete(`${this.url}/${id}`).subscribe();
  }
}
