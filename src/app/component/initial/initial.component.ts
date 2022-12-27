import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {
@Input () public initial: string ="";
@Output () public initialChange = new EventEmitter<string>();
sendData(data:string) {
  this.initialChange.emit(data);
}
}
