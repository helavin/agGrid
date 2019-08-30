import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions, Column } from 'ag-grid-community';
// import { HttpClient, HttpResponseBase } from '@angular/common/http';
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

    // private agGrid: AgGridAngular;
    // private gridApi;
    // private gridColumnApi;

    // private icons;
    // private sideBar;
    // private frameworkComponents;

    rowData: any;
    private thumbnails = 'snippet.thumbnails.default.url';
    private publishedAt = 'snippet.publishedAt';
    private title = 'id.videoId';

    private selectedCount = 0;


    // private toolbarComponent: ToolbarComponent;
    // private clicks = 0;
    // public blogers: Array<any>; // IBloger[];

    constructor(private readService: ReadService/*, private http: HttpClient*/) {
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
                width: 115, sortable: true // filter: true
            },
            {
                headerName: 'Video Title', field: this.title,
                cellRendererFramework: UrlComponentComponent,
                cellRendererParams: 'https://www.youtube.com/watch?v=',
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
                    toolPanel: 'toolbarComponent',
                    // toolPanelParams: {
                    //     suppressRowGroups: true,
                    //     suppressValues: true,
                    // }
                }
            ],
            defaultToolPanel: 'customStats',

        };
        this.gridOptions.frameworkComponents = { toolbarComponent: ToolbarComponent };
    }

    ngOnInit() {
        this.rowData = this.readService.read();
    }


    onSelectionChanged(event: any) {
        const rowCount = event.api.getSelectedNodes().length;
        this.selectedCount = rowCount;
        this.gridOptions.columnApi.resetState();
    }


    // onChanged(increased: any) {
    //     increased === true ? this.clicks++ : this.clicks--;
    // }

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


