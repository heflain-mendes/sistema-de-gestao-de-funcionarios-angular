import { FuncionarioServiceService } from '../services/funcionario-service/funcionario-service.service';
import { ShowMensageService } from '../services/show-mensage/show-mensage.service';

export interface FuncionarioState {
  salvar(): void;
  construir(): void;
}
