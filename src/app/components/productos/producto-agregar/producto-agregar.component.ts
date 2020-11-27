import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {

  public producto: Producto;

  constructor(private router: Router, private service: ProductoService ){}



  guardar(): void{
  this.service.createProducto(this.producto).subscribe(data => {
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
