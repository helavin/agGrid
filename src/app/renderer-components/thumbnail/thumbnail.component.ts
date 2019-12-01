import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbnail-component',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {

  private params: any;


  agInit(params: any): void {
    this.params = params;
  }
}
