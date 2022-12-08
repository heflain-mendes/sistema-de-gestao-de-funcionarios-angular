import { CadastraFuncionarioComponent } from '../cadastra-funcionario.component';
import { FuncionarioState } from './FuncionarioState';

export class CreateFuncionarioState extends FuncionarioState {
  constructor(private cadastraFuncionario: CadastraFuncionarioComponent) {
    super(cadastraFuncionario);
  }

  override construir(): void {
    this.funcionarioComponent.formulario.get("funcionarioDoMes")?.setValue(false);
  }

  override salvar(): void {
    const funcionario = this.funcionarioComponent.formulario.value;

    this.funcionarioComponent.funcionarioService.save(funcionario).subscribe({
      next: () => {
        this.cadastraFuncionario.mensage.openMensage('funcionario salvo');
        this.funcionarioComponent.formulario.reset();
        this.funcionarioComponent.router.navigate(["funcionario"]);
      },
      error: () =>
        this.cadastraFuncionario.mensage.openMensage(
          'funcionario não pode ser salvo'
        ),
    });
  }
}
