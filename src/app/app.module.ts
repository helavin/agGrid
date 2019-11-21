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
import { UrlComponent } from './RendererComponents/url/url.component';
import { TxtComponent } from './RendererComponents/txt/txt.component';
import { DateComponent } from './RendererComponents/date/date.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    ImgComponent,
    UrlComponent,
    TxtComponent,
    DateComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule, // EnterpriseMenu,
    AgGridModule.withComponents([
      ImgComponent,
      UrlComponent,
      TxtComponent,
      DateComponent,
      ToolbarComponent
    ]),
  ],
  providers: [ReadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
