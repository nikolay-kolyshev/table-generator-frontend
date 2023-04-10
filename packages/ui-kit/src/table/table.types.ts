import {Column} from "react-table";

export interface ITableProps<ColumnData extends object = {}> {
    columnConfig: Array<Column<ColumnData>>;
    rowData: Array<ColumnData>;
    isLoading?: boolean;
    manualPagination?: boolean;
}

