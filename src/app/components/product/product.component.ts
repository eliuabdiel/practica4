import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = {};
  private sub: any;
  constructor(
      private activedRoute: ActivatedRoute,
      private productosService: ProductosService
  ) { }

  async ngOnInit(){
    // Obtengo el id de la url
    this.sub = await this.activedRoute.params.subscribe(async params => {
      this.product = await this.productosService.getWithId(params["id"]).toPromise();
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
