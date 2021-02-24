import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) {
   }
   get(){
     return this.http.get<any[]>("http://localhost:5000/api/products");
   }
   getWithId(id:number){
    return this.http.get<any[]>("http://localhost:5000/api/products/"+id);
   }

   getItemBusqueda(textoBusqueda:string){
     return this.http.get<any[]>("http://localhost:5000/api/products/search/"+textoBusqueda);
   }
}
