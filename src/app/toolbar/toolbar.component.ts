import { Component /*, ViewChild, ViewContainerRef, Input, EventEmitter, Output*/ } from '@angular/core';
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

        this.totalRecords = 0;
        this.selectedRecords = 0;

        this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
    }

    toggleSelection() {
        this.toggle = !this.toggle;
        const cols = [];
        if (this.toggle) {
            for (let i = 0; i <= 4; i++) {
                cols.push(this.columns[i]);
            }

        } else {
            for (let i = 1; i <= 4; i++) {
                cols.push(this.columns[i]);
            }
        }
        this.params.api.setColumnDefs(cols);
    }


    updateTotals(): void {
        let totalRecords = 0;
        let selectedRecords = 0;

        this.params.api.forEachNode((rowNode) => {
            totalRecords += 1;

            if (rowNode.isSelected()) {
                selectedRecords += 1;
            }
        });

        this.totalRecords = totalRecords;
        this.selectedRecords = selectedRecords;

        // get all columns to array
        for (let i = 0; i <= 4; i++) {
            const tmp = this.params.api.getColumnDef(i.toString());
            this.columns.push(tmp);
        }
        this.columns = this.columns.slice(0, 5);
    }

}
