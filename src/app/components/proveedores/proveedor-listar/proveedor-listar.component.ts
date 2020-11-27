import { Component, OnInit } from '@angular/core';
import {Proveedor} from '../../../models/proveedor';
import {ProveedorService} from '../../../services/proveedor.service';
import {Router, RouterModule} from '@angular/router';
import {Producto} from '../../../models/producto';


@Component({
  selector: 'app-proveedor-listar',
  templateUrl: './proveedor-listar.component.html',
  styleUrls: ['./proveedor-listar.component.css']
})
export class ProveedorListarComponent implements OnInit {

  proveedores: Proveedor[];
  constructor(private service: ProveedorService, private router: Router) { }

  ngOnInit(): void {
  }
  editar(proveedor: Proveedor){
    localStorage.setItem('id', proveedor.id.toString());
    this.router.navigate(['editarProveedor']);
  }
  eliminar(proveedor: Proveedor){
    this.service.delete(proveedor).subscribe(data => {
      this.proveedores = this.proveedores.filter(p => p !== proveedor);
    });
  }
  regresar(): void{
    this.router.navigate(['proveedor']);
  }
}
