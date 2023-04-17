import { Inject, Service } from 'typedi';
import { HttpClientObservable } from '@/DAL/http-client/strategies/http-client-observable.strategy';
import { BaseService } from '../base.service';
import { STAbstract } from '@/DAL/services/services.types';
import { STCity } from '@/DAL/services/cities/cities.service-types';
import { CreateCityPayload } from '@/DAL/services/cities/cities.types';

@Service()
export class CitiesService extends BaseService {
    constructor(
        @Inject()
        private readonly httpClient: HttpClientObservable,
    ) {
        super();
        this.serviceUrl = '/cities';
    }

    getAllCities() {
        this.httpClient.getData<STCity[]>(this.getServiceEndpoint('/')).subscribe();
    }

    getCityById(id: STAbstract['id']) {
        this.httpClient.getData<STCity>(this.getServiceEndpoint('/', id)).subscribe();
    }

    createCity(payload: CreateCityPayload) {
        this.httpClient
            .postData(this.getServiceEndpoint('/create'), {
                body: payload,
            })
            .subscribe();
    }

    deleteCity(id: STAbstract['id']) {
        this.httpClient.putData(this.getServiceEndpoint('/delete', id)).subscribe();
    }
}
