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
  if(this.gifUrl == "" || this.gifUrl == null || this.gifUrl.match(/^(http(s?):)([/|.|\w|\s|-])*\.(?:gif)/g) == null) {
    alert ("No se puede agregar un gif vacio");
    this.gifUrl = "";
  }
  else{
  this.pruebaservice.saveGif(this.gifUrl);
  this.gifUrl = "";
  }
}
  

 }


