export class CreateTableRowPayload {
    public readonly name: string;
    public readonly surname: string;
    public readonly age: number;
    public readonly cityId: number;
    public readonly tableContainerId: number;
}

export class UpdateTableRowPayload {
    public readonly name?: string;

    public readonly surname?: string;

    public readonly age?: number;

    public readonly cityId?: number;
}
