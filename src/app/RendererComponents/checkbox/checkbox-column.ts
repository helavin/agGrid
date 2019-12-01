export const checkboxColumn = {
  colId: '0',
  lockPosition: true,
  checkboxSelection: true,
  headerCheckboxSelection: true,
  width: 40,
  headerComponentParams: (params) => {
    const firstColumnIndex = 0;
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    return displayedColumns[firstColumnIndex] === params.column;
  }
};

