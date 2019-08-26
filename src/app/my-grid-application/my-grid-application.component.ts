import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions, Column } from 'ag-grid-community';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
// import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-enterprise';
// import { Observable /*, Subject*/ } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { IBloger } from '../bloger';
import { ReadService } from '../read.service';
import { ImgComponentComponent } from '../RendererComponents/img-component/img-component.component';
import { UrlComponentComponent } from '../RendererComponents/url-component/url-component.component';
import { TxtComponentComponent } from '../RendererComponents/txt-component/txt-component.component';
import { DateComponentComponent } from '../RendererComponents/date-component/date-component.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';



@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html',
    styleUrls: ['./my-grid-application.component.scss']
})
export class MyGridApplicationComponent implements OnInit {
    private gridOptions: GridOptions;
    // @ViewChild('agGrid') agGrid: AgGridAngular;
    private gridApi;
    private gridColumnApi;

    // private icons;
    // private sideBar;
    private frameworkComponents;

    rowData: any;
    private thumbnails = 'snippet.thumbnails.default.url';
    private publishedAt = 'snippet.publishedAt';
    private title = 'id.videoId';

    // public blogers: Array<any>; // IBloger[];

    constructor(private readService: ReadService, private http: HttpClient) {
        this.gridOptions = {} as GridOptions;
        this.gridOptions.columnDefs = [
            {
                headerName: '',
                checkboxSelection: true, headerCheckboxSelection: true,
                width: 35
            },
            {
                headerName: '', field: this.thumbnails,
                cellRendererFramework: ImgComponentComponent,
                width: 100, autoHeight: true
            },
            {
                headerName: 'Published on', field: this.publishedAt,
                cellRendererFramework: DateComponentComponent,
                width: 100, sortable: true // filter: true
            },
            {
                headerName: 'Video Title', field: this.title,
                cellRendererFramework: UrlComponentComponent,
                width: 400
            },
            {
                headerName: 'Description', field: 'snippet.description',
                cellRendererFramework: TxtComponentComponent, minWidth: 200,
                width: 400,
                resizable: true, filter: true // autoHeight: true
            }
        ];
        this.gridOptions.icons = { 'custom-stats': '<span class="ag-icon ag-icon-custom-stats"></span>' };
        this.gridOptions.sideBar = {
            toolPanels: [
                // {
                //     id: 'columns',
                //     labelDefault: 'Columns',
                //     labelKey: 'columns',
                //     iconKey: 'columns',
                //     toolPanel: 'agColumnsToolPanel'
                // },
                // {
                //     id: 'filters',
                //     labelDefault: 'Filters',
                //     labelKey: 'filters',
                //     iconKey: 'filter',
                //     toolPanel: 'agFiltersToolPanel'
                // },
                {
                    id: 'customStats',
                    labelDefault: 'Toolbar',
                    labelKey: 'customStats',
                    iconKey: 'custom-stats',
                    toolPanel: 'toolbarComponent'
                }
            ],
            defaultToolPanel: 'customStats'
        };
        this.gridOptions.frameworkComponents = { toolbarComponent: ToolbarComponent };
    }

    ngOnInit() {
        this.rowData = this.readService.read();
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        //     // this.readService.read()
        //     //     .subscribe(data => {
        //     //         this.rowData = data;
        //     //     });
        // this.rowData = this.readService.read();

        // action: () => {
        // if (params.Column === 'Video Title') {
        // window.alert('Alerting about ' + params.Column);
        // }
        // }
    }

    // getSelectedRows() {
    //     const selectedNodes = this.agGrid.api.getSelectedNodes();
    //     const selectedData = selectedNodes.map(node => node.data);
    //     const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    //     alert(`Selected nodes: ${selectedDataStringPresentation}`);
    // }

    getContextMenuItems(params) {
        // params.Column = 'Video Title';
        const result = [
            'copy',
            'copyWithHeaders',
            'paste',
            'separator',
            {
                name: 'Alert ' + params.value, // 'Open in new tab',
                action: () => {
                    // if (params.Column === 'Video Title') {
                    window.alert('Alerting about ' + params.value);
                    // }
                },
                cssClasses: ['redFont', 'bold']
            }
        ];
        return result;
    }





}


