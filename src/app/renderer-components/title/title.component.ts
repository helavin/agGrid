import { ReadService } from '../../services/read.service';
import { Component, OnInit } from '@angular/core';
// import { Column } from 'ag-grid-community';

@Component({
  selector: 'app-title-component',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  private title: string;
  private url: string;

  constructor(private readService: ReadService) { }

  agInit(params: any): void {
    this.readService.Params = params;
    this.title = params.value;
    this.url = this.readService.Url;
  }

}
