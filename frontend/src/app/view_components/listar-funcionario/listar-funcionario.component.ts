import { Cargo } from './../../model/Cargo';
import { Funcionario } from './../../model/Funcionario';
import { CargoServiceService } from './../../services/cargo-service/cargo-service.service';
import { FuncionarioServiceService } from './../../services/funcionario-service/funcionario-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css'],
})
export class ListarFuncionarioComponent implements OnInit {
  listCargo!: Cargo[];

  displayedColumns: string[] = ['id', 'nome', 'data nascimento', 'cargo', 'SalarioAtual'];
  dataSource: Funcionario[] = [
    {
      id: 1,
      nome: 'heflain',
      dataNascimento: new Date(2000, 8, 9),
      cargo: 0,
      SalarioAtual : 500,
      endereco : {
        'id' : 1,
        'rua' : 'major',
        'estado' : 'ES',
        'pais' : "BR",
        'latitude': -5,
        'longitude' : 10,
        'numero' : 60 
      },
      funcionarioDoMes : false,
    },
  ];

  constructor(
    private funcionarioService: FuncionarioServiceService,
    private cargoService: CargoServiceService
  ) {
  }

  ngOnInit(): void {}
}
