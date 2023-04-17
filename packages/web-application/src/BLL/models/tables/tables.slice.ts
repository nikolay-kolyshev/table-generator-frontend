import { createSlice } from '@reduxjs/toolkit';
import { TABLES_SLICE_KEY } from '@/BLL/models/tables/tables.constants';
import { TTablesState } from '@/BLL/models/tables/tables.types';

const initialState: TTablesState = {
    items: [],
};

const tablesSlice = createSlice({
    name: TABLES_SLICE_KEY,
    initialState,
    reducers: {},
});

export default tablesSlice.reducer;
