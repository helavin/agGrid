import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-component',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent {

  private params: any;
  private watch = 'https://www.youtube.com/watch?v=';

  agInit(params: any): void {
    this.params = params;
  }

}
