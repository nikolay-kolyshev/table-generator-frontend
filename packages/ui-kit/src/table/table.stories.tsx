import React, {useMemo} from 'react';
import {darkTheme, lightTheme} from '@/theme/theme.constants';
import {Table} from "@/table/table.component";
import {ITableProps} from "@/table/table.types";

export default {
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'white', value: lightTheme.colors.Background },
                { name: 'dark', value: darkTheme.colors.WhiteBg },
            ],
        },
    },
    title: 'Components/Table',
};

interface Test {
    data1: string;
    data2: string;
    data3: string;
    data4: string;
}

export const DefaultTableStory = () => {

    const rowTestData = useMemo<ITableProps<Test>['rowData']>(() => {
        return [
            {
                data1: 'test data 1',
                data2: 'test data 2',
                data3: 'test data 3',
                data4: 'test data 3',
            },
            {
                data1: 'test data 1',
                data2: 'test data 2',
                data3: 'test data 3',
                data4: 'test data 3',
            },
            {
                data1: 'test data 1',
                data2: 'test data 2',
                data3: 'test data 3',
                data4: 'test data 3',
            },
            {
                data1: 'test data 1',
                data2: 'test data 2',
                data3: 'test data 3',
                data4: 'test data 3',
            },
            {
                data1: 'test data 1',
                data2: 'test data 2',
                data3: 'test data 3',
                data4: 'test data 3',
            },
        ]
    }, []);

    const columnTestConfig = useMemo<ITableProps<Test>['columnConfig']>(() => {
        return [
            {
                Header: 'Data 1',
                accessor: 'data1',
            },
            {
                Header: 'Data 2',
                accessor: 'data2',
            },
            {
                Header: 'Data 3',
                accessor: 'data3',
            },
            {
                Header: 'Data 4',
                accessor: 'data4',
            },
        ]
    }, []);

    return (
        <div style={{width: '100%'}}>
            <Table<Test> columnConfig={columnTestConfig} rowData={rowTestData}/>
        </div>
    )

}