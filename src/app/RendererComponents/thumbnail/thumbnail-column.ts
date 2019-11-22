import { ThumbnailComponent } from '../thumbnail/thumbnail.component';

/**
 * Thumbnail column configuration
 */
export const thumbnailColumn = {
  colId: '1',
  headerName: '',
  field: 'snippet.thumbnails.default.url', // this.bloger.thumbnail,
  cellRendererFramework: ThumbnailComponent,
  width: 100,
  sortable: false,
  filter: true,
  suppressSizeToFit: true,
};
