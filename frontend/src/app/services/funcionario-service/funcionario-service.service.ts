import { Funcionario } from './../../model/Funcionario';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FuncionarioServiceService {
  private url = "";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Funcionario[]>(this.url);
  }

  getItem(id : number){
    return this.http.get<Funcionario>(`${this.url}/${id}`);
  }

  removeItem(id : number){
    this.http.delete(`${this.url}/${id}`).subscribe();
  }
}
