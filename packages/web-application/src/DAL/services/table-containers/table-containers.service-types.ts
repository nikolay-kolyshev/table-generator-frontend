import { STAbstract } from '@/DAL/services/services.types';
import { STTable } from '@/DAL/services/tables/tables.service-types';

export class STTableContainer extends STAbstract {
    public readonly mainTable: STTable;
    public readonly sideTables: STTable[];
}

export class STTableContainerPreview extends STAbstract {
    public readonly tablesCount: number;
}
