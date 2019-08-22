import { Component } from '@angular/core';

@Component({
  selector: 'app-img-component',
  templateUrl: './img-component.component.html',
  styleUrls: ['./img-component.component.scss']
})
export class ImgComponentComponent {

  private params: any;


  agInit(params: any): void {
    this.params = params;
  }
}
