import { Component, OnInit } from '@angular/core';
// import { Column } from 'ag-grid-community';

@Component({
  selector: 'app-title-component',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  private title: string;
  private pathLink: string;
  private id: any;

  agInit(params: any): void {
    this.title = params.value;
    this.pathLink = params.column.colDef.cellRendererParams.pathLink;
    this.id = params.node.data.id.videoId;
  }

}
