import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoEditarComponent } from './components/productos/producto-editar/producto-editar.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoListarComponent } from './components/productos/producto-listar/producto-listar.component';
import {ProductoAgregarComponent} from './components/productos/producto-agregar/producto-agregar.component';
import {ProveedorAgregarComponent} from './components/proveedores/proveedor-agregar/proveedor-agregar.component';
import {ProveedorEditarComponent} from './components/proveedores/proveedor-editar/proveedor-editar.component';
import {ProveedorIndexComponent} from './components/proveedores/proveedor-index/proveedor-index.component';
import {ProveedorListarComponent} from './components/proveedores/proveedor-listar/proveedor-listar.component';

const routes: Routes = [
  {path: 'productos', component: ProductoIndexComponent},
  {path: 'listarProductos', component: ProductoListarComponent},
  {path: 'editarProductos', component: ProductoEditarComponent},
  {path: 'agregarProductos', component: ProductoAgregarComponent},
  {path: 'proveedor', component: ProveedorIndexComponent},
  {path: 'listarProveedor', component: ProveedorListarComponent},
  {path: 'editarProveedor', component: ProveedorEditarComponent},
  {path: 'agregarProveedor', component: ProveedorAgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
