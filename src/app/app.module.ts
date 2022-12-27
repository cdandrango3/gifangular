import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './component/initial/initial.component';
import  {HttpClientModule} from '@angular/common/http';
import { GifComponentComponent } from './component/gif-component/gif-component.component';
import { GiffinderComponent } from './component/giffinder/giffinder.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    GifComponentComponent,
    GiffinderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
