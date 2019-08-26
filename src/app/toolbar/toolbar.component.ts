// import { Component, OnInit } from '@angular/core';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { IToolPanel, IToolPanelParams } from 'ag-grid-community';

@Component({
  selector: 'app-toolbar', //
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements /*OnInit*/ IToolPanel {
  private params: IToolPanelParams;

  private totalRecords: number;
  private selectedRecords: number;
  // private numSilver: number;
  // private numBronze: number;
  refresh(): void {
    // throw new Error('Method not implemented.');
  }

  agInit(params: IToolPanelParams): void {
    this.params = params;

    this.totalRecords = 0;
    this.selectedRecords = 0;
    // this.numSilver = 0;
    // this.numBronze = 0;

    // calculate stats when new rows loaded, i.e. onModelUpdated
    this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
  }

  updateTotals(): void {
    let selectedRecords = 0;
    // let numSilver = 0;
    // let numBronze = 0;

    this.params.api.forEachNode((rowNode) => {
      const data = rowNode.data;
      if (data.gold) { selectedRecords += data.gold; }
      // if (data.silver) { numSilver += data.silver; }
      // if (data.bronze) { numBronze += data.bronze; }
    });

    this.totalRecords = selectedRecords; // + numSilver + numBronze;
    this.selectedRecords = selectedRecords;
    // this.numSilver = numSilver;
    // this.numBronze = numBronze;
  }

}
