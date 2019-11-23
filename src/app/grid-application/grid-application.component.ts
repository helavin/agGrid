import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions, Column } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { Bloger } from '../bloger';
import { ReadService } from '../services/read.service';
import { thumbnailColumn } from '../RendererComponents/thumbnail/thumbnail-column';
import { titleColumn } from '../RendererComponents/title/title-column';
import { descriptionColumn } from '../RendererComponents/description/description-column';
import { publishedAtColumn } from '../RendererComponents/publishedAt/published-at-column';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { from } from 'rxjs';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './grid-application.component.html',
    styleUrls: ['./grid-application.component.scss']
})
export class GridApplicationComponent {
    private gridOptions: GridOptions;

    private gridApi: any;
    private gridColumnApi: any;

    rowData: any;

    private selectedCount = 0;

    constructor(private readService: ReadService) {
        this.gridOptions = {} as GridOptions;
        this.gridOptions.columnDefs = [
            {
                colId: '0',
                lockPosition: true,
                checkboxSelection: true,
                headerCheckboxSelection: true,
                width: 35
            },
            thumbnailColumn,
            publishedAtColumn,
            titleColumn,
            descriptionColumn
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
        console.log(this.rowData);
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
                        const url = params.column.colDef.cellRendererParams.pathLink
                            + params.node.data.id.videoId;
                        console.log(params.node.data.id.videoId);
                        window.open(url, '_blank');
                    },
                    cssClasses: ['redFont', 'bold']
                }
            ];

        }
        return result;
    }

}
