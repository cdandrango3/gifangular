import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../service/prueba.service';
import { Dataexamen } from 'src/app/interface/dataexamen';

@Component({
  selector: 'app-gif-component',
  templateUrl: './gif-component.component.html',
  styleUrls: ['./gif-component.component.scss']
})
export class GifComponentComponent implements OnInit {
  constructor(public pruebaService:PruebaService) { 
  }
  ngOnInit(): void {
    this.pruebaService.getGif();
  }
  eliminar(id:number)
  {
    const prueba:Dataexamen= this.pruebaService.getGifData.find((item) => item.id === id)!;
    this.pruebaService.deleteGif(prueba);

  }
}
