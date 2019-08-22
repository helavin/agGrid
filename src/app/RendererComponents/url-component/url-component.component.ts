import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-component',
  templateUrl: './url-component.component.html',
  styleUrls: ['./url-component.component.scss']
})
export class UrlComponentComponent {

  private params: any;
  private watch = 'https://www.youtube.com/watch?v=';

  agInit(params: any): void {
    this.params = params;
  }

}
