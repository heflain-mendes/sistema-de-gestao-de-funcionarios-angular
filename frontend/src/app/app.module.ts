import { CadastraFuncionarioComponent } from './view_components/cadastra-funcionario/cadastra-funcionario.component';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './view/nav/nav.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//adicionais do angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarFuncionarioComponent } from './view_components/listar-funcionario/listar-funcionario.component';
import { EnderecoFuncionarioComponent } from './view_components/endereco-funcionario/endereco-funcionario.component';

//leaflet
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { InterceptadorHttpService } from './services/interceptador/interceptador-http.service';
import { CargoServiceService } from './services/cargo-service/cargo-service.service';

export const URL_API2 = new InjectionToken<string>('');
const APP_CONFIG = Object.freeze({
  url: 'http://localhost:8080',
  isdevelopment: false,
});

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListarFuncionarioComponent,
    EnderecoFuncionarioComponent,
    CadastraFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //material
    MatDatepickerModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,

    //angular
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //leaflet
    LeafletModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptadorHttpService,
      multi: true
    },
    {
      provide: 'URL_API',
      useValue: 'http://localhost:8080'
    },
    {
      provide: URL_API2,
      useValue: 'http://localhost:8080'
    },
    {
      provide: 'APP_CONFIG',
      useValue: APP_CONFIG
    },
    {
      provide: 'BOAS_VINDAS',
      useValue: () =>{
        return 'Bem vindo ao sistema de cadastro de funcionários';
      }
    },
    {
      provide: "TESTE_USERFACTORY",
      useFactory: (cargoService: CargoServiceService, CONFIG : any) => {
        return CONFIG.isdevelopment ? cargoService : cargoService.getAll();
      },
      deps: [CargoServiceService, 'APP_CONFIG']
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*

*/
