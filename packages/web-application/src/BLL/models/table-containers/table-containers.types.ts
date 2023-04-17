import {
    STTableContainer,
    STTableContainerPreview,
} from '@/DAL/services/table-containers/table-containers.service-types';

export type TTableContainersState = {
    previewItems: STTableContainerPreview[];
    currentItem: Nullable<STTableContainer>;
};
