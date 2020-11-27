import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public producto;
  public token;
  public identity;
  private urlProductos: 'http://localhost:8080/producto';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  getProducto(){
    return this._http.get<Producto[]>(this.urlProductos);
  }

  createProducto(producto: Producto){
    return this._http.post<Producto>(this.urlProductos, producto);
  }

  editProducto(producto: Producto){
    return this._http.put<Producto>(this.urlProductos + '/' + producto.idProducto, producto);
  }

  getProductoId(id: number){
    return this._http.get<Producto>(this.urlProductos + '/' + id);
  }

  delete(producto: Producto){
   return this._http.delete<Producto>(this.urlProductos + '/' + producto.idProducto);
  }

}
