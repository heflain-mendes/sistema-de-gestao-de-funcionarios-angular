import { CreateFuncionarioState } from './funcionario-state/CreateFuncionarioState';
import { UpdateFuncionarioState } from './funcionario-state/UpdateFuncionarioState';
import { FuncionarioState } from './funcionario-state/FuncionarioState';
import { ShowMensageService } from './../../services/show-mensage/show-mensage.service';
import { Cargo } from './../../model/Cargo';
import { CargoServiceService } from './../../services/cargo-service/cargo-service.service';
import { FuncionarioServiceService } from './../../services/funcionario-service/funcionario-service.service';
import { Funcionario } from './../../model/Funcionario';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-funcionario',
  templateUrl: './cadastra-funcionario.component.html',
  styleUrls: ['./cadastra-funcionario.component.css'],
})
export class CadastraFuncionarioComponent implements OnInit {
  listCargo?: Cargo[];

  funcionario: Funcionario = {
    nome: '',
    dataNascimento: new Date(),
    cargo: 1,
    SalarioAtual: 0,
    endereco: {
      rua: '',
      estado: '',
      pais: '',
      latitude: 0,
      longitude: 0,
      numero: 0,
    },
    funcionarioDoMes: false,
  };

  private _id!: number;

  get id() : number{
    return this._id;
  }

  private funcionarioState!: FuncionarioState;

  setState(funcionarioState : FuncionarioState){
    this.funcionarioState = funcionarioState;
  }

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly cargoService: CargoServiceService,
    readonly funcionarioService: FuncionarioServiceService,
    readonly mensage: ShowMensageService
  ) {
    this.cargoService.getAll().subscribe((el) => (this.listCargo = el));

    const posivelId = route.snapshot.paramMap.get('id');

    if (posivelId) {
      this._id = Number.parseInt(posivelId);
      new UpdateFuncionarioState(this);
    } else {
      new CreateFuncionarioState(this);
    }

    this.funcionarioState.construir();
  }

  ngOnInit(): void {}

  salvar() {
    console.log(this.funcionario);
    this.funcionarioState.salvar(
      this.router,
      this.funcionarioService,
      this.mensage
    );
  }
}
