import { Component, OnInit } from '@angular/core';
import { Column } from 'ag-grid-community';

@Component({
  selector: 'app-url-component',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent {
  // private pathLink: string; // 'https://www.youtube.com/watch?v=';
  private title: string;
  private id: any;

  agInit(params: any): void {
    this.title = params.value;
    this.id = params.value;
  }

}
