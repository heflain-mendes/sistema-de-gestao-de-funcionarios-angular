import { CadastraFuncionarioComponent } from './../cadastra-funcionario.component';

export abstract class FuncionarioState {
  protected funcionarioComponent!: CadastraFuncionarioComponent;

  constructor(funcionarioC: CadastraFuncionarioComponent) {
    this.funcionarioComponent = funcionarioC;
    funcionarioC.setState(this);
  }

  salvar(): void {
    throw new Error('Salvar não foi implementado');
  }

  construir(): void {
    throw new Error('Construir não foi implementado');
  }
}
