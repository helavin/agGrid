import { Component } from '@angular/core';

@Component({
  selector: 'app-description-component',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

}
