import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(public http: HttpClient) {
  }
  get(){
    return this.http.get<any[]>("http://localhost:5000/api/marcas");
  }
}
