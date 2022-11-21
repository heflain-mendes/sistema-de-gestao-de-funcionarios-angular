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

  displayedColumns: string[] = [
    'id',
    'nome',
    'data nascimento',
    'cargo',
    'salarioatual',
    'funcionario do mês',
    'remover'
  ];
  dataSource: Funcionario[] = []

  constructor(
    private funcionarioService: FuncionarioServiceService,
    private cargoService: CargoServiceService
  ) {
    this.funcionarioService.getAll().subscribe((el) => this.dataSource = el);
    this.cargoService.getAll().subscribe((el) => this.listCargo = el);
  }

  ngOnInit(): void {}

  retornaCargo(func : Funcionario) : string{
    if(!func || !this.listCargo) return "";
    return this.listCargo.filter(el => el.id == func.cargo)[0].cargo;
  }

  remover(func : Funcionario){
    this.funcionarioService.removeItem(func.id!);
    this.funcionarioService.getAll().subscribe((el) => this.dataSource = el);
  }
}
