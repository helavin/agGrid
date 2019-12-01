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

  private pathLink: 'https://www.youtube.com/watch?v=';
  private params: any;

  public get Params(): any {
    return this.params;
  }
  public set Params(v: any) {
    this.params = v;
  }
  public get Url(): string {
    return this.getPathLink() + this.getVideoId();
  }

  read() {
    return this.http.get(this.jsonUrl)
      .pipe(
        map((res: HttpResponseBase) => {
          const body: any = res;
          return body.items; // (res as any).
        })
      );
  }

  getPathLink() {
    return this.params.column.colDef.cellRendererParams.pathLink as string;
  }
  getVideoId() {
    return this.params.node.data.id.videoId as string;
  }

}
