import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoListarComponent } from './components/productos/producto-listar/producto-listar.component';
import { ProductoAgregarComponent } from './components/productos/producto-agregar/producto-agregar.component';
import { ProductoEditarComponent } from './components/productos/producto-editar/producto-editar.component';
import { ProductoService } from './services/producto.service';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { ProveedorListarComponent } from './components/proveedores/proveedor-listar/proveedor-listar.component';
import { ProveedorAgregarComponent } from './components/proveedores/proveedor-agregar/proveedor-agregar.component';
import { ProveedorEditarComponent } from './components/proveedores/proveedor-editar/proveedor-editar.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductoIndexComponent,
    ProductoListarComponent,
    ProductoAgregarComponent,
    ProductoEditarComponent,
    ProveedorIndexComponent,
    ProveedorListarComponent,
    ProveedorAgregarComponent,
    ProveedorEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
