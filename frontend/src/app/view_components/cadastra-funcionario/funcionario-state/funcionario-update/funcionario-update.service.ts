import { FuncionarioState } from 'src/app/model/FuncionarioState';
import { CadastraFuncionarioComponent } from '../../cadastra-funcionario.component';

export class FuncionarioUpdateService implements FuncionarioState {
  constructor(private atualizaFuncionario: CadastraFuncionarioComponent) {
    atualizaFuncionario.funcionarioState = this;
  }
  construir(): void {
    if (this.atualizaFuncionario.id) {
      this.atualizaFuncionario.funcionarioService
        .getItem(this.atualizaFuncionario.id)
        .subscribe((fun) => {
          this.atualizaFuncionario.funcionario = fun;
        });
    }
  }

  salvar(): void {
    this.atualizaFuncionario.funcionarioService
      .save(this.atualizaFuncionario.funcionario)
      .subscribe(() =>
        this.atualizaFuncionario.mensage.openMensage('Funcionario atualizado')
      );
  }
}
