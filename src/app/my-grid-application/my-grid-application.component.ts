import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
// import { Observable /*, Subject*/ } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { ICar } from '../Car';
// import { Bloger } from '../bloger';
import { ReadService } from '../read.service';
import { ImgComponentComponent } from '../RendererComponents/img-component/img-component.component';
import { UrlComponentComponent } from '../RendererComponents/url-component/url-component.component';
import { TxtComponentComponent } from '../RendererComponents/txt-component/txt-component.component';
import { DateComponentComponent } from '../RendererComponents/date-component/date-component.component';


@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    // styleUrls: ['./my-grid-application.component.scss']
})
export class MyGridApplicationComponent implements OnInit {
    private gridOptions: GridOptions;

    // columnDefs = [
    //     { headerName: 'Make', field: 'make', sortable: true, filter: true },
    //     { headerName: 'Model', field: 'model', sortable: true, filter: true },
    //     { headerName: 'Price', field: 'price', sortable: true, filter: true }
    // ];

    // statusCode: number;
    // private watch = 'https://www.youtube.com/watch?v=';
    rowData: any; // object[]; // any;
    private thumbnails = 'snippet.thumbnails.default.url';
    private publishedAt = 'snippet.publishedAt';
    private title = 'id.videoId';
    // rowData2: any;
    // public items = [];
    // public blogers: Array<any>; // Bloger[];

    constructor(private readService: ReadService, private http: HttpClient) {
        this.gridOptions = {} as GridOptions;
        this.gridOptions.columnDefs = [
            {
                headerName: '', field: this.thumbnails,
                cellRendererFramework: ImgComponentComponent,
                width: 100, autoHeight: true
            },
            {
                headerName: 'Published on', field: this.publishedAt,
                cellRendererFramework: DateComponentComponent,
                width: 160, sortable: true // resizable: true
            },
            {
                headerName: 'Video Title', field: this.title,
                cellRendererFramework: UrlComponentComponent,
                width: 300
            },
            {
                headerName: 'Description', field: 'snippet.description',
                cellRendererFramework: TxtComponentComponent,
                width: 200, autoHeight: true
            }
        ];


    }

    ngOnInit() {
        this.rowData = this.readService.read();
    }

}
