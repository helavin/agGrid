import { Component } from '@angular/core';

@Component({
  selector: 'app-img-component',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  private params: any;


  agInit(params: any): void {
    this.params = params;
  }
}
