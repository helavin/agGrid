import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { AppComponent } from './app.component';
import { ReadService } from './services/read.service';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { ThumbnailComponent } from './RendererComponents/thumbnail/thumbnail.component';
import { TitleComponent } from './RendererComponents/title/title.component';
import { DescriptionComponent } from './RendererComponents/description/description.component';
import { PublishedAtComponent } from './RendererComponents/publishedAt/publishedAt.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    ThumbnailComponent,
    TitleComponent,
    DescriptionComponent,
    PublishedAtComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule, // EnterpriseMenu,
    AgGridModule.withComponents([
      ThumbnailComponent,
      TitleComponent,
      DescriptionComponent,
      PublishedAtComponent,
      ToolbarComponent
    ]),
  ],
  providers: [ReadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
