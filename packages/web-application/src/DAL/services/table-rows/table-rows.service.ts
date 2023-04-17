import { Inject, Service } from 'typedi';
import { HttpClientObservable } from '@/DAL/http-client/strategies/http-client-observable.strategy';
import { BaseService } from '../base.service';
import { STAbstract } from '@/DAL/services/services.types';
import { CreateTableRowPayload, UpdateTableRowPayload } from '@/DAL/services/table-rows/table-rows.types';
import { STTableRow } from '@/DAL/services/table-rows/table-rows.service-types';

@Service()
export class TableRowsService extends BaseService {
    constructor(
        @Inject()
        private readonly httpClient: HttpClientObservable,
    ) {
        super();
        this.serviceUrl = '/table-rows';
    }

    public getRowByTable() {
        return this.httpClient.getData<STTableRow>(this.getServiceEndpoint('/')).subscribe();
    }

    public getRowById(id: STAbstract['id']) {
        return this.httpClient.getData<STTableRow>(this.getServiceEndpoint('/', id)).subscribe();
    }

    public createTableRow(payload: CreateTableRowPayload) {
        return this.httpClient
            .postData(this.getServiceEndpoint('/create'), {
                body: payload,
            })
            .subscribe();
    }

    public updateTableRow(payload: UpdateTableRowPayload) {
        return this.httpClient
            .postData(this.getServiceEndpoint('/update'), {
                body: payload,
            })
            .subscribe();
    }

    public deleteTableRow(id: STAbstract['id']) {
        return this.httpClient.postData(this.getServiceEndpoint('/delete', id)).subscribe();
    }
}
