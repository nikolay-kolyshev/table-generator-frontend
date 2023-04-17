import { STAbstract } from '@/DAL/services/services.types';
import { STTableRow } from '@/DAL/services/table-rows/table-rows.service-types';

export class STTable extends STAbstract {
    public readonly isMain: boolean;
    public readonly rows: STTableRow[];
}
