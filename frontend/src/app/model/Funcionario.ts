import { Endereco } from './Endereco';
export interface Funcionario {
  id?: number;
  nome: string;
  dataNascimento: Date;
  endereco : Endereco;
  cargo :  number;
  salarioAtual : number;
  funcionarioDoMes : boolean;
}
