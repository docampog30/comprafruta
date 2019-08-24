import { Component, OnInit } from '@angular/core';
import { Registro } from '../../models/registro';
import { Producto } from '../../models/producto';
import { FRUTAS } from '../../constants/frutas';
import { VARIEDADES } from '../../constants/variedades';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro: Registro;
  producto: Producto;
  frutas = FRUTAS;
  variedades = VARIEDADES;

  constructor() {
    this.registro = { fecha: new Date(), cliente: {}, productos:[]};
    this.initProducto();
  }

  ngOnInit() {
  }

  agregarProducto($event) {
    this.registro.productos.push(this.producto);
    this.initProducto();
  }

  initProducto(){
    this.producto = { tipoFruta: this.frutas[0], tipoVariedad: this.variedades[0]};
  }

}