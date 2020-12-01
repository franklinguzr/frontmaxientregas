import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {Router} from '@angular/router';
import {Proveedor} from '../../../models/proveedor';
import {ProveedorService} from '../../../services/proveedor.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: ['./proveedor-agregar.component.css']
})
export class ProveedorAgregarComponent implements OnInit {

    proveedorForm = new FormGroup({
      idProveedor: new FormControl('0'),
      razonSocial: new FormControl(),
      nit: new FormControl(),
      nombreContacto: new FormControl(),
      tipoDocContacto: new FormControl(),
      nroDocContacto: new FormControl(),
      emailContacto: new FormControl(),
      direccion: new FormControl(),
      telefonoFijo: new FormControl(),
      celular: new FormControl(),
      estado: new FormControl(),
  });
  constructor(private router: Router, private service: ProveedorService ){}



  guardar(form): void{
    this.router.navigate(['listarProveedor']);
    this.service.createProveedor(form).subscribe(data => {
      alert('Creado con exito');
    });
  }
  regresar(): void{
    this.router.navigate(['proveedor']);
  }
  ngOnInit(): void {
  }

}
