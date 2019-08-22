import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ImgComponentComponent } from '../RendererComponents/img-component/img-component.component';


@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    // styleUrls: ['./my-grid-application.component.scss']
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = {} as GridOptions;
        this.gridOptions.columnDefs = [
            { headerName: '', field: 'thumbnails', width: 50 },
            { headerName: 'Published on', field: 'publishedAt', width: 100, resizable: true },
            {
                /*Video Title” column content should be the link to the video on YouTube.
                For this purpose, please use this URL - https://www.youtube.com/watch?v=XXXX,
                where XXXX is "videoId" string, which is supplied in the data for each record. */
                headerName: 'Video Title', field: 'title', width: 300
            },
            { headerName: 'Description', field: 'description', width: 500 /*, autoHeight: true*/ },

            {
                headerName: 'ID', field: 'id', width: 100, pinned: 'right',
                // checkboxSelection: true
                // headerCheckboxSelection: true
            },
            {
                headerName: 'Value', field: 'value',
                pinned: 'right',
                sortable: true, filter: true,
                cellRendererFramework: ImgComponentComponent, width: 100
            },

        ];

        const watch = 'https://www.youtube.com/watch?v=';
        // var videoId = '3fumBcKC6RE';
        this.gridOptions.rowData = [
            {
                publishedAt: '2015-04-16T18:03:28.000Z',
                title: watch + 'MEyj_I38W7c',
                // tslint:disable-next-line: max-line-length
                description: 'John Oliver explains how prisoners make and spend money, and how companies can profit at the expense of their families.',
                id: 5, value: 10
            },
            {
                publishedAt: '2011-012-25T20:31:05.000Z', title: watch + '1jdWg2CGEi0',
                // tslint:disable-next-line: max-line-length
                description: 'Blame ft. John Newman is taken from the new album Motion, out now: Digital: http://smarturl.it/CHMotion?IQid=YT Stream: http://smarturl.it/StreamCH?IQid=YT ...',
                id: 10, value: 150
            },
            {
                publishedAt: '2018-03-08T03:15:45.000Z', title: watch + '6v30Do7cvjE',
                // tslint:disable-next-line: max-line-length
                description: 'John Travolta is never one to shy away from the dance floor. Once again, he\'s reminded us why in Pitbull\'s new music video for “3 To Tango.” Subscribe For All ...',
                id: 15, value: 20
            }
        ];

        // this.gridOptions.columnApi.setColumnVisible('value', false);
    }

    // ngOnInit() {
    // }

}
