import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/app/store";
import {LoadStatus, createPaginationAdapter} from "@/app/helpers/paginationAdapter";
import {TestItem} from "../testItem.model";
import {getTestItemsPage, removeCheckedTestItems} from "./testItemsList.thunks";

const listAdapter = createPaginationAdapter<TestItem>({
    model: TestItem,
    fields: ["name"],
});

export const listSlice = createSlice({
    name: "test/items/list",
    initialState: listAdapter.getInitialState(),
    reducers: {
        setPageNumber: listAdapter.setPageNumber,
        removeAll: listAdapter.removeAll,
        setPageSize: listAdapter.setPageSize,
        setSort: listAdapter.setSort,
        setFilter: listAdapter.setFilter,
        setChecked: listAdapter.setChecked,
        setCheckedAll: listAdapter.setCheckedAll,
        setUncheckedAll: listAdapter.setUncheckedAll,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTestItemsPage.pending, (state, action) => {
                listAdapter.setPageStatus(state, {index: state.number, status: LoadStatus.FETCHING});
            })
            .addCase(getTestItemsPage.rejected, (state, action) => {
                listAdapter.setPageStatus(state, {index: state.number, status: LoadStatus.CRASHED});
            })
            .addCase(getTestItemsPage.fulfilled, listAdapter.setPage)
            .addCase(removeCheckedTestItems.fulfilled, listAdapter.removeAll)
    },
});

export const {
    setPageNumber,
    removeAll,
    setPageSize,
    setSort,
    setFilter,
    setChecked,
    setCheckedAll,
    setUncheckedAll,
} = listSlice.actions;

export const testItemsSelectors = listAdapter.getSelectors<RootState>((state) => state.test.items.list);

export const list = listSlice.reducer;
