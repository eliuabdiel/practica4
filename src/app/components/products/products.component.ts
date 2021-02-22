import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts: any [] = [];

  constructor(private productosService: ProductosService,
                      private router:Router) {

   }

  async ngOnInit() {
    this.listProducts = await this.productosService.get().toPromise();
  }

  verProducto(productoId) {
    console.log(productoId);
    this.router.navigate(['/product',productoId]);
  }

}
