import { Component } from '@angular/core';
import { IToolPanel, IToolPanelParams } from 'ag-grid-community';

@Component({
    selector: 'app-toolbar', //
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements IToolPanel {
    private params: IToolPanelParams;

    private totalRecords: number;
    private selectedRecords: number;

    private toggle = true;

    private columns = [];

    refresh(): void {
    }

    agInit(params: IToolPanelParams): void {
        this.params = params;
        this.params.api.addEventListener('modelUpdated', () => this.updateTotals());
    }

    // TODO: 1) для работы достаточно скрывать и показывать первую колонку
    // this.params.api.columnController.columnApi.setColumnVisible('0', isOn);
    // 2) сбрасывать выделенные значения
    toggleSelection() {
        this.toggle = !this.toggle;
        const cols = [];
        if (this.toggle) {
            for (let i = 0; i <= 4; i++) {
                cols.push(this.columns[i]);
            }
            // this.params.api.columnController.columnApi.setColumnVisible('0', isOn);
        } else {
            for (let i = 1; i <= 4; i++) {
                cols.push(this.columns[i]);
            }
        }
        this.params.api.setColumnDefs(cols);
    }

    updateTotals(): void {
        this.totalRecords = this.params.api.getDisplayedRowCount();
        this.selectedRecords = this.params.api.getSelectedRows().length;

        // get all columns to array
        for (let i = 0; i <= 4; i++) {
            const tmp = this.params.api.getColumnDef(i.toString());
            this.columns.push(tmp);
        }
        this.columns = this.columns.slice(0, 5);
    }

}
