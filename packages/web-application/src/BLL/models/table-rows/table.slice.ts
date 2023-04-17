import { createSlice } from '@reduxjs/toolkit';
import { TTableContainersState } from '@/BLL/models/table-containers/table-containers.types';
import { TABLES_SLICE_KEY } from '@/BLL/models/tables/tables.constants';

const initialState: TTableContainersState = {
    previewItems: [],
    currentItem: null,
};

const tablesSlice = createSlice({
    name: TABLES_SLICE_KEY,
    initialState,
    reducers: {},
});

export default tablesSlice.reducer;
