import { FuncionarioState } from 'src/app/model/FuncionarioState';
import { FuncionarioServiceService } from 'src/app/services/funcionario-service/funcionario-service.service';
import { ShowMensageService } from 'src/app/services/show-mensage/show-mensage.service';
import { CadastraFuncionarioComponent } from '../../cadastra-funcionario.component';

export class FuncionarioCreateService implements FuncionarioState {
  constructor(private cadastraFuncionario: CadastraFuncionarioComponent) {
    cadastraFuncionario.funcionarioState = this;
    cadastraFuncionario.funcionarioState = this;
  }

  construir(): void {
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

  salvar(): void {
    this.cadastraFuncionario.funcionarioService
      .save(this.cadastraFuncionario.funcionario)
      .subscribe(() =>
        this.cadastraFuncionario.mensage.openMensage('Funcionario salvo')
      );
  }
}
