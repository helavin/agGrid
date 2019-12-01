import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { AppComponent } from './app.component';
import { ReadService } from './services/read.service';
import { GridApplicationComponent } from './grid-application/grid-application.component';
import { CheckboxComponent } from './RendererComponents/checkbox/checkbox.component';
import { ThumbnailComponent } from './RendererComponents/thumbnail/thumbnail.component';
import { TitleComponent } from './RendererComponents/title/title.component';
import { DescriptionComponent } from './RendererComponents/description/description.component';
import { PublishedAtComponent } from './RendererComponents/publishedAt/publishedAt.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GridApplicationComponent,
    CheckboxComponent,
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
      CheckboxComponent,
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
