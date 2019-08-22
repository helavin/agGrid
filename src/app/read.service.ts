import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { IBloger } from './bloger';


@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private jsonUrl =
    '/assets/blogers.json';
  // '/assets/cars.json';

  /*'https://www.googleapis.com/youtube/v3/search' +
  '?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk' +
  '&maxResults=50&type=video&part=snippet&q=john';*/

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

  // readT<T>(model: T | any): Observable<T | T[]> {
  //   // console.log(this.httpOptions.params.get('url'));
  //   // return this.http.get<T | T[]>(
  //   //   this.myHost + '/get-articles' // , this.httpOptions
  //   // ); // /${model.tableName}`
  //   return this.http.get<T | T[]>(this.jsonUrl);
  // }

}
