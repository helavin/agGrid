import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { ReadService } from '../services/read.service';
import { CheckboxComponent } from '../renderer-components/checkbox/checkbox.component';
import { checkboxColumn } from '../renderer-components/checkbox/checkbox-column';
import { thumbnailColumn } from '../renderer-components/thumbnail/thumbnail-column';
import { titleColumn } from '../renderer-components/title/title-column';
import { descriptionColumn } from '../renderer-components/description/description-column';
import { publishedAtColumn } from '../renderer-components/published-at/published-at-column';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './grid-application.component.html',
    styleUrls: ['./grid-application.component.scss']
})
export class GridApplicationComponent implements OnInit {
    @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

    private gridOptions: GridOptions;

    // TODO: создать типы, которые будут описывать контракт данных
    // получаемых с API
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
            defaultToolPanel: 'customStats'
        };
    }

    ngOnInit(): void {
        this.rowData = this.readService.read();
        this.agGrid.api.sizeColumnsToFit();
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
                        const pathLink = params.column.colDef.cellRendererParams.pathLink;
                        const id = params.node.data.id.videoId;
                        window.open(pathLink + id, '_blank');
                        // TODO: дубликат кода (тут и на app-title-component).
                        // Логику создания url можно поместить в сервис
                        // window.open(this.readService.Url, '_blank');
                    }
                }
            ];
        }
        return result;
    }

}
