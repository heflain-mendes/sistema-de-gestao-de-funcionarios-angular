import { FuncionarioState } from './../../model/FuncionarioState';
import { ShowMensageService } from './../../services/show-mensage/show-mensage.service';
import { Cargo } from './../../model/Cargo';
import { CargoServiceService } from './../../services/cargo-service/cargo-service.service';
import { FuncionarioServiceService } from './../../services/funcionario-service/funcionario-service.service';
import { Funcionario } from './../../model/Funcionario';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioCreateService } from './funcionario-state/funcionario-create/funcionario-create.service';
import { FuncionarioUpdateService } from './funcionario-state/funcionario-update/funcionario-update.service';

@Component({
  selector: 'app-cadastra-funcionario',
  templateUrl: './cadastra-funcionario.component.html',
  styleUrls: ['./cadastra-funcionario.component.css'],
})
export class CadastraFuncionarioComponent implements OnInit {
  funcionarioState!: FuncionarioState;
  id: number | null = null;
  listCargo?: Cargo[];

  funcionario!: Funcionario;


  constructor(
    readonly route : ActivatedRoute,
    readonly cargoService: CargoServiceService,
    readonly funcionarioService: FuncionarioServiceService,
    readonly mensage: ShowMensageService
  ) {
    this.cargoService.getAll().subscribe((el) => (this.listCargo = el));

    const posivelId = route.snapshot.paramMap.get("id");

    if(posivelId){
      this.id = Number.parseInt(posivelId);
      new FuncionarioUpdateService(this);
    }else{
      new FuncionarioCreateService(this);
    }

    this.funcionarioState.construir();
  }

  ngOnInit(): void {}

  salvar() {
    console.log(this.funcionario);
    this.funcionarioState.salvar();
  }
}
