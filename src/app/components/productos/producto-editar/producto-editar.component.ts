import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  producto: Producto;
  constructor(private router: Router,  private service: ProductoService) { }

  ngOnInit(): void {
    this.getProducto();
  }


  getProducto(){
    const id = localStorage.getItem('id');
    this.service.getProductoId(+id).subscribe (data => {
      this.producto = data;
    });
  }
  regresar(): void{
    this.router.navigate(['productos']);
  }
  edit(producto: Producto){
    this.service.editProducto(producto).subscribe(data => {
      this.producto = data;
      alert('se actualizo correctamente');
      this.router.navigate(['listarProductos']);
    });
  }
}
