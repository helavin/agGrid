import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { ReadService } from './read.service';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { ImgComponentComponent } from './RendererComponents/img-component/img-component.component';
import { UrlComponentComponent } from './RendererComponents/url-component/url-component.component';
import { TxtComponentComponent } from './RendererComponents/txt-component/txt-component.component';
import { DateComponentComponent } from './RendererComponents/date-component/date-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    ImgComponentComponent,
    UrlComponentComponent,
    TxtComponentComponent,
    DateComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([
      ImgComponentComponent,
      UrlComponentComponent,
      TxtComponentComponent,
      DateComponentComponent
    ]),
  ],
  providers: [ReadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
