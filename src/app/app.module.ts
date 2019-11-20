import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';


import { AppComponent } from './app.component';
import { ReadService } from './read.service';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { ImgComponent } from './RendererComponents/img/img.component';
import { UrlComponentComponent } from './RendererComponents/url-component/url-component.component';
import { TxtComponent } from './RendererComponents/txt-component/txt.component';
import { DateComponent } from './RendererComponents/date/date.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    ImgComponent,
    UrlComponentComponent,
    TxtComponent,
    DateComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule, // EnterpriseMenu,
    AgGridModule.withComponents([
      ImgComponent,
      UrlComponentComponent,
      TxtComponent,
      DateComponent,
      ToolbarComponent
    ]),
  ],
  providers: [ReadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
