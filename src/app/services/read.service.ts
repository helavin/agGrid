import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private http: HttpClient) { }

  private jsonUrl = // '/assets/blogers.json';
    'https://www.googleapis.com/youtube/v3/search' +
    '?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk' +
    '&maxResults=50&type=video&part=snippet&q=john';

  // private pathLink: 'https://www.youtube.com/watch?v=';
  private params: any;

  public get Params(): any {
    return this.params;
  }
  public set Params(v: any) {
    this.params = v;
  }

  public get Url(): string {
    const pathLink = this.params.column.colDef.cellRendererParams.pathLink;
    const id = this.params.node.data.id.videoId;
    return pathLink + id;
  }

  read() {
    return this.http.get(this.jsonUrl)
      .pipe(
        map((res: HttpResponseBase) => {
          const body: any = res;
          // TODO: возвращать строготипизированный объект или
          // массив объектов (Blogger)
          return body.items; // (res as any).
        })
      );
  }

}
