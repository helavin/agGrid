import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';


import { AppComponent } from './app.component';
import { ReadService } from './read.service';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { ImgComponentComponent } from './RendererComponents/img-component/img-component.component';
import { UrlComponentComponent } from './RendererComponents/url-component/url-component.component';
import { TxtComponentComponent } from './RendererComponents/txt-component/txt-component.component';
import { DateComponent } from './RendererComponents/date/date.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    ImgComponentComponent,
    UrlComponentComponent,
    TxtComponentComponent,
    DateComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule, // EnterpriseMenu,
    AgGridModule.withComponents([
      ImgComponentComponent,
      UrlComponentComponent,
      TxtComponentComponent,
      DateComponent,
      ToolbarComponent
    ]),
  ],
  providers: [ReadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
