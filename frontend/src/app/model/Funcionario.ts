import { Endereco } from './Endereco';
export interface Funcionario {
  id : number;
  nome: string;
  dataNascimento: Date;
  endereco : Endereco;
  cargo :  number;
  SalarioAtual : number;
  funcionarioDoMes : boolean;
}
