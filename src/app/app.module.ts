import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { AppComponent } from './app.component';
import { ReadService } from './services/read.service';
import { GridApplicationComponent } from './grid-application/grid-application.component';
import { CheckboxComponent } from './renderer-components/checkbox/checkbox.component';
import { ThumbnailComponent } from './renderer-components/thumbnail/thumbnail.component';
import { TitleComponent } from './renderer-components/title/title.component';
import { DescriptionComponent } from './renderer-components/description/description.component';
import { PublishedAtComponent } from './renderer-components/published-at/published-at.component';
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
