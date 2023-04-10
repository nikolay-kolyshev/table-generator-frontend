import {THttpClientMethodMutableConfig, THttpClientMethodUnMutableConfig, THttpClientRequest} from '../http-client-base.types';
import {httpClientMethod} from '../decorators/http-client-method.decorator';
import {HttpClientBase} from "../http-client-base.abstract";
import {EHttpClientStrategy} from "../http-client-base.types";
import {Observable} from "rxjs";
import {Service} from "typedi";

@Service()
export class HttpClientObservable extends HttpClientBase<EHttpClientStrategy.Observable> {

    @httpClientMethod(EHttpClientStrategy.Observable)
    getData<R>(url: string, config?: THttpClientRequest & THttpClientMethodUnMutableConfig): Observable<R> {
        return this.apiInstance.get( url, {
            params: config?.queryParams ?? {},
            headers: config?.headers ?? {},
        }) as unknown as Observable<R>;
    }

    @httpClientMethod(EHttpClientStrategy.Observable)
    postData<R>(url: string, config?: THttpClientRequest & THttpClientMethodMutableConfig): Observable<R> {
        return this.apiInstance.post(url, config?.body ?? {}, {
            params: config?.queryParams,
            headers: config?.headers ?? {},
        }) as unknown as Observable<R>;
    }

    @httpClientMethod(EHttpClientStrategy.Observable)
    putData<R>(url: string, config?: THttpClientRequest & THttpClientMethodMutableConfig): Observable<R> {
        return this.apiInstance.put(url, config?.body ?? {}, {
            params: config?.queryParams,
            headers: config?.headers ?? {},
        }) as unknown as Observable<R>;
    }
    @httpClientMethod(EHttpClientStrategy.Observable)
    deleteData<R>(url: string, config?: THttpClientRequest & THttpClientMethodUnMutableConfig): Observable<R> {
        return this.apiInstance.delete(url, {
            params: config?.queryParams ?? {},
            headers: config?.headers ?? {},
        }) as unknown as Observable<R>;
    }

}
