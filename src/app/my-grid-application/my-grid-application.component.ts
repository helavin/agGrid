import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions, Column } from 'ag-grid-community';
// import { HttpClient, HttpResponseBase } from '@angular/common/http';
// import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-enterprise';
// import { Observable /*, Subject*/ } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { IBloger } from '../bloger';
import { ReadService } from '../read.service';
import { ImgComponent } from '../RendererComponents/img/img.component';
import { UrlComponent } from '../RendererComponents/url/url.component';
import { TxtComponent } from '../RendererComponents/txt/txt.component';
import { DateComponent } from '../RendererComponents/date/date.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    styleUrls: ['./my-grid-application.component.scss']
})
export class MyGridApplicationComponent { // implements OnInit {
    private gridOptions: GridOptions;

    // private agGrid: AgGridAngular;
    private gridApi;
    private gridColumnApi;

    // private icons;
    // private sideBar;
    // private frameworkComponents;

    rowData: any;
    private thumbnails = 'snippet.thumbnails.default.url';
    private publishedAt = 'snippet.publishedAt';
    private title = 'id.videoId';

    private selectedCount = 0;

    // public blogers: Array<any>; // IBloger[];

    constructor(private readService: ReadService) {
        this.gridOptions = {} as GridOptions;
        this.gridOptions.columnDefs = [
            {
                colId: '0', lockPosition: true,
                checkboxSelection: true, headerCheckboxSelection: true,
                width: 35
            },
            {
                colId: '1', headerName: '',
                field: this.thumbnails,
                cellRendererFramework: ImgComponent,
                width: 100
            },
            {
                colId: '2', headerName: 'Published on', field: this.publishedAt,
                cellRendererFramework: DateComponent,
                width: 115
            },
            {
                colId: '3', headerName: 'Video Title', field: this.title,
                cellRendererFramework: UrlComponent,
                cellRendererParams: 'https://www.youtube.com/watch?v=',
                width: 400
            },
            {
                colId: '4', headerName: 'Description', field: 'snippet.description',
                cellRendererFramework: TxtComponent,
                resizable: true, width: 600
            }
        ];
        this.gridOptions.rowHeight = 60;
        this.gridOptions.icons = { 'custom-stats': '<span class="ag-icon ag-icon-custom-stats"></span>' };
        this.gridOptions.sideBar = {
            toolPanels: [
                {
                    id: 'customStats',
                    labelDefault: 'Toolbar',
                    labelKey: 'customStats',
                    iconKey: 'custom-stats',
                    toolPanel: 'toolbarComponent',
                }
            ],
            defaultToolPanel: 'customStats',

        };
        this.gridOptions.frameworkComponents = { toolbarComponent: ToolbarComponent };
    }



    // ngOnInit() {
    //     this.rowData = this.readService.read();
    // }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.rowData = this.readService.read();

        // params.api.addGlobalListener((type, event) => {
        //     if (type.indexOf('column') >= 0) {
        //       console.log('Got column event: ', event);
        //     }
        //   });

    }


    onSelectionChanged(event: any) {
        this.selectedCount = event.api.getSelectedNodes().length;
        this.gridOptions.columnApi.resetColumnState();
    }


    getContextMenuItems(params: any) {
        let result: any;
        if (params.column.colDef.headerName === 'Video Title') {
            result = [
                'copy',
                'copyWithHeaders',
                'paste',
                'separator',
                {
                    name: 'Open in new tab',
                    action: () => {
                        const url = params.column.colDef.cellRendererParams + params.value;
                        window.open(url, '_blank');
                    },
                    cssClasses: ['redFont', 'bold']
                }
            ];

        }
        return result;
    }




}


