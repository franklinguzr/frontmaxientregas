import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {Router} from '@angular/router';
import {ProductoService} from '../../../services/producto.service';
import {Proveedor} from '../../../models/proveedor';
import {ProveedorService} from '../../../services/proveedor.service';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: ['./proveedor-agregar.component.css']
})
export class ProveedorAgregarComponent implements OnInit {

   proveedor: Proveedor;

  constructor(private router: Router, private service: ProveedorService ){}



  guardar(): void{
    this.service.createProveedor(this.proveedor).subscribe(data => {
      alert('Creado con exito');
      this.router.navigate(['listarProveedor']);
    });
  }
  regresar(): void{
    this.router.navigate(['Proveedor']);
  }
  ngOnInit(): void {
  }

}
