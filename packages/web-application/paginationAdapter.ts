import { Dictionary, EntityId, EntityState, IdSelector } from '@reduxjs/toolkit';
import { Filters, FiltersData, createStateOperator, createSingleArgumentStateOperator } from './adapter.helper';
import { createSelector, createStructuredSelector } from 'reselect';
import { Deserialize } from 'cerialize';
import * as _ from 'lodash';
import { toPlain } from './toPlain.helper';

const DEFAULT_PAGE_SIZE = 20;

export interface SetFilterPayload {
    prop: string;
    value: React.ReactText | React.ReactText[] | boolean | undefined;
    data?: any;
}

export enum LoadStatus {
    BLANK = 'BLANK',
    FETCHING = 'FETCHING',
    FETCHED = 'FETCHED',
    CRASHED = 'CRASHED',
}

export interface Page {
    ids: EntityId[];
    status: LoadStatus;
    numberOfElements?: number;
}

export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC',
}

export interface FiltersParams {
    sortField?: string;
    sortDirection?: SortDirection;
    filters: Filters;
    filtersData?: FiltersData;
}

export interface PaginationParams {
    number: number;
    size: number;
    totalElements?: number;
    totalPages?: number;
    numberOfElements?: number;
}

export interface PaginationExportParams extends Omit<FiltersParams, 'filters' | 'filtersData'>, Filters {}

export interface PaginationQueryParams extends PaginationExportParams {
    page: number;
    pageSize: number;
}

export interface PaginationState<E> extends EntityState<E>, Omit<PaginationParams, 'numberOfElements'>, FiltersParams {
    checked: EntityId[];
    pages: Page[];
    fields?: (keyof E)[];
}

export interface PaginationSelectors<E, S> {
    selectIds: (state: S) => EntityId[];
    selectEntities: (state: S) => Dictionary<E>;
    selectPages: (state: S) => Page[];

    selectAll: (state: S) => E[];
    selectTotal: (state: S) => number;
    selectById: (state: S, id: EntityId) => E | undefined;
    selectChecked: (state: S) => EntityId[];
    selectCheckedAll: (state: S) => boolean;

    selectCurrentPageIndex: (state: S) => number;
    selectPageByIndex: (state: S, index: number) => Page;
    selectCurrentPage: (state: S) => Page;
    selectByPageIndex: (state: S, index: number) => (E | undefined)[];
    selectByCurrentPage: (state: S) => (E | undefined)[];
    selectFields: (state: S) => (keyof E)[] | undefined;
    selectQueryParams: (state: S) => PaginationQueryParams;
    selectExportParams: (state: S) => PaginationExportParams;
    selectPaginationParams: (state: S) => PaginationParams;
    selectFiltersParams: (state: S) => FiltersParams;
    selectByChecked: (state: S) => (E | undefined)[];
}

function createSelectorsFactory<E>() {
    function getSelectors(): PaginationSelectors<E, PaginationState<E>>;
    function getSelectors<S>(selectState: (state: S) => PaginationState<E>): PaginationSelectors<E, S>;

    function getSelectors(selectState?: (state: any) => PaginationState<E>): PaginationSelectors<E, any> {
        // selectState
        if (!selectState) selectState = (S) => S;
        // helping selectors
        const selectId = (any: any, id: EntityId) => id;
        const selectPage = (any: any, index: number) => index;

        // baseSelectors
        const selectIds = createSelector(selectState, (state: PaginationState<E>) => state.ids);
        const selectEntities = createSelector(selectState, (state: PaginationState<E>) => state.entities);
        const selectPages = createSelector(selectState, (state: PaginationState<E>) => state.pages);

        // entities
        const selectAll = createSelector(selectIds, selectEntities, (ids: EntityId[], entities: Dictionary<E>): any =>
            ids.map((id: string | number) => entities[id]),
        );
        const selectTotal = createSelector(selectIds, (ids) => ids.length);
        const selectById = createSelector(
            selectEntities,
            selectId,
            (entities: Dictionary<E>, id: EntityId) => entities[id],
        );

        const selectNumber = createSelector(selectState, (state: PaginationState<E>) => state.number);
        const selectSize = createSelector(selectState, (state: PaginationState<E>) => state.size);
        const selectSortField = createSelector(selectState, (state: PaginationState<E>) => state.sortField);
        const selectSortDirection = createSelector(selectState, (state: PaginationState<E>) => state.sortDirection);
        const selectFilters = createSelector(selectState, (state: PaginationState<E>) => state.filters);
        const selectFiltersData = createSelector(selectState, (state: PaginationState<E>) => state.filtersData);
        const selectFields = createSelector(selectState, (state: PaginationState<E>) => state.fields);

        const selectTotalElements = createSelector(selectState, (state: PaginationState<E>) => state.totalElements);
        const selectTotalPages = createSelector(selectState, (state: PaginationState<E>) => state.totalPages);

        const pageByIndex = (pages: Page[], index: number) => pages[index] || { ids: [], status: LoadStatus.BLANK };
        const selectPageByIndex = createSelector(selectPages, selectPage, pageByIndex);
        const selectCurrentPage = createSelector(selectPages, selectNumber, pageByIndex);
        const selectCount = createSelector(selectCurrentPage, (page: Page) => page.numberOfElements);

        const enitiesByPage = (entities: Dictionary<E>, page: Page) => page.ids.map((id) => entities[id]);
        const enitiesByIds = (entities: Dictionary<E>, ids: EntityId[]) => ids.map((id) => entities[id]);
        const selectByPageIndex = createSelector(selectEntities, selectPageByIndex, enitiesByPage);
        const selectByCurrentPage = createSelector(selectEntities, selectCurrentPage, enitiesByPage);

        const selectFiltersParams = createStructuredSelector({
            sortField: selectSortField,
            sortDirection: selectSortDirection,
            filters: selectFilters,
            filtersData: selectFiltersData,
        });

        const selectPaginationParams = createStructuredSelector({
            number: selectNumber,
            size: selectSize,
            numberOfElements: selectCount,
            totalElements: selectTotalElements,
            totalPages: selectTotalPages,
        });

        const selectExportParams = createSelector([selectFiltersParams, selectFields], (filters, fields) => ({
            sortField: filters.sortField,
            sortDirection: filters.sortDirection,
            fields: filters.filters.text ? fields : undefined,
            ...filters.filters,
        }));

        const selectQueryParams = createSelector(
            [selectFiltersParams, selectPaginationParams, selectFields],
            (filters, pagination, fields) => ({
                page: pagination.number,
                pageSize: pagination.size,
                sortField: filters.sortField,
                sortDirection: filters.sortDirection,
                fields: filters.filters.text ? fields : undefined,
                ...filters.filters,
            }),
        );

        const selectChecked = createSelector(selectState, (state: PaginationState<E>) => state.checked);
        const selectCheckedAll = createSelector(
            selectCount,
            selectChecked,
            (count, checked) => !!count && count === checked.length,
        );
        const selectByChecked = createSelector(selectEntities, selectChecked, enitiesByIds);

        return {
            selectIds,
            selectEntities,
            selectPages,

            selectAll,
            selectTotal,
            selectById,
            selectCurrentPageIndex: selectNumber,
            selectPageByIndex,
            selectCurrentPage,
            selectByPageIndex,
            selectByCurrentPage,
            selectFields,
            selectExportParams,
            selectQueryParams,
            selectFiltersParams,
            selectPaginationParams,

            selectChecked,
            selectCheckedAll,
            selectByChecked,
        };
    }

    return { getSelectors };
}

function getInitialEntityState<V>(): PaginationState<V> {
    return {
        ids: [],
        entities: {},
        pages: [],
        size: DEFAULT_PAGE_SIZE,
        number: 0,
        filters: {},
        checked: [],
    };
}

function createInitialStateFactory<V>(options: Partial<PaginationState<V>>) {
    function getInitialState(): PaginationState<V>;
    function getInitialState<S extends object>(additionalState: S): PaginationState<V> & S;
    function getInitialState(additionalState: any = {}): any {
        return Object.assign(getInitialEntityState(), options, additionalState);
    }
    return { getInitialState };
}

export function createPaginatedStateAdapter<E>(selectId: IdSelector<E>, model: any) /*: PaginationStateAdapter<T>*/ {
    type R = PaginationState<E>;

    function removeAllMutably(state: R): void {
        Object.assign(state, {
            ids: [],
            entities: {},
            pages: [],
            checked: [],
        });
    }

    function setPageMutably(obj: any, state: R): void {
        Object.assign(state, _.pick(obj, ['totalElements', 'totalPages', 'size', 'number']));

        let page: Page = Object.assign({}, state.pages[state.number], { ids: [], status: LoadStatus.FETCHED });
        const items: any[] = obj.content.map((i: any) => toPlain(Deserialize(i, model)));

        page.ids = items.map((i) => selectId(i));
        page.numberOfElements = obj.numberOfElements || page.ids.length;
        state.pages[state.number] = page;

        items.forEach((item) => {
            state.entities[selectId(item)] = item;
        });

        const allEntities = Object.values(state.entities) as E[];

        state.ids = allEntities.map(selectId);
        state.checked = [];
    }

    function setPageNumberMutably(index: number, state: R): void {
        state.number = index;
        state.checked = [];
    }

    function setPageSizeMutably(size: number, state: R): void {
        if (state.size !== size) Object.assign(state, getInitialEntityState(), { size, totalPages: undefined });
    }

    function setPageStatusMutably(payload: { index: number; status: LoadStatus }, state: R): void {
        let page = state.pages[state.number];
        if (page && (page.status === LoadStatus.BLANK || page.status === LoadStatus.FETCHING)) {
            page.status = payload.status;
        } else {
            state.pages[state.number] = { ids: [], status: payload.status };
        }
    }

    function setFilterMutably(payload: SetFilterPayload, state: R): void {
        const prevValue = _.get(state.filters, payload.prop);
        if (_.isEqual(prevValue, payload.value)) return;
        let filters,
            filtersData = state.filtersData;
        if (payload.value === undefined) {
            filters = _.omit(state.filters, payload.prop);
            filtersData = _.omit(state.filtersData, payload.prop);
        } else {
            filters = { ...state.filters, [payload.prop]: payload.value };
            if (payload.data) {
                filtersData = Object.assign({}, state.filtersData, { [payload.prop]: payload.data });
            }
        }
        Object.assign(state, getInitialEntityState(), { filters, filtersData, totalPages: undefined });
    }

    function setFiltersMutably(filters: Filters, state: R): void {
        Object.assign(state, getInitialEntityState(), { filters, totalPages: undefined });
    }

    function setSortMutably(field: string, state: R): void {
        let sortDirection: SortDirection | undefined;
        let sortField: string | undefined;

        if (state.sortField !== field) {
            sortDirection = SortDirection.DESC;
            sortField = field;
        } else {
            switch (true) {
                case state.sortDirection == null:
                    sortDirection = SortDirection.DESC;
                    sortField = field;
                    break;
                case state.sortDirection === SortDirection.DESC:
                    sortDirection = SortDirection.ASC;
                    sortField = field;
                    break;
                // case state.sortDirection === SortDirection.ASC:
                // // do nothing, remains undefined
                // break;
            }
        }
        const filters = state.filters;
        Object.assign(state, getInitialEntityState(), { filters, sortField, sortDirection, totalPages: undefined });
    }

    function setCheckedMutably(id: EntityId, state: R): void {
        state.checked = _.xor(state.checked, [id]);
    }

    function setCheckedAllMutably(state: R): void {
        let page = state.pages[state.number];
        if (page.ids.length === state.checked.length) {
            state.checked = [];
        } else {
            state.checked = [...page.ids];
        }
    }

    function setUncheckedAllMutably(state: R): void {
        state.checked = [];
    }

    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        setPage: createStateOperator(setPageMutably),
        setPageNumber: createStateOperator(setPageNumberMutably),
        setPageStatus: createStateOperator(setPageStatusMutably),
        setPageSize: createStateOperator(setPageSizeMutably),
        setFilter: createStateOperator(setFilterMutably),
        setFilters: createStateOperator(setFiltersMutably),
        setSort: createStateOperator(setSortMutably),
        setChecked: createStateOperator(setCheckedMutably),
        setCheckedAll: createSingleArgumentStateOperator(setCheckedAllMutably),
        setUncheckedAll: createSingleArgumentStateOperator(setUncheckedAllMutably),
    };
}

export function createPaginationAdapter<E>(options: {
    size?: number;
    selectId?: IdSelector<E>;
    model: any;
    fields?: (keyof E)[];
    sortField?: string;
    sortDirection?: SortDirection;
}) {
    const { selectId, size, model, fields, sortField, sortDirection } = {
        size: DEFAULT_PAGE_SIZE,
        selectId: (instance: any) => instance.id,
        ...options,
    };

    const stateFactory = createInitialStateFactory<E>({ size, fields, sortField, sortDirection });
    const selectorsFactory = createSelectorsFactory<E>();
    const stateAdapter = createPaginatedStateAdapter(selectId, model);

    return {
        selectId,
        ...stateFactory,
        ...selectorsFactory,
        ...stateAdapter,
    };
}
