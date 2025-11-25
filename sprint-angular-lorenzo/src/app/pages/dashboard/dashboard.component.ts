import { Component, afterNextRender } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Veiculo, Veiculos, VeiculosAPI } from '../../models/veiculo.model';
import { VehicleData } from '../../models/vehicleData.model';


@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  
  listaVehicles?: Veiculos;

  veiculoSelecionado?: Veiculo;

  vinDigitado: string = '';

  dadosDoVeiculo?: VehicleData;

  constructor(private apiService: ApiService) {
    
    this.returnVehicles();
    this.returnVehiclesData();

  }

  returnVehicles() {
    this.apiService.buscarVehicles().subscribe({
      next: (vehicles) => {
        this.listaVehicles = vehicles.vehicles;
      },

      error: (err: Error) => {
        console.log("Erro")
      }
      
    });
  }

  returnVehiclesData() {
    
    this.apiService.buscarVehicleData(this.vinDigitado).subscribe({
      next: (vehicleData) => {
        this.dadosDoVeiculo = vehicleData;                
      }
    })
  }
}
