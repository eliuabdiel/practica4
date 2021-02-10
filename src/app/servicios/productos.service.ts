import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() {
    
   }
   get(){
     console.log('este es un get del servicio productos')
   }
}
