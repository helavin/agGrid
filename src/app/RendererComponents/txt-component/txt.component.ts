import { Component } from '@angular/core';

@Component({
  selector: 'app-txt-component',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.scss']
})
export class TxtComponent {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

}
