import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { ReadService } from '../services/read.service';
import { CheckboxComponent } from '../RendererComponents/checkbox/checkbox.component';
import { checkboxColumn } from '../RendererComponents/checkbox/checkbox-column';
import { thumbnailColumn } from '../RendererComponents/thumbnail/thumbnail-column';
import { titleColumn } from '../RendererComponents/title/title-column';
import { descriptionColumn } from '../RendererComponents/description/description-column';
import { publishedAtColumn } from '../RendererComponents/publishedAt/published-at-column';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './grid-application.component.html',
    styleUrls: ['./grid-application.component.scss']
})
export class GridApplicationComponent implements OnInit {
    @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

    private gridOptions: GridOptions;

    rowData: any;

    private selectedCount = 0;


    constructor(private readService: ReadService) {
        this.gridOptions = {} as GridOptions;
        this.gridOptions.columnDefs = [
            checkboxColumn,
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
                    toolPanelFramework: ToolbarComponent
                }
            ],
            defaultToolPanel: 'customStats',

        };
    }

    ngOnInit(): void {
        this.rowData = this.readService.read();
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
                        window.open(this.readService.Url, '_blank');
                    },
                    cssClasses: ['redFont', 'bold']
                }
            ];
        }
        return result;
    }

    sizeToFit(): void {
        this.agGrid.api.sizeColumnsToFit();
    }

    onGridReady(event: { api: GridApi, columnApi: ColumnApi, type: string }): void {
        this.sizeToFit();
    }

}
