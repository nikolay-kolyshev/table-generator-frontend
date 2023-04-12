import { Inject, Service } from 'typedi';
import { HttpClientObservable } from '../../http-client/strategies/http-client-observable.strategy';
import { BaseService } from '../base.service';

@Service()
export class TablesService extends BaseService {
    constructor(
        @Inject()
        private readonly httpClient: HttpClientObservable,
    ) {
        super();
        this.serviceUrl = '/tables';
    }

    async getData() {
        this.httpClient.getData(this.getServiceEndpoint('/getAll')).subscribe();
    }
}
