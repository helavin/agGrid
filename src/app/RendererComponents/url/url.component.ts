import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-component',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent {

  private watch: any; // 'https://www.youtube.com/watch?v=';
  private id: any;
  private tt: string;

  agInit(params: any): void {
    this.watch = params[0];
    this.id = params.value;
    this.tt = params.column.colDef.cellRendererParams[1];
  }

}
