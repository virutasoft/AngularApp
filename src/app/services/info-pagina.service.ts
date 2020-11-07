import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any;
  cargada = false;
  constructor(private http: HttpClient ) {
    // console.log('Servicio de infoPagina listo.');


    // leer archivo json
    this.http.get('assets/data/data-pagina.json')
.subscribe( resp => {

  this.cargada = true;
  this.info = resp;
  console.log(resp);
});
  }
}
