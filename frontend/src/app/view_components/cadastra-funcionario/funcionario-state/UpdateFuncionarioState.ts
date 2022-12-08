import { CadastraFuncionarioComponent } from '../cadastra-funcionario.component';
import { FuncionarioState } from './FuncionarioState';

export class UpdateFuncionarioState extends FuncionarioState {
  constructor(atualizaFuncionario: CadastraFuncionarioComponent) {
    super(atualizaFuncionario);
  }

  override construir(): void {
    if (this.funcionarioComponent.id) {
      this.funcionarioComponent.funcionarioService
        .getItem(this.funcionarioComponent.id)
        .subscribe((fun) => {
          console.log(fun);
          this.funcionarioComponent.formulario.patchValue(fun);
          // f.get('nome')?.setValue(fun.nome);
          // f.get('dataNascimento')?.setValue(fun.dataNascimento);
          // f.get('cargo')?.setValue(fun.cargo);
          // f.get('salarioAtual')?.setValue(fun.salarioAtual);
          // f.get('rua')?.setValue(fun.endereco.rua);
          // f.get('estado')?.setValue(fun.endereco.estado);
          // f.get('pais')?.setValue(fun.endereco.pais);
          // f.get('latitude')?.setValue(fun.endereco.latitude);
          // f.get('longitude')?.setValue(fun.endereco.longitude);
          // f.get('numero')?.setValue(fun.endereco.numero);
          // f.get('funcionarioDoMes')?.setValue(fun.funcionarioDoMes);
          console.log(this.funcionarioComponent.formulario.value);
        });
    }
  }

  override salvar(): void {
    const funcionario = this.funcionarioComponent.formulario.value;
    //funcionario.id = this.funcionarioComponent.id;

    this.funcionarioComponent.funcionarioService.save(funcionario).subscribe({
      next: () =>
        this.funcionarioComponent.mensage.openMensage('funcionario salvo'),
      error: () =>
        this.funcionarioComponent.mensage.openMensage(
          'funcionario não pode ser salvo'
        ),
    });

    this.funcionarioComponent.router.navigate(['/list']);
  }
}
