import { Component } from '@angular/core';
import { PruebaService } from '../../service/prueba.service';
@Component({
  selector: 'app-giffinder',
  templateUrl: './giffinder.component.html',
  styleUrls: ['./giffinder.component.scss']
})
export class GiffinderComponent {
  gifUrl: string = ""; 
 constructor (public pruebaservice: PruebaService) {

 }
addGif() {
  if(this.gifUrl == "" || this.gifUrl == null) {
    alert ("No se puede agregar un gif vacio");
  }
  else{
  this.pruebaservice.saveGif(this.gifUrl);
  this.gifUrl = "";
  }
}
  

 }


