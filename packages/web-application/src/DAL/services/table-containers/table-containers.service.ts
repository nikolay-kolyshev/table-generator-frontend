import { Inject, Service } from 'typedi';
import { HttpClientObservable } from '@/DAL/http-client/strategies/http-client-observable.strategy';
import { BaseService } from '../base.service';
import { STAbstract } from '@/DAL/services/services.types';
import {
    STTableContainer,
    STTableContainerPreview,
} from '@/DAL/services/table-containers/table-containers.service-types';
import { CopyTablePayload } from '@/DAL/services/table-containers/table-containers.types';

@Service()
export class TableContainersService extends BaseService {
    constructor(
        @Inject()
        private readonly httpClient: HttpClientObservable,
    ) {
        super();
        this.serviceUrl = '/table-containers';
    }

    getAllTableContainersPreview() {
        this.httpClient.getData<STTableContainerPreview[]>(this.getServiceEndpoint('/')).subscribe();
    }

    getTableContainerById(id: STAbstract['id']) {
        this.httpClient.getData<STTableContainer>(this.getServiceEndpoint('/')).subscribe();
    }

    createTable() {
        this.httpClient.postData(this.getServiceEndpoint('/create')).subscribe();
    }

    copyTable(payload: CopyTablePayload) {
        this.httpClient
            .putData(this.getServiceEndpoint('/copy-table'), {
                body: payload,
            })
            .subscribe();
    }
}
