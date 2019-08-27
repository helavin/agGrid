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
    let totalRecords = 0;
    let selectedRecords = 0;
    // let numSilver = 0;
    // let numBronze = 0;

    this.params.api.forEachNode((rowNode) => {
      totalRecords += 1;
      const data = rowNode.data;
      // const rn = rowNode.isSelected();
      // console.log(rn);
      if (/*data*/rowNode.isSelected()) {
        selectedRecords += 1; // data.snippet.publishedAt;
      }

    });

    // console.log(selectedRecords);
    this.totalRecords = totalRecords; // + numSilver + numBronze;
    this.selectedRecords = selectedRecords;
    // this.numSilver = numSilver;
    // this.numBronze = numBronze;
  }

}
