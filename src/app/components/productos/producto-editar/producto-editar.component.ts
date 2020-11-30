import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  producto: Producto;
    productoForm = new FormGroup({
    idProducto: new FormControl(this.producto.idProducto),
    nombreProducto: new FormControl(),
    dimensiones: new FormControl(),
    unidadEmpaque: new FormControl(),
    precio: new FormControl()
  });
  constructor(private router: Router,  private service: ProductoService) { }

  ngOnInit(): void {
    this.getProducto();
  }


  getProducto(){
    this.producto = this.service.producto;
    /*
    const id = localStorage.getItem('id');
    this.service.getProductoId(+id).subscribe (data => {
      this.producto = data;
    });
     */
  }
  regresar(): void{
    this.router.navigate(['listarProductos']);
  }
  edit(producto: Producto){
    this.service.editProducto(producto).subscribe(data => {
      this.producto = data;
      alert('se actualizo correctamente');
      this.router.navigate(['listarProductos']);
    });
  }
}
