import { Component } from '@angular/core';

@Component({
  selector: 'app-txt-component',
  templateUrl: './txt-component.component.html',
  styleUrls: ['./txt-component.component.scss']
})
export class TxtComponentComponent {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

}
