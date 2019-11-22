import { Component, OnInit } from '@angular/core';
import { Column } from 'ag-grid-community';

@Component({
  selector: 'app-title-component',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  // private pathLink: string; // 'https://www.youtube.com/watch?v=';
  private title: string;
  private id: any;

  agInit(params: any): void {
    this.title = params.value;
    this.id = params.value;
  }

}
