import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dataexamen } from '../interface/dataexamen';
import { Datagif } from '../interface/dataexamen';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  gifData: Dataexamen[];
  author_id: number;
  constructor(public http: HttpClient) {
    this.gifData = [];
    this.author_id = 2003;
  }
  getGif():void {
    this.http.get<Dataexamen[]>(
      `https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=${this.author_id}`
    ).subscribe((data) => {
      this.gifData = data
    });
  }
  saveGif(url: string):void {
    const dataexamen:Datagif = {
      url: url,
      author_id: this.author_id
    }
    this.http.post<Dataexamen>("https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/", {...dataexamen}).subscribe((data) => {
      this.gifData.push(data);
    })
  }
   deleteGif(datagif:Dataexamen):void{
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: datagif,
    };
    this.http.delete<Dataexamen>('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/',options).subscribe((data) => {
      this.gifData = this.gifData.filter((item) => item.id !== datagif.id
      err=> alert("No se pudo eliminar el gif"));
    })
  }
  get getGifData(): Dataexamen[] {
    return this.gifData;
  }
}
