import { ListarFuncionarioComponent } from './view_components/listar-funcionario/listar-funcionario.component';
import { CadastraFuncionarioComponent } from './view_components/cadastra-funcionario/cadastra-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'funcionario/:id', component: CadastraFuncionarioComponent},
  {path: 'funcionario', component: CadastraFuncionarioComponent},
  {path: 'list', component: ListarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
