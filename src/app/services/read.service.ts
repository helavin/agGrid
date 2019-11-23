import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private http: HttpClient) { }

  read(jsonUrl: string) {
    return this.http.get(jsonUrl)
      .pipe(
        map((res: HttpResponseBase) => {
          const body: any = res;
          console.log(body.items);
          return body.items; // (res as any).
        })
      );
  }
}
