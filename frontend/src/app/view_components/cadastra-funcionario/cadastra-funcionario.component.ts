import { Funcionario } from './../../model/Funcionario';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-funcionario',
  templateUrl: './cadastra-funcionario.component.html',
  styleUrls: ['./cadastra-funcionario.component.css'],
})
export class CadastraFuncionarioComponent implements OnInit {
  funcionario: Funcionario = {
    id: 0,
    nome: 'heflain',
    dataNascimento: new Date(2000,8, 9),
    cargo: 0,
    SalarioAtual: 500,
    endereco: {
      id: 1,
      rua: 'major',
      estado: 'ES',
      pais: 'BR',
      latitude: -5,
      longitude: 10,
      numero: 60,
    },
    funcionarioDoMes: false,
  };
  constructor() {}

  ngOnInit(): void {}

  salvar() {}
}
