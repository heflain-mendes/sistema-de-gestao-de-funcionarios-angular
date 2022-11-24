import { Estado } from './../../model/Estado';
import { EstadosService } from '../../services/estados/estados.service';
import { CreateFuncionarioState } from './funcionario-state/CreateFuncionarioState';
import { UpdateFuncionarioState } from './funcionario-state/UpdateFuncionarioState';
import { FuncionarioState } from './funcionario-state/FuncionarioState';
import { ShowMensageService } from './../../services/show-mensage/show-mensage.service';
import { Cargo } from './../../model/Cargo';
import { CargoServiceService } from './../../services/cargo-service/cargo-service.service';
import { FuncionarioServiceService } from './../../services/funcionario-service/funcionario-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/model/Funcionario';

@Component({
  selector: 'app-cadastra-funcionario',
  templateUrl: './cadastra-funcionario.component.html',
  styleUrls: ['./cadastra-funcionario.component.css'],
})
export class CadastraFuncionarioComponent implements OnInit {
  formulario!: FormGroup;
  listCargo!: Cargo[];
  listEstados!: Estado[];
  private _id?: number;
  private funcionarioState!: FuncionarioState;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _cargoService: CargoServiceService,
    private _funcionarioService: FuncionarioServiceService,
    private _mensage: ShowMensageService,
    private _estadosService : EstadosService
  ) {
    this._cargoService.getAll().subscribe((el) => (this.listCargo = el));
    const posivelId = _route.snapshot.paramMap.get('id');

    this._estadosService.estados.subscribe({
      next : (el) => this.listEstados = el
    })

    if (posivelId) {
      this._id = Number.parseInt(posivelId);
      new UpdateFuncionarioState(this);
    } else {
      new CreateFuncionarioState(this);
    }

    this.construir();
  }

  ngOnInit(): void {}

  construir(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      dataNascimento: new FormControl(null, [Validators.required]),
      cargo: new FormControl(null, [Validators.required]),
      salarioAtual: new FormControl(null, [Validators.required]),
      rua: new FormControl(null, [Validators.required]),
      estado: new FormControl(null, [Validators.required]),
      pais: new FormControl(null, [Validators.required]),
      latitude: new FormControl(null, [Validators.required]),
      longitude: new FormControl(null, [Validators.required]),
      numero: new FormControl(null, [Validators.required]),
      funcionarioDoMes: new FormControl(null, [Validators.required])
    });

    this.funcionarioState.construir();
  }

  salvar() {
    if (this.formulario.valid) this.funcionarioState.salvar();
  }

  get route() {
    return this._route;
  }

  get router() {
    return this._router;
  }

  get funcionarioService() {
    return this._funcionarioService;
  }

  get mensage() {
    return this._mensage;
  }

  get id(): number {
    if (typeof this._id === 'undefined') {
      throw Error('Id não iniciado');
    }
    return this._id;
  }

  get funcionario() : Funcionario{
    return {
      nome: this.formulario.value.nome,
      dataNascimento: this.formulario.value.dataNascimento,
      cargo: this.formulario.value.cargo,
      salarioAtual: this.formulario.value.salarioAtual,
      endereco: {
        rua: this.formulario.value.rua,
        estado: this.formulario.value.estado,
        pais: this.formulario.value.pais,
        latitude: this.formulario.value.latitude,
        longitude: this.formulario.value.longitude,
        numero: this.formulario.value.numero,
      },
      funcionarioDoMes: this.formulario.value.funcionarioDoMes
    };
  }

  setState(funcionarioState: FuncionarioState) {
    this.funcionarioState = funcionarioState;
  }
}
