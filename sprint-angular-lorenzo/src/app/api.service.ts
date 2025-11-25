import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VeiculosAPI } from './models/veiculo.model';
import { Observable } from 'rxjs';
import { VehicleData } from './models/vehicleData.model';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3001/';
  
  constructor(private http: HttpClient) {}
  
  fazerLogin(dadosLogin: any): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlApi + 'login', dadosLogin);
  }

  buscarVehicles() : Observable<VeiculosAPI> {
    return this.http.get<VeiculosAPI>(this.urlApi + 'vehicles');
  }

  buscarVehicleData(vehicleInfo: string): Observable<VehicleData> {

    const body = { vin: vehicleInfo }
    return this.http.post<VehicleData>(this.urlApi + 'vehicleData', body);
  }
}
