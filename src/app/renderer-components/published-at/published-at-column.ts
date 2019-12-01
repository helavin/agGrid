import { PublishedAtComponent } from './published-at.component';

/**
 * Published at column configuration
 */
export const publishedAtColumn = {
  colId: '2', headerName: 'Published on',
  field: 'snippet.publishedAt', // this.bloger.publishedAt,
  cellRendererFramework: PublishedAtComponent,
  width: 170,

  sortable: true,
  filter: true,
  suppressSizeToFit: true,
};
