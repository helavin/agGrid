import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-published-at-component',
  templateUrl: './published-at.component.html',
  styleUrls: ['./published-at.component.scss']
})
export class PublishedAtComponent {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  formatDate(date: string) {
    // 2011-05-12T20:01:31.000Z
    const dateAsString = new Date(date == null ? null : date.slice(0, 10));
    // const myDate = dateAsString.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3');
    const datePipe: DatePipe = new DatePipe('en-US');
    const cellDate = datePipe.transform(dateAsString, 'dd-MM-yyyy', 'en-US');
    return cellDate;
  }

}
