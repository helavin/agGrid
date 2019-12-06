// import { Column } from 'ag-grid-community';
import { TitleComponent } from './title.component';


export const titleColumn = {
    colId: '3',
    headerName: 'Video Title',
    field: 'snippet.title',
    cellRendererFramework: TitleComponent,
    // TODO: все url перенести в сервис
    cellRendererParams: { pathLink: 'https://www.youtube.com/watch?v=' },
    width: 400
};
