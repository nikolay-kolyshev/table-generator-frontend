import React, {memo, ReactElement} from "react";
import {
    StyledTable,
    StyledTableBody,
    StyledTableBodyData, StyledTableBodyRow,
    StyledTableHead,
    StyledTableHeadData, StyledTableWrapper
} from "@/table/table.styles";
import {ITableProps} from "@/table/table.types";
import {useTable} from "react-table";


const TableComponent = <ColumnData extends object = {}>({columnConfig, rowData, isLoading}: ITableProps<ColumnData>) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: columnConfig,
        data: rowData,
    });

    return (
        <StyledTableWrapper>
            <StyledTable {...getTableProps()}>
                <StyledTableHead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <StyledTableHeadData {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </StyledTableHeadData>
                            ))}
                        </tr>
                    ))}
                </StyledTableHead>
                <StyledTableBody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <StyledTableBodyRow {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <StyledTableBodyData {...cell.getCellProps()}>{cell.render("Cell")}</StyledTableBodyData>
                                    );
                                })}
                            </StyledTableBodyRow>
                        );
                    })}
                </StyledTableBody>
            </StyledTable>
        </StyledTableWrapper>
    )
}

export const Table = memo(TableComponent) as <ColumnData extends object = {}>(
    component: ITableProps<ColumnData>,
) => ReactElement;