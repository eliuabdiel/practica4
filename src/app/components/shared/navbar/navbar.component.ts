import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {

  }

  async buscarProducto(txtProducto){
    console.log(txtProducto);
    const productos = await this.productosService.getItemBusqueda(txtProducto).toPromise();
    console.log(productos)
  }

}
