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

  // onSelectionChanged(event: any) {
  //   const rowCount = this.params.api.getSelectedNodes().length;
  //   const rowCountE = event.api.getSelectedNodes().length;
  //   console.log(rowCount);
  //   console.log(rowCountE);
  // }

  // @Output() changedBool = new EventEmitter<boolean>();

  refresh(): void {
  }

  agInit(params: IToolPanelParams): void {
    this.params = params;

    this.totalRecords = 0;
    this.selectedRecords = 0;

    this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
  }

  turnOnOff() {
    const tmp = this.params.api;
    // .gridColumnApi.setColumnVisible("", false); // .forEachNode((param) => {
    // .columnController.


    console.log(tmp);
    // .setHeaderHeight(5); // .selectAll();
  }
  // change(increased: any) {
  //   this.changedBool.emit(increased);
  // }

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
  }

}
