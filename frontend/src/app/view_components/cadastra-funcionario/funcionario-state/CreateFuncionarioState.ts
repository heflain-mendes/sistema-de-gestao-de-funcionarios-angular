import { Router } from '@angular/router';
import { FuncionarioServiceService } from 'src/app/services/funcionario-service/funcionario-service.service';
import { ShowMensageService } from 'src/app/services/show-mensage/show-mensage.service';
import { CadastraFuncionarioComponent } from '../cadastra-funcionario.component';
import { FuncionarioState } from './FuncionarioState';

export class CreateFuncionarioState extends FuncionarioState {
  constructor(private cadastraFuncionario: CadastraFuncionarioComponent) {
    super(cadastraFuncionario);
  }

  override construir(): void {
    this.cadastraFuncionario.funcionario = {
      nome: '',
      dataNascimento: new Date(),
      cargo: 1,
      SalarioAtual: 0,
      endereco: {
        rua: '',
        estado: '',
        pais: '',
        latitude: 0,
        longitude: 0,
        numero: 0,
      },
      funcionarioDoMes: false,
    };
  }

  override salvar(
    router : Router,
    funcionarioService : FuncionarioServiceService,
    mensage : ShowMensageService
  ): void {
    funcionarioService
      .save(this.cadastraFuncionario.funcionario)
      .subscribe(() => mensage.openMensage('funcionario salvo'));

    this.construir();
  }
}
