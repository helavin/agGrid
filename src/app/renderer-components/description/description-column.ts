import { DescriptionComponent } from './description.component';

/**
 * Description column configuration
 */
export const descriptionColumn = {
  colId: '4', headerName: 'Description',
  field: 'snippet.description', // this.bloger.description,
  cellRendererFramework: DescriptionComponent,
  resizable: true, width: 600,
  suppressSizeToFit: true
};
