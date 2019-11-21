import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private jsonUrl =
    // '/assets/blogers.json';

    'https://www.googleapis.com/youtube/v3/search' +
    '?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk' +
    '&maxResults=50&type=video&part=snippet&q=john';

  constructor(private http: HttpClient) { }

  read() {
    return this.http.get(this.jsonUrl)
      .pipe(
        map((data: HttpResponseBase) => {
          return this.extractData(data);
        })
      );
  }

  private extractData(res: any) {
    const body = res;
    // console.log('Extracting datas...');
    // console.log(body.items);
    return body.items;
  }

}
