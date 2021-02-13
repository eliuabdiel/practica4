import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) {
    console.log('hola soy el servicio productos')
   }
   get(){
     return this.http.get<any[]>("http://localhost:5000/api/products");
   }
}
