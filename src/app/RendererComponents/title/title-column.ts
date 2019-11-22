// import { Column } from 'ag-grid-community';
import { TitleComponent } from './title.component'

export const titleColumn = {
    colId: '3',
    headerName: 'Video Title',
    field: 'snippet.title', // this.bloger.title, // videoId,
    cellRendererFramework: TitleComponent,
    cellRendererParams: { pathLink: 'https://www.youtube.com/watch?v=' }, // this.bloger.pathLink
    width: 400
};
