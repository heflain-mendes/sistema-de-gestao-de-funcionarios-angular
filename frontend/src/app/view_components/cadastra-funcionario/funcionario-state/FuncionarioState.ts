import { CadastraFuncionarioComponent } from './../cadastra-funcionario.component';
import { FuncionarioServiceService } from '../../../services/funcionario-service/funcionario-service.service';
import { Router } from '@angular/router';
import { ShowMensageService } from '../../../services/show-mensage/show-mensage.service';

export abstract class FuncionarioState {
  protected funcionarioComponent!: CadastraFuncionarioComponent;

  constructor(funcionarioC : CadastraFuncionarioComponent){
    this.funcionarioComponent = funcionarioC;
    funcionarioC.setState(this);
  }

  salvar(
    router: Router,
    funcionarioService: FuncionarioServiceService,
    mensage: ShowMensageService
  ): void {
    throw new Error("Salvar não foi implementado");
  }

  construir(): void{
    throw new Error("Construir não foi implementado")
  };
}
