import { HttpErrorResponse } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { URL_API2 } from './app.module';
import { CargoServiceService } from './services/cargo-service/cargo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    @Inject(URL_API2) private urlApi: string,
    @Inject("APP_CONFIG") private appConfig: any,
    @Inject("BOAS_VINDAS") private boasVindas: any,
    @Inject("TESTE_USERFACTORY") private testeUserFactory: any,
    private servico1 : CargoServiceService
  ) {
    console.log(urlApi);
    console.log(appConfig.isdevelopment);
    console.log(boasVindas());
    console.log(testeUserFactory);
    servico1.getAll2().subscribe({
      next: (r)=>{console.log(r.headers)},
      error: (e : Error)=>{ console.log(e)}
    })
  }
}
