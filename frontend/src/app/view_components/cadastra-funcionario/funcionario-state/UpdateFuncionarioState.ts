import { Router } from '@angular/router';
import { FuncionarioServiceService } from 'src/app/services/funcionario-service/funcionario-service.service';
import { ShowMensageService } from 'src/app/services/show-mensage/show-mensage.service';
import { CadastraFuncionarioComponent } from '../cadastra-funcionario.component';
import { FuncionarioState } from './FuncionarioState';

export class UpdateFuncionarioState extends FuncionarioState {
  constructor(private atualizaFuncionario: CadastraFuncionarioComponent) {
    super(atualizaFuncionario);
  }

  override construir(): void {
    if (this.atualizaFuncionario.id) {
      this.atualizaFuncionario.funcionarioService
        .getItem(this.atualizaFuncionario.id)
        .subscribe((fun) => {
          this.atualizaFuncionario.funcionario = fun;
        });
    }
  }

  override salvar(
    router: Router,
    funcionarioService: FuncionarioServiceService,
    mensage: ShowMensageService
  ): void {
    funcionarioService
      .save(this.atualizaFuncionario.funcionario)
      .subscribe(() => mensage.openMensage('funcionario salvo'));

    router.navigate(['/list']);
  }
}
