import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-component',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.scss']
})
export class DateComponentComponent {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  formatDate(date: string) {
    // 2011-05-12T20:01:31.000 Z
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);
    const dateAsString = `${month}-${day}-${year}`;
    // const myDate = dateAsString.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3');
    const datePipe: DatePipe = new DatePipe('en-US');
    const cellDate = datePipe.transform(dateAsString, 'dd-MM-yyyy', 'en-US');
    return cellDate;
  }

}
