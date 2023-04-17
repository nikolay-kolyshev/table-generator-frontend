export class CreateTablePayload {
    public readonly containerId: number;

    public readonly isMain?: boolean;

    public readonly rowsIds?: number[];

    public readonly copiedTableId?: number;
}
