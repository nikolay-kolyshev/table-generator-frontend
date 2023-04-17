import { STAbstract } from '@/DAL/services/services.types';

export class STTableRow extends STAbstract {
    public readonly name: string;
    public readonly surname: string;
    public readonly age: number;
}
