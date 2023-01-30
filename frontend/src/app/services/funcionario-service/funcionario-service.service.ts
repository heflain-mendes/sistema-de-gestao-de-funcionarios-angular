import { environment } from './../../../environments/environment';
import { Funcionario } from './../../model/Funcionario';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioServiceService {
  private readonly url= `${environment.URL}funcionarios/`;

  constructor(private http: HttpClient) { }

  getAll(){
    var teste = this.http.get<Funcionario[]>(this.url);
    return teste;
  }

  getItem(id : number){
    return this.http.get<Funcionario>(`${this.url}/${id}`);
  }

  removeItem(id : number){
    return this.http.delete(`${this.url + id}`);
  }

  private create(funcionario : Funcionario){
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    return this.http.post(this.url, JSON.stringify(funcionario), {headers: header}).pipe(take(1));
  }

  private update(funcionario : Funcionario){
    return this.http.put(`${this.url + funcionario.id}`, funcionario).pipe(take(1));
  }

  save(funcionario : Funcionario){
    if(funcionario.id){
      return this.update(funcionario);
    }else{
      return this.create(funcionario);
    }
  }
}
