import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-component',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

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
