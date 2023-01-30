import { Cargo } from './../../model/Cargo';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CargoServiceService {
  private readonly url = `${environment.URL}cargos`;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Cargo[]>(this.url);
  }

  getItem(id: number) {
    return this.http.get<Cargo>(`${this.url}/${id}`);
  }

  getAll2(){
    return this.http.get(this.url, {observe: 'response'}).pipe(
      retry(2),
      catchError(
        (err)=>{
          console.log("deu ruim");
          return throwError(()=>{new Error("Deu Ruim")});
        }
      )
    )
  }
}
