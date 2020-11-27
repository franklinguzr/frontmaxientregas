import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Proveedor} from '../models/proveedor';
import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlProveedor = 'http://localhost:8080/proveedor';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {

  }
  getProveedor(){
    return this._http.get<Proveedor[]>(this.urlProveedor);
  }

  createProveedor(proveedor: Proveedor){
    return this._http.post<Proveedor>(this.urlProveedor, proveedor);
  }

  editProveedor(proveedor: Proveedor){
    return this._http.put<Proveedor>(this.urlProveedor + '/' + proveedor.id, proveedor);
  }

  getProveedorId(id: number){
    return this._http.get<Proveedor>(this.urlProveedor + '/' + id);
  }
  delete(proveedor: Proveedor){
    return this._http.delete<Producto>(this.urlProveedor + '/' + proveedor.id);
  }
}
