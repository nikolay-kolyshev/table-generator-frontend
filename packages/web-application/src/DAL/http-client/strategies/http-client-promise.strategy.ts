import {THttpClientMethodMutableConfig, THttpClientMethodUnMutableConfig, THttpClientRequest} from '../http-client-base.types';
import {httpClientMethod} from '../decorators/http-client-method.decorator';
import {HttpClientBase} from "../http-client-base.abstract";
import {EHttpClientStrategy} from "../http-client-base.types";
import {Service} from "typedi";

@Service()
export class HttpClientPromise extends HttpClientBase<EHttpClientStrategy.Promise> {

    @httpClientMethod(EHttpClientStrategy.Promise)
    async getData<R>(url: string, config?: THttpClientRequest & THttpClientMethodUnMutableConfig): Promise<R> {
        return await this.apiInstance.get(url, {
            params: config?.queryParams ?? {},
            headers: config?.headers ?? {},
        })
    }

    @httpClientMethod(EHttpClientStrategy.Promise)
    async postData<R>(url: string, config?: THttpClientRequest & THttpClientMethodMutableConfig): Promise<R> {
        return await this.apiInstance.post(url, config?.body ?? {}, {
            params: config?.queryParams,
            headers: config?.headers ?? {},
        })
    }

    @httpClientMethod(EHttpClientStrategy.Promise)
    async putData<R>(url: string, config?: THttpClientRequest & THttpClientMethodMutableConfig): Promise<R> {
        return await this.apiInstance.put(url, config?.body ?? {}, {
            params: config?.queryParams,
            headers: config?.headers ?? {},
        })
    }
    @httpClientMethod(EHttpClientStrategy.Promise)
    async deleteData<R>(url: string, config?: THttpClientRequest & THttpClientMethodUnMutableConfig): Promise<R> {
        return await this.apiInstance.delete(url, {
            params: config?.queryParams ?? {},
            headers: config?.headers ?? {},
        })
    }

}
