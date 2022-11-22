import { Funcionario } from './../../model/Funcionario';
import { ShowMensageService } from './../../services/show-mensage/show-mensage.service';
import { FuncionarioServiceService } from './../../services/funcionario-service/funcionario-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { _isNumberValue } from '@angular/cdk/coercion';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-endereco-funcionario',
  templateUrl: './endereco-funcionario.component.html',
  styleUrls: ['./endereco-funcionario.component.css'],
})
export class EnderecoFuncionarioComponent {
  funcionario!: Funcionario;
  map: any;

  constructor(
    private router: ActivatedRoute,
    private fService: FuncionarioServiceService,
    private mensage: ShowMensageService
  ) {
    let id: string | null = router.snapshot.paramMap.get('id');

    if (id === null || !_isNumberValue(id)) {
      mensage.openMensage('Informe um id valido na url');
    } else {
      fService.getItem(parseInt(id)).subscribe({
        next: (next) => {
          this.funcionario = next;
          this.carregarMapa();
        },
        error: (erro) => mensage.openMensage(erro),
      });
    }
  }

  carregarMapa(): void {
    if (this.funcionario.endereco !== undefined) {
      this.map = Leaflet.map('map').setView(
        [
          this.funcionario.endereco.latitude,
          this.funcionario.endereco.longitude,
        ],
        13
      );

      Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);

      Leaflet.marker(
        [
          this.funcionario.endereco.latitude,
          this.funcionario.endereco.longitude,
        ],
        {
          icon: Leaflet.icon({
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
          }),
        }
      ).addTo(this.map);
    }
  }
}
