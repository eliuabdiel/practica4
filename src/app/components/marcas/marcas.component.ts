import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/servicios/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  listMarcas: any [] = [];
  constructor(private marcasService: MarcasService) { }

  async ngOnInit() {
   
    this.listMarcas = await this.marcasService.get().toPromise();
    
  }

}
