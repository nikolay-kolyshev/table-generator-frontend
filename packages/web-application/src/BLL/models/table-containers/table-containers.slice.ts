import { createSlice } from '@reduxjs/toolkit';
import { TABLE_CONTAINERS_SLICE_KEY } from '@/BLL/models/table-containers/table-containers.constants';
import { TTableContainersState } from '@/BLL/models/table-containers/table-containers.types';

const initialState: TTableContainersState = {
    previewItems: [],
    currentItem: null,
};

const tableContainersSlice = createSlice({
    name: TABLE_CONTAINERS_SLICE_KEY,
    initialState,
    reducers: {},
});

export default tableContainersSlice.reducer;
