import { EstadosService } from './../../services/estados/estados.service';
import { Estado } from './../../model/Estado';
import { ShowMensageService } from 'src/app/services/show-mensage/show-mensage.service';
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
  listEstado!: Estado[];

  displayedColumns: string[] = [
    'id',
    'nome',
    'data nascimento',
    'cargo',
    'salarioatual',
    'funcionario do mês',
    'endereco',
    'remover',
  ];

  dataSource: Funcionario[] = [];

  constructor(
    private mensage: ShowMensageService,
    private funcionarioService: FuncionarioServiceService,
    private cargoService: CargoServiceService,
    private estadoService : EstadosService
  ) {}

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe((el) => (this.dataSource = el));
    this.cargoService.getAll().subscribe((el) => (this.listCargo = el));
    this.estadoService.estados.subscribe({next : (el) => this.listEstado = el});
  }

  retornaCargo(func: Funcionario): string {
    if (!func || typeof this.listCargo === 'undefined') return '';
    return this.listCargo.filter((el) => el.id == func.cargo)[0].cargo;
  }

  retornaEstado(func: Funcionario){
    if (!func || typeof this.listEstado === 'undefined') return '';
    return this.listEstado.filter((el) => el.id == func.endereco.estado)[0].nome;
  }

  remover(func: Funcionario) {
    this.funcionarioService.removeItem(func.id!).subscribe({
      next: () => {
        this.mensage.openMensage('funcionario removido');
        this.funcionarioService.getAll().subscribe({
          next: (el) => {
            this.dataSource = el;
          },
        });
      },
    });
  }
}
