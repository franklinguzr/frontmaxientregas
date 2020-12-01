import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {


  productoForm = new FormGroup({
    idProducto: new FormControl('0'),
    nombreProducto: new FormControl(),
    dimensiones: new FormControl(),
    unidadEmpaque: new FormControl(),
    precio: new FormControl()
});
  constructor(private router: Router, private service: ProductoService ){}



  guardar(form): void{
    this.service.createProducto(form).subscribe(data => {
    alert('Creado con exito');
    this.router.navigate(['listarProductos']);
  });
}
  regresar(): void{
    this.router.navigate(['productos']);
  }
  ngOnInit(): void {
  }

}
