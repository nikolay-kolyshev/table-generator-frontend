import { Inject, Service } from 'typedi';
import { BaseService } from '../base.service';
import { HttpClientObservable } from '@DAL/strategies/http-client-observable.strategy';
import { STAbstract } from '@/DAL/services/services.types';
import { STTable } from '@/DAL/services/tables/tables.service-types';
import { CreateTablePayload } from '@/DAL/services/tables/tables.types';

@Service()
export class TablesService extends BaseService {
    constructor(
        @Inject()
        private readonly httpClient: HttpClientObservable,
    ) {
        super();
        this.serviceUrl = '/tables';
    }

    getAllSideTablesByTableContainerId(tableContainerId: STAbstract['id']) {
        this.httpClient
            .getData<STTable[]>(this.getServiceEndpoint('/side-tables-by-table-container', tableContainerId))
            .subscribe();
    }

    getMainTableByTableContainerId(tableContainerId: STAbstract['id']) {
        this.httpClient
            .getData<STTable>(this.getServiceEndpoint('/main-table-by-table-container', tableContainerId))
            .subscribe();
    }

    getTableById(id: STAbstract['id']) {
        this.httpClient.getData<STTable>(this.getServiceEndpoint('/', id)).subscribe();
    }

    createTable(payload: CreateTablePayload) {
        this.httpClient
            .postData(this.getServiceEndpoint('/create'), {
                body: payload,
            })
            .subscribe();
    }

    deleteTable(id: STAbstract['id']) {
        this.httpClient.deleteData(this.getServiceEndpoint('/delete')).subscribe();
    }
}
