import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Proveedor} from '../../../models/proveedor';
import {ProveedorService} from '../../../services/proveedor.service';

@Component({
  selector: 'app-proveedor-editar',
  templateUrl: './proveedor-editar.component.html',
  styleUrls: ['./proveedor-editar.component.css']
})
export class ProveedorEditarComponent implements OnInit {



  proveedor: Proveedor = this.service.proveedor;

  constructor(private router: Router,  private service: ProveedorService) { }

  ngOnInit(): void {
   this.getProveedor();
  }


  getProveedor(){
    const id = localStorage.getItem('id');
    this.service.getProveedorId(+id).subscribe (data => {
      this.proveedor = data;
    });
  }
  regresar(): void{
    this.router.navigate(['listarProveedor']);
  }

  edit(proveedor: Proveedor){
    this.service.editProveedor(proveedor).subscribe(data => {
      this.proveedor = data;
      alert('se actualizo correctamente');
      this.router.navigate(['listarProductos']);
    });
  }

}
