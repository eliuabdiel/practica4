import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts: any [] = [];

  constructor(private productosService: ProductosService) {

   }

  async ngOnInit() {

    this.listProducts = await this.productosService.get().toPromise();
    console.log(this.listProducts)
    console.log('termino')
  }

}
