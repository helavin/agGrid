import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { RedComponentComponent } from '../red-component/red-component.component';


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
            {
                headerName: 'ID',
                field: 'id',
                width: 100,
                // checkboxSelection: true
                // headerCheckboxSelection: true
            },
            {
                headerName: 'Value',
                field: 'value',
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            { id: 5, value: 10 },
            { id: 10, value: 15 },
            { id: 15, value: 20 }
        ];
    }

    // ngOnInit() {
    // }

}
