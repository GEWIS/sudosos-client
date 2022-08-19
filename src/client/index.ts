/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class AuthenticateAPI {
  /**
   *
   */
  static pinAuthentication(
    params: {
      /** The PIN login. */
      req: AuthenticationPinRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/pin';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static ldapAuthentication(
    params: {
      /** The LDAP login. */
      req: AuthenticationLDAPRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/LDAP';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static localAuthentication(
    params: {
      /** The local login. */
      req: AuthenticationLocalRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/local';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static resetLocalWithToken(
    params: {
      /** The reset token. */
      req: AuthenticationResetTokenRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/local';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static resetLocal(
    params: {
      /** The reset info. */
      req: ResetLocalRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/local/reset';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static eanAuthentication(
    params: {
      /** The EAN login. */
      req: AuthenticationEanRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/ean';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static mockAuthentication(
    params: {
      /** The mock login. */
      req: AuthenticationMockRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/mock';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static refreshToken(options: IRequestOptions = {}): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/refreshToken';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static gewisWebAuthentication(
    params: {
      /** The mock login. */
      req: GewiswebAuthenticationRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/gewisweb';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static gewisLdapAuthentication(
    params: {
      /** The LDAP login. */
      req: AuthenticationLDAPRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/GEWIS/LDAP';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static gewisPinAuthentication(
    params: {
      /** The PIN login. */
      req: GEWISAuthenticationPinRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/authentication/GEWIS/pin';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['req'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class BalanceAPI {
  /**
   *
   */
  static getBalance(options: IRequestOptions = {}): Promise<BalanceResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/balances';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getBalanceId(
    params: {
      /** The id of the user for which the saldo is requested */
      id?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BalanceResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/balances/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class BannersAPI {
  /**
   *
   */
  static create(
    params: {
      /** The banner which should be created */
      banner: BannerRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BannerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/banners';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['banner'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getAll(
    params: {
      /** How many banners the endpoint should return */
      take?: number;
      /** How many banners should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedBannerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/banners';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateImage(
    params: {
      /** The id of the banner */
      id: number;
      /**  */
      file?: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/banners/{id}/image';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the banner which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BannerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/banners/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the banner which should be updated */
      id: number;
      /** The updated banner */
      banner: BannerRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BannerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/banners/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['banner'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /** The id of the banner which should be deleted */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BannerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/banners/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getActive(
    params: {
      /** How many banners the endpoint should return */
      take?: number;
      /** How many banners should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedBannerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/banners/active';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class BorrelkaartgroupsAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** How many borrelkaart groups the endpoint should return */
      take?: number;
      /** How many borrelkaart groups should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedBorrelkaartGroupResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/borrelkaartgroups';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The borrelkaart group which should be created */
      borrelkaartgroup: BorrelkaartGroupRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BorrelkaartGroupResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/borrelkaartgroups';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['borrelkaartgroup'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the borrelkaart group which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BorrelkaartGroupResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/borrelkaartgroups/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the borrelkaart group which should be updated */
      id: number;
      /** The updated borrelkaart group */
      borrelkaartgroup: BorrelkaartGroupRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BorrelkaartGroupResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/borrelkaartgroups/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['borrelkaartgroup'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /** The id of the borrelkaart group which should be deleted */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BorrelkaartGroupResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/borrelkaartgroups/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ContainersAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** How many containers the endpoint should return */
      take?: number;
      /** How many containers should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedContainerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /**    The container which should be created */
      container: CreateContainerRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ContainerWithProductsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['container'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the container which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ContainerWithProductsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the container which should be updated */
      id: number;
      /**    The container which should be updated */
      container: UpdateContainerRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ContainerWithProductsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['container'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getProducts(
    params: {
      /** The id of the container which should be returned */
      id: number;
      /** How many products the endpoint should return */
      take?: number;
      /** How many products should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers/{id}/products';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getPublic(
    params: {
      /** How many containers the endpoint should return */
      take?: number;
      /** How many containers should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedContainerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers/public';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdated(
    params: {
      /** How many containers the endpoint should return */
      take?: number;
      /** How many containers should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedContainerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers/updated';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdate(
    params: {
      /** The id of the container which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ContainerWithProductsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/containers/{id}/update';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class InvoicesAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** Filter on Id of the debtor */
      toId?: number;
      /** Filter on invoice ID */
      invoiceId?: number;
      /** Filter based on Invoice State */
      state?: any | null;
      /** Boolean if invoice entries should be returned */
      returnEntries?: boolean;
      /** Start date for selected invoices (inclusive) */
      fromDate?: string;
      /** End date for selected invoices (exclusive) */
      tillDate?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedInvoiceResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/invoices';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        toId: params['toId'],
        invoiceId: params['invoiceId'],
        state: params['state'],
        returnEntries: params['returnEntries'],
        fromDate: params['fromDate'],
        tillDate: params['tillDate']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The invoice which should be created */
      invoice: CreateInvoiceRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvoiceResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/invoices';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['invoice'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the invoice which should be updated */
      id: number;
      /** The invoice update to process */
      invoice: UpdateInvoiceRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BaseInvoiceResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/invoices/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['invoice'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /** The id of the invoice which should be deleted */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BaseInvoiceResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/invoices/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class PayoutRequestsAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** ID of user(s) who requested a payout */
      requestedById?: string;
      /** ID of user(s) who approved a payout */
      approvedById?: string;
      /** Start date for selected transactions (inclusive) */
      fromDate?: string;
      /** End date for selected transactions (exclusive) */
      tillDate?: string;
      /** Status of the payout requests (OR relation) */
      status?: any | null[];
      /** How many payout requests the endpoint should return */
      take?: number;
      /** How many payout requests should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedBasePayoutRequestResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/payoutrequests';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        requestedById: params['requestedById'],
        approvedById: params['approvedById'],
        fromDate: params['fromDate'],
        tillDate: params['tillDate'],
        status: params['status'],
        take: params['take'],
        skip: params['skip']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** New payout request */
      payoutRequest: PayoutRequestRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PayoutRequestResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/payoutrequests';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['payoutRequest'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The ID of the payout request object that should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PayoutRequestResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/payoutrequests/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static setStatus(
    params: {
      /** The ID of the payout request object that should be returned */
      id: number;
      /** New state of payout request */
      state: PayoutRequestStatusRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PayoutRequestResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/payoutrequests/{id}/status';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['state'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class PointofsaleAPI {
  /**
   *
   */
  static create(
    params: {
      /** The point of sale which should be created */
      pointofsale: CreatePointOfSaleRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdatedPointOfSaleResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['pointofsale'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getAll(
    params: {
      /** How many points of sale the endpoint should return */
      take?: number;
      /** How many points of sale should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedPointOfSaleResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the Point of Sale which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PointOfSaleWithContainersResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the Point of Sale which should be updated */
      id: number;
      /**    The Point of Sale which should be updated */
      pointofsale: UpdatePointOfSaleRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdatedPointOfSaleResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['pointofsale'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getContainers(
    params: {
      /** How many containers the endpoint should return */
      take?: number;
      /** How many containers should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedContainerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale/{id}/containers';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getProducts(
    params: {
      /** How many products the endpoint should return */
      take?: number;
      /** How many products should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale/{id}/products';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdate(
    params: {
      /** The id of the Point of Sale which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdatedPointOfSaleWithContainersResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale/{id}/update';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdated(
    params: {
      /** How many points of sale the endpoint should return */
      take?: number;
      /** How many points of sale should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedUpdatedPointOfSaleResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale/updated';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getTransactions(
    params: {
      /**          The id of the Point of Sale of which to get the transactions. */
      id: number;
      /** How many transactions the endpoint should return */
      take?: number;
      /** How many transactions should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedBaseTransactionResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/pointsofsale/{id}/transactions';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class ProductCategoriesAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** How many product categories the endpoint should return */
      take?: number;
      /** How many product categories should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedProductCategoryResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/productcategories';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The productCategory which should be created */
      productCategory: ProductCategoryRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductCategoryResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/productcategories';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['productCategory'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the productcategory which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductCategoryResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/productcategories/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the productcategory which should be returned */
      id: number;
      /** The productcategory which should be created */
      productCategory: ProductCategoryRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductCategoryResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/productcategories/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['productCategory'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ProductsAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** How many products the endpoint should return */
      take?: number;
      /** How many products should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The product which should be created */
      product: CreateProductRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdatedProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['product'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the product which should be updated */
      id: number;
      /** The product which should be updated */
      product: UpdateProductRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['product'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the product which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdated(
    params: {
      /** How many products the endpoint should return */
      take?: number;
      /** How many products should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/updated';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdate(
    params: {
      /** The id of the product which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}/update';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateImage(
    params: {
      /** The id of the product which should be returned */
      id: number;
      /**  */
      file?: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}/image';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['file']) {
        if (Object.prototype.toString.call(params['file']) === '[object Array]') {
          for (const item of params['file']) {
            data.append('file', item as any);
          }
        } else {
          data.append('file', params['file'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class RbacAPI {
  /**
   *
   */
  static getAll(options: IRequestOptions = {}): Promise<RoleResponse[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/rbac/roles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class RootAPI {
  /**
   *
   */
  static ping(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/ping';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class FilesAPI {
  /**
   *
   */
  static create(
    params: {
      /**  */
      file?: any;
      /**  */
      name?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SimpleFileResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['file']) {
        if (Object.prototype.toString.call(params['file']) === '[object Array]') {
          for (const item of params['file']) {
            data.append('file', item as any);
          }
        } else {
          data.append('file', params['file'] as any);
        }
      }

      if (params['name']) {
        if (Object.prototype.toString.call(params['name']) === '[object Array]') {
          for (const item of params['name']) {
            data.append('name', item as any);
          }
        } else {
          data.append('name', params['name'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the file which should be downloaded */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /** The id of the file which should be deleted */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/files/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class StripeAPI {
  /**
   *
   */
  static deposit(
    params: {
      /** The deposit that should be created */
      stripe: StripeRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<StripePaymentIntentResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/stripe/deposit';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['stripe'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static webhook(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/stripe/webhook';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class TestAPI {
  /**
   *
   */
  static helloworld(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/test/helloworld';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class TransactionsAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** From-user for selected transactions */
      fromId?: number;
      /** User that created selected transaction */
      createdById?: number;
      /** To-user for selected transactions
transactions. Requires ContainerId */
      toId?: number;
      /** Point of sale ID for selected transactions */
      pointOfSaleId?: number;
      /** Product ID for selected transactions */
      productId?: number;
      /** Product Revision for selected
transactions. Requires ProductID */
      productRevision?: number;
      /** Start date for selected transactions (inclusive) */
      fromDate?: string;
      /** End date for selected transactions (exclusive) */
      tillDate?: string;
      /** How many transactions the endpoint should return */
      take?: number;
      /** How many transactions should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedBaseTransactionResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transactions';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fromId: params['fromId'],
        createdById: params['createdById'],
        toId: params['toId'],
        pointOfSaleId: params['pointOfSaleId'],
        productId: params['productId'],
        productRevision: params['productRevision'],
        fromDate: params['fromDate'],
        tillDate: params['tillDate'],
        take: params['take'],
        skip: params['skip']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The transaction which should be created */
      transaction: TransactionRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transactions';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['transaction'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the transaction which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transactions/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The id of the transaction which should be updated */
      id: number;
      /** The updated transaction */
      transaction: TransactionRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transactions/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['transaction'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /** The id of the transaction which should be deleted */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransactionResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transactions/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class TransfersAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** How many transfers the endpoint should return */
      take?: number;
      /** How many transfers should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransferResponse[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transfers';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The transfer which should be created */
      transfer: TransferRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransferResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transfers';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['transfer'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the transfer which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TransferResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/transfers/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class UsersAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** How many users the endpoint should return */
      take?: number;
      /** How many users should be skipped (for pagination) */
      skip?: number;
      /** Filter based on first name */
      firstName?: string;
      /** Filter based on last name */
      lastName?: string;
      /** Filter based if the user is active */
      active?: boolean;
      /** Filter based if the user is 18+ */
      ofAge?: boolean;
      /** Filter based on user ID */
      id?: number;
      /** Filter based on user type. */
      type?: any | null;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedUserResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        take: params['take'],
        skip: params['skip'],
        firstName: params['firstName'],
        lastName: params['lastName'],
        active: params['active'],
        ofAge: params['ofAge'],
        id: params['id'],
        type: params['type']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The user which should be created */
      user: CreateUserRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['user'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getType(
    params: {
      /** The userType of the requested users */
      userType: string;
      /** How many users the endpoint should return */
      take?: number;
      /** How many users should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedUserResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/usertype/{userType}';
      url = url.replace('{userType}', params['userType'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updatePin(
    params: {
      /** The id of the user */
      id: number;
      /**    The PIN code to update to */
      update: UpdatePinRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/authenticator/pin';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['update'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateLocal(
    params: {
      /** The id of the user */
      id: number;
      /**    The password update */
      update: UpdateLocalRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/authenticator/local';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['update'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getMembers(
    params: {
      /** The id of the user */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedUserResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/members';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The id of the user */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The user which should be updated */
      user: UpdateUserRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdateUserRequest> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}';

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['user'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static delete(
    params: {
      /** The id of the user */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static acceptTos(
    params: {
      /**  */
      params: AcceptTosRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/acceptTos';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['params'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getProducts(
    params: {
      /** The id of the user */
      id: number;
      /** How many products the endpoint should return */
      take?: number;
      /** How many products should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/products';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdatedProducts(
    params: {
      /** The id of the user */
      id: number;
      /** How many products the endpoint should return */
      take?: number;
      /** How many products should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedProductResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/products/updated';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getContainers(
    params: {
      /** The id of the user */
      id: number;
      /** How many containers the endpoint should return */
      take?: number;
      /** How many containers should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedContainerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/containers';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdatedContainers(
    params: {
      /** The id of the user */
      id: number;
      /** How many containers the endpoint should return */
      take?: number;
      /** How many containers should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedContainerResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/containers/updated';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getPointsOfSale(
    params: {
      /** The id of the user */
      id: number;
      /** How many points of sale the endpoint should return */
      take?: number;
      /** How many points of sale should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedPointOfSaleResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/pointsofsale';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getUpdatedPointsOfSale(
    params: {
      /** The id of the user */
      id: number;
      /** How many points of sale the endpoint should return */
      take?: number;
      /** How many points of sale should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedUpdatedPointOfSaleResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/pointsofsale/updated';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getTransactions(
    params: {
      /** The id of the user that should be involved
in all returned transactions */
      id: number;
      /** From-user for selected transactions */
      fromId?: number;
      /** User that created selected transaction */
      createdById?: number;
      /** To-user for selected transactions
transactions. Requires ContainerId */
      toId?: number;
      /** Product ID for selected transactions */
      productId?: number;
      /** Product Revision for selected
transactions. Requires ProductID */
      productRevision?: number;
      /** Start date for selected transactions (inclusive) */
      fromDate?: string;
      /** End date for selected transactions (exclusive) */
      tillDate?: string;
      /** How many transactions the endpoint should return */
      take?: number;
      /** How many transactions should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedBaseTransactionResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/transactions';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fromId: params['fromId'],
        createdById: params['createdById'],
        toId: params['toId'],
        productId: params['productId'],
        productRevision: params['productRevision'],
        fromDate: params['fromDate'],
        tillDate: params['tillDate'],
        take: params['take'],
        skip: params['skip']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getTransfers(
    params: {
      /** ID of selected transfers */
      id?: number;
      /** How many transfers the endpoint should return */
      take?: number;
      /** How many transfers should be skipped (for pagination) */
      skip?: number;
      /** From-user for selected transfers */
      fromId?: number;
      /** To-user for selected transfers */
      toId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedTransferResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/transfers';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        id: params['id'],
        take: params['take'],
        skip: params['skip'],
        fromId: params['fromId'],
        toId: params['toId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static authenticateAs(
    params: {
      /** The id of the user that should be authenticated as */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthenticationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/authenticate';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getAuthentications(
    params: {
      /** The id of the user to get authentications of */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserResponse[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/authenticate';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getRoles(
    params: {
      /** The id of the user to get the roles from */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleResponse[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/roles';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getFinancialMutations(
    params: {
      /** The id of the user to get the mutations from */
      id: number;
      /** How many transactions the endpoint should return */
      take?: number;
      /** How many transactions should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedFinancialMutationResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/financialmutations';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getPendingDeposits(
    params: {
      /** The id of the user to get the deposits from */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleResponse[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}/deposits';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class VatGroupsAPI {
  /**
   *
   */
  static getAll(
    params: {
      /** ID of the VAT group */
      vatGroupId?: number;
      /** Name of the VAT group */
      name?: string;
      /** VAT percentage */
      percentage?: number;
      /** Whether the VAT groups should be hidden if zero */
      deleted?: boolean;
      /** How many transactions the endpoint should return */
      take?: number;
      /** How many transactions should be skipped (for pagination) */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedVatGroupResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/vatgroups';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        vatGroupId: params['vatGroupId'],
        name: params['name'],
        percentage: params['percentage'],
        deleted: params['deleted'],
        take: params['take'],
        skip: params['skip']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static create(
    params: {
      /** The VAT group which should be created */
      vatGroup: VatGroupRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<VatGroup> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/vatgroups';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['vatGroup'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static get(
    params: {
      /** The ID of the VAT group which should be returned */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<VatGroup> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/vatgroups/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static update(
    params: {
      /** The ID of the VAT group which should be updated */
      id: number;
      /** The VAT group information */
      vatGroup: UpdateVatGroupRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<VatGroup> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/vatgroups/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['vatGroup'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getDeclaration(
    params: {
      /** Calendar year for VAT declarations */
      year: number;
      /** Period for VAT declarations */
      period: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedVatGroupResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/vatgroups/declaration';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { year: params['year'], period: params['period'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export interface Banner {
  /** Name/label of the banner. */
  name?: string;

  /** How long the banner should be shown (in seconds). */
  duration?: number;

  /** Whether the banner is active. Overrides start and end date. */
  active?: boolean;

  /** The starting date from which the banner should be shown. */
  startDate?: string;

  /** The end date from which the banner should no longer be shown. */
  endDate?: string;
}

export interface BaseEntityWithoutId {
  /** The creation date of the object. */
  createdAt?: string;

  /** The last update date of the object. */
  updatedAt?: string;

  /** The current version of the object. */
  version?: number;
}

export interface BaseEntity {
  /** The auto-generated object id. */
  id?: number;

  /** The creation date of the object. */
  createdAt?: string;

  /** The last update date of the object. */
  updatedAt?: string;

  /** The current version of the object. */
  version?: number;
}

export interface VatGroup {
  /** Name of the VAT group */
  name?: string;

  /** VAT percentage */
  percentage?: number;

  /** Whether this group is soft-deleted */
  deleted?: boolean;

  /** Whether this group is hidden from transactions */
  hidden?: boolean;
}

export interface AuthenticationMethod {
  /** The user this authenticator is for */
  user: User;
}

export interface EanAuthenticator {
  /** The EAN code */
  eanCode: string;
}

export interface HashBasedAuthenticationMethod {
  /** The hash of the authentication */
  hash: string;
}

export interface LDAPAuthenticator {
  /** The user this authenticator is for */
  User: User;

  /** The associated AD account name */
  accountName: string;
}

export interface LocalAuthenticator {
  /** The user this authenticator is for */
  User: User;

  /** The Password code of this user (hashed) */
  hash: string;
}

export interface MemberAuthenticator {
  /** The user this authenticator is for */
  user: User;

  /** The user entity this user wants to
authenticate as. */
  authenticateAs: User;
}

export interface NfcAuthenticator {
  /** The user this authenticator is for */
  user: User;

  /** The hash of the UID of the NFC chip */
  uid: string;
}

export interface PinAuthenticator {
  /** The user this authenticator is for */
  User: User;

  /** The PIN code of this user (hashed) */
  hash: string;
}

export interface ResetToken {
  /** The end date from which the token is expired */
  expires: string;
}

export interface BaseContainer {
  /** The unique name of the container. */
  name: string;
}

export interface ContainerRevision {
  /** The container the revision belongs to. */
  container: Container;

  /** The revision number of this revision. */
  revision: number;

  /**  */
  products: ProductRevision[];
}

export interface Container {
  /** The current revision of the container. Can be null if no
revision exists. */
  currentRevision?: number;

  /** The owner of the container. */
  owner: User;

  /** Whether the container can be added to pointOfSales by everyone. */
  public?: boolean;
}

export interface UpdatedContainer {
  /** The container the revision belongs to. */
  container: Container;

  /**  */
  products: Product[];
}

export interface BannerImage {}

export interface BaseFile {
  /** The filename when the file is downloaded */
  downloadName: string;

  /** The location of the file, including filename in storage */
  location: string;

  /** The user that created this file */
  createdBy: User;
}

export interface ProductImage {}

export interface InvoiceEntry {
  /** The invoice to which this entry belongs */
  invoice: Invoice;

  /** The price of the item. */
  priceInclVat: Dinero;

  /** The amount of items in the invoice entry. */
  amount: number;

  /** The description of the invoice entry item. */
  description: string;

  /** The percentage of vat applied to this item. */
  vatPercentage: number;
}

export interface InvoiceStatus {
  /** The invoice to which this state belongs. */
  invoice: Invoice;

  /** The user that changed the invoice status. */
  changedBy: User;

  /** The state of the Invoice */
  state: string;
}

export interface Invoice {
  /** The account for whom the invoice is */
  to: User;

  /** The transfer entity representing the invoice. */
  transfer: Transfer;

  /**  */
  invoiceEntries: InvoiceEntry[];

  /**  */
  invoiceStatus: InvoiceStatus[];

  /** Name of the addressed */
  addressee: string;

  /** The description of the invoice */
  description: string;
}

export interface BasePointOfSale {
  /** The unique name of the pointOfSale. */
  name: string;
}

export interface PointOfSaleRevision {
  /** The pointOfSale the revision belongs to. */
  pointOfSale: PointOfSale;

  /** The revision number of this revision. */
  revision: number;

  /**  */
  containers: ContainerRevision[];
}

export interface PointOfSale {
  /** The current revision of the pointOfSale.
Can be null if no revision exists. */
  currentRevision?: number;

  /** The owner of the pointOfSale. */
  owner: User;
}

export interface ProductOrdering {
  /** The pointOfSale the ordering belongs to. */
  pos: PointOfSale;

  /** The product that should be in the ordering. */
  product: Product;

  /** The order number of the product in the pointOfSale. */
  order: number;
}

export interface UpdatedPointOfSale {
  /** The pointOfSale the revision belongs to. */
  pointOfSale: PointOfSale;

  /**  */
  containers: Container[];
}

export interface BaseProduct {
  /** The unique name of the product. */
  name: string;

  /** The price of each product. */
  price: Dinero;
}

export interface ProductCategory {
  /** The unique name of the productCategory. */
  name: string;
}

export interface ProductRevision {
  /** The product the revision belongs to. */
  product: Product;

  /** The revision number of this revision. */
  revision: number;
}

export interface Product {
  /** The current revision of the product.
Can be null if no revision exists. */
  currentRevision?: number;

  /** The owner of the product. */
  owner: User;

  /** The image of the product. */
  image?: ProductImage;
}

export interface UpdatedProduct {
  /** The product the revision belongs to. */
  product: Product;
}

export interface AssignedRole {
  /** The user being assigned a role */
  user: User;

  /** The name of the role */
  role: string;
}

export interface Balance {
  /** The account which has this balance */
  user: User;

  /** The amount of balance a user has. */
  amount: Dinero;

  /** The last transaction of this
user, used to calculate this balance */
  lastTransaction?: Transaction;

  /** The last transfer of this user,
used to calculate this balance */
  lastTransfer?: Transfer;
}

export interface Transaction {
  /** The account from which the transaction is subtracted. */
  from: User;

  /** The user that created the transaction. */
  createdBy: User;

  /**  */
  subTransactions: SubTransaction[];

  /** The pointOfSale from which the
products in the transaction are bought. */
  pointOfSale: PointOfSaleRevision;
}

export interface SubTransactionRow {
  /** The product that has been bought. */
  product: Product;

  /** The amount that has been bought. */
  amount: number;

  /** The subTransaction this row belongs to. */
  subTransaction?: SubTransaction;
}

export interface SubTransaction {
  /** The account that the transaction is added to. */
  to: User;

  /** The container from which all products in the
SubTransactionRows are bought. */
  container: Container;

  /** The parent transaction. */
  transaction: Transaction;

  /**  */
  subTransactionsRows: SubTransactionRow[];
}

export interface Transfer {
  /** The account from which the transfer is subtracted. Can be
null if money was deposited. */
  from?: User;

  /** The account to which the transaction is added. Can be null if
money was paid out. */
  to?: User;

  /** The amount of money transferred. */
  amount: Dinero;

  /** The type of transfer. */
  type: number;

  /** If the transfer is of type 'custom', this contains a
description of the transfer. */
  description?: string;
}

export interface BorrelkaartGroup {
  /** Name of the group. */
  name: string;

  /** Date after which the included cards are active. */
  activeStartDate: string;

  /** Date after which cards are no longer active. */
  activeEndDate?: string;

  /**  */
  borrelkaarten: User[];
}

export interface InvoiceUser {
  /** The user that is an invoice account */
  user: User;

  /** Whether the user gets automatic invoices */
  automatic?: boolean;
}

export interface LocalUser {
  /** The user. */
  user: User;

  /** The hashed password of the user. */
  passwordHash: string;
}

export interface UserBorrelkaartGroup {
  /** The user that belongs to the group. */
  user: User;

  /** The borrelkaartGroup the user
belongs to. */
  borrelkaartGroup: BorrelkaartGroup;
}

export interface User {
  /** First name of the user. */
  firstName: string;

  /** Last name of the user. */
  lastName?: string;

  /** Whether the user has accepted the TOS. Defaults to false. */
  active?: boolean;

  /** Whether the user is 18+ or not. */
  ofAge?: boolean;

  /** The email of the user. */
  email?: string;

  /** Whether the user was deleted. Defaults to false. */
  deleted?: boolean;

  /** The type of user. */
  type: string;
}

export interface GewisUserResponse {
  /** The m-Number of the user */
  gewisId?: number;
}

export interface GewisUser {
  /** The user. */
  user: User;

  /** The id of the member. */
  gewisId: number;
}

export interface AuthenticationResponse {
  /** The user that has authenticated. */
  user?: UserResponse;

  /**  */
  roles?: string[];

  /**  */
  organs?: UserResponse[];

  /** The JWT token that can be used as Bearer token for authentication. */
  token?: string;

  /** Whether the related user has accepted the Terms of Service
 or is not required to. */
  acceptedToS?: string;
}

export interface BalanceResponse {
  /** ID of the user this balance belongs to */
  id: number;

  /** The amount of balance this user has */
  amount: DineroObjectResponse;

  /** The ID of the last transaction that was
present when the balance was cached */
  lastTransactionId?: number;

  /** The ID of the last transfer that was
present when the balance was cached */
  lastTransferId?: number;
}

export interface BannerResponse {
  /** Name/label of the banner */
  name?: string;

  /** Location of the image */
  image?: string;

  /** How long the banner should be shown (in seconds) */
  duration?: number;

  /** Whether the banner is active. Overrides start and end date */
  active?: boolean;

  /** The starting date from which the banner should be shown */
  startDate?: string;

  /** The end date from which the banner should no longer be shown */
  endDate?: string;
}

export interface PaginatedBannerResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: BannerResponse[];
}

export interface BaseResponse {
  /** The unique id of the entity. */
  id: number;

  /** The creation Date of the entity. */
  createdAt?: string;

  /** The last update Date of the entity. */
  updatedAt?: string;

  /** The version of the entity. */
  version?: number;
}

export interface BorrelkaartGroupResponse {
  /** Name of the borrelkaart group */
  name: string;

  /** Start date of the borrelkaart group */
  activeStartDate?: string;

  /** End date of the borrelkaart group */
  activeEndDate: string;

  /**  */
  users: UserResponse[];
}

export interface PaginatedBorrelkaartGroupResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: BorrelkaartGroupResponse[];
}

export interface BaseContainerResponse {
  /** The name of the container. */
  name: string;

  /** Public status of the container. */
  public: boolean;

  /** The container revision. */
  revision?: number;
}

export interface ContainerResponse {
  /** The owner of the container. */
  owner: BaseUserResponse;
}

export interface PaginatedContainerResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: ContainerResponse[];
}

export interface PaginatedContainerWithProductResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: ContainerWithProductsResponse[];
}

export interface ContainerWithProductsResponse {
  /**  */
  products: ProductResponse[];
}

export interface DineroObjectResponse {
  /** amount */
  amount: number;

  /** currency */
  currency: string;

  /** precision */
  precision: number;
}

export interface Dinero {
  /** The amount of money as integer in the given precision. */
  amount: number;

  /** The precision of the amount, in decimal places. */
  precision: number;

  /** The ISO 4217 currency code. */
  currency: string;
}

export interface FinancialMutationResponse {}

export interface PaginatedFinancialMutationResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: PaginatedFinancialMutationResponse[];
}

export interface InvoiceStatusResponse {
  /** The user that changed the invoice status. */
  changedBy: BaseUserResponse;

  /** The state of the invoice,
can be either CREATED, SENT, PAID or DELETED. */
  state: string;
}

export interface InvoiceEntryResponse {
  /** The description of the entry */
  description: string;

  /** Amount of products sold. */
  amount: number;

  /** The price per product. */
  priceInclVat: DineroObject;

  /** The percentage of VAT applied to this entry */
  vatPercentage: number;
}

export interface BaseInvoiceResponse {
  /** The person who was invoiced. */
  to: BaseUserResponse;

  /** Name of the addressed. */
  addressee: string;

  /** Description of the invoice. */
  description: string;

  /** The current state of the invoice. */
  currentState: InvoiceStatusResponse;

  /** Transfer linked to the invoice. */
  transfer?: TransferResponse;
}

export interface InvoiceResponse {
  /**  */
  invoiceEntries?: InvoiceEntryResponse[];
}

export interface InvoiceResponseTypes {}

export interface PaginatedInvoiceResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: InvoiceResponseTypes[];
}

export interface MessageResponse {
  /** The message response text. */
  message: string;
}

export interface BoilerPayoutRequestResponse {
  /** The user that requested a payout */
  requestedBy: BaseUserResponse;

  /** The user that potentially approved the payout request */
  approvedBy?: BaseUserResponse;

  /** The amount requested to be paid out */
  amount: DineroObjectResponse;
}

export interface BasePayoutRequestResponse {
  /** The current status of the payout request */
  status?: string;
}

export interface PayoutRequestStatusResponse {
  /** The state of this status change */
  state?: string;
}

export interface PayoutRequestResponse {
  /**  */
  status?: PayoutRequestStatusResponse[];

  /** Bank account number */
  bankAccountNumber?: string;

  /** Name of the account owner */
  bankAccountName?: string;
}

export interface PaginatedBasePayoutRequestResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: BasePayoutRequestResponse[];
}

export interface BasePointOfSaleResponse {
  /** The name of the point-of-sale. */
  name: string;
}

export interface PointOfSaleResponse {
  /** The owner of the point-of-sale. */
  owner?: BaseUserResponse;

  /** Revision of the POS */
  revision: number;

  /** Whether this POS requires users to
authenticate themselves before making a transaction */
  useAuthentication: boolean;
}

export interface PaginatedPointOfSaleResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: PointOfSaleResponse[];
}

export interface UpdatedPointOfSaleResponse {
  /** The owner of the point-of-sale. */
  owner: BaseUserResponse;

  /** Whether this POS requires users to
authenticate themselves before making a transaction */
  useAuthentication: boolean;
}

export interface UpdatedPOSResponses {}

export interface PaginatedUpdatedPointOfSaleResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: UpdatedPOSResponses[];
}

export interface PointOfSaleWithContainersResponse {
  /**  */
  containers: ContainerWithProductsResponse[];
}

export interface UpdatedPointOfSaleWithContainersResponse {
  /**  */
  containers: ContainerWithProductsResponse[];
}

export interface ProductCategoryResponse {
  /** The name of the productCategory. */
  name: string;
}

export interface PaginatedProductCategoryResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: ProductCategoryResponse[];
}

export interface BaseProductResponse {
  /** The name of the product. */
  name: string;

  /** The price of the product. */
  priceInclVat: DineroObjectResponse;

  /** The VAT percentage */
  vat: BaseVatGroupResponse;
}

export interface UpdatedProductResponse {
  /** The revision of the product. */
  revision?: number;

  /** The owner of the product. */
  owner: BaseUserResponse;

  /** The category the product belongs to. */
  category: ProductCategoryResponse;

  /** The price of the product
          excluding VAT */
  priceExclVat: DineroObjectResponse;

  /** The URL to the picture representing this product. */
  image?: string;

  /** The percentage of alcohol in this product. */
  alcoholPercentage?: number;
}

export interface ProductResponse {
  /** The product revision ID */
  revision?: number;
}

export interface PaginatedProductResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: ProductResponse[];
}

export interface ActionResponse {
  /** The name of the action performed on the entity. */
  action?: string;

  /**  */
  relations?: RelationResponse[];
}

export interface EntityResponse {
  /** The name of the entity for which the permissions are. */
  entity?: string;

  /**  */
  actions?: ActionResponse[];
}

export interface RelationResponse {
  /** The the ownership relation towards the entity. */
  relation?: string;

  /**  */
  attributes?: string[];
}

export interface RoleResponse {
  /** The name of the role. */
  role: string;

  /**  */
  entities?: EntityResponse[];
}

export interface SimpleFileResponse {
  /** The filename of the file */
  downloadName: string;

  /** The location of the file in storage */
  location: string;

  /** The user who created this file */
  createdBy: UserResponse;
}

export interface StripePaymentIntentResponse {
  /** ID of the intent in Stripe. */
  stripeId: string;

  /** The client secret of the created Payment Intent. */
  clientSecret: string;
}

export interface StripeDepositStatusResponse {
  /**  */
  depositStatus: string;
}

export interface StripeDepositResponse {
  /** The ID of the payment intent in Stripe */
  stripeId: string;

  /**  */
  depositStatus: StripeDepositStatusResponse[];

  /** The amount deposited */
  amount: DineroObjectResponse;

  /** User that deposited money */
  to: BaseUserResponse;
}

export interface BaseTransactionResponse {
  /** The account from which the transaction
is subtracted. */
  from: UserResponse;

  /** The user that created the transaction, if not
same as 'from'.. */
  createdBy?: UserResponse;

  /** The POS at which this transaction
has been created */
  pointOfSale?: BasePointOfSaleResponse;

  /** Total sum of subtransactions */
  value?: Dinero;
}

export interface TransactionResponse {
  /** The account from which the transaction
is subtracted. */
  from: BaseUserResponse;

  /** The user that created the transaction, if not
same as 'from'. */
  createdBy?: BaseUserResponse;

  /**  */
  subTransactions: SubTransactionResponse[];

  /** The POS at which this transaction
has been created */
  pointOfSale?: BasePointOfSaleResponse;

  /** The total cost of the
transaction */
  totalPriceInclVat: DineroObjectResponse;
}

export interface SubTransactionResponse {
  /** The account that the transaction is added to. */
  to: BaseUserResponse;

  /** The container from which all
products in the SubTransactionRows are bought */
  container: BaseContainerResponse;

  /**  */
  subTransactionsRows: SubTransactionRowResponse[];

  /** The total cost of the sub
    transaction */
  totalPriceInclVat: DineroObjectResponse;
}

export interface SubTransactionRowResponse {
  /** The product that has been bought */
  product: BaseProductResponse;

  /** The amount that has been bought */
  amount: number;

  /** The cost of the
    sub transaction row */
  totalPriceInclVat: DineroObjectResponse;
}

export interface PaginatedBaseTransactionResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: BaseTransactionResponse[];
}

export interface TransferResponse {
  /** Description of the transfer */
  description: string;

  /** Amount of money being transferred */
  amount: Dinero;

  /** from which user the money is being transferred */
  from?: BaseUserResponse;

  /** to which user the money is being transferred. */
  to?: BaseUserResponse;

  /** invoice belonging to this transfer */
  invoice?: BaseInvoiceResponse;

  /** deposit belonging to this transfer */
  deposit?: StripeDepositResponse;

  /** payout request belonging to this transfer */
  payoutRequest?: BasePayoutRequestResponse;
}

export interface PaginatedTransferResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: TransferResponse[];
}

export interface BaseUserResponse {
  /** The name of the user. */
  firstName: string;

  /** The last name of the user */
  lastName?: string;
}

export interface UserResponse {
  /** Whether the user activated */
  active: boolean;

  /** Whether the user is deleted */
  deleted: boolean;

  /** The type of user */
  type: string;

  /** If local user, the e-mail of the user */
  email?: string;

  /** Whether this user has accepted the TOS */
  acceptedToS?: string;

  /** Whether data about this
user can be used (non-anonymously) for more data science! */
  extensiveDataProcessing?: boolean;

  /** Whether someone is old enough to drink beer */
  ofAge?: boolean;
}

export interface PaginatedUserResponse {
  /** Pagination metadata */
  _pagination?: PaginationResult;

  /**  */
  records?: UserResponse[];
}

export interface BaseVatGroupResponse {
  /** Percentage of VAT */
  percentage: number;

  /** Whether VAT should be hidden */
  hidden: boolean;
}

export interface PaginatedVatGroupResponse {
  /** Pagination metadata */
  _pagination: PaginationResult;

  /**  */
  records: VatGroup[];
}

export interface VatDeclarationRow {
  /** ID of the VAT group */
  id?: number;

  /** Name of the VAT group */
  name?: string;

  /** Percentage of VAT in this group */
  percentage?: number;

  /**  */
  values?: DineroObject[];
}

export interface VatDeclarationResponse {
  /** Calendar year of this result table */
  calendarYear?: number;

  /** The used VAT declaration period the rows below are based upon */
  period?: string;

  /**  */
  rows?: VatDeclarationRow[];
}

export interface AcceptTosRequest {
  /** Whether data about this
user can be used (non-anonymously) for more data science! */
  extensiveDataProcessing: boolean;
}

export interface AuthenticationEanRequest {
  /**  */
  eanCode: string;
}

export interface AuthenticationLDAPRequest {
  /** The AD account name to authenticate */
  accountName: string;

  /** The password */
  password: string;
}

export interface AuthenticationLocalRequest {
  /** The users mail to authenticate */
  accountMail: string;

  /** The password */
  password: string;
}

export interface AuthenticationMockRequest {
  /**  */
  userId: number;

  /**  */
  nonce: string;
}

export interface AuthenticationPinRequest {
  /**  */
  userId: number;

  /**  */
  pin: string;
}

export interface AuthenticationResetTokenRequest {
  /** The mail of the user */
  accountMail: string;

  /** The reset token passcode */
  token: string;

  /** The new password to set */
  password: string;
}

export interface BannerRequest {
  /** Name/label of the banner */
  name?: string;

  /** How long the banner should be shown (in seconds) */
  duration?: number;

  /** Whether the banner is active. Overrides start and end date */
  active?: boolean;

  /** The starting date from which the advertisement should be shown */
  startDate?: string;

  /** The end date from which the banner should no longer be shown */
  endDate?: string;
}

export interface BorrelkaartGroupRequest {
  /** Name of the group */
  name: string;

  /** Date from which the included cards are active */
  activeStartDate: string;

  /** Date from which cards are no longer active */
  activeEndDate?: string;

  /**  */
  users: User[];
}

export interface CreateContainerRequest {
  /** Name of the container */
  name: string;

  /**  */
  products: number[];

  /** Whether the container is public or not */
  public: boolean;

  /** Id of the user who will own the container, if undefined it will
   default to the token ID. */
  ownerId?: number;
}

export interface UpdateContainerRequest {
  /** Name of the container */
  name: string;

  /**  */
  products: number[];

  /** Whether the container is public or not */
  public: boolean;
}

export interface CreateUserRequest {
  /**  */
  firstName: string;

  /**  */
  lastName?: string;

  /**  */
  active?: boolean;

  /**  */
  type: number;

  /**  */
  email?: string;
}

export interface DineroObject {
  /** amount */
  amount: number;

  /** currency */
  currency: string;

  /** precision */
  precision: number;
}

export interface DineroObjectRequest {
  /** amount */
  amount: number;

  /** currency */
  currency: string;

  /** precision */
  precision: number;
}

export interface InvoiceEntryRequest {
  /** The description of the entry */
  description: string;

  /** Amount of item sold. */
  amount: number;

  /** The price per item. */
  priceInclVat: DineroObjectRequest;

  /** The percentage of VAT applied to this item */
  vatPercentage: number;
}

export interface UpdateInvoiceRequest {
  /** The user who updates the Invoice, defaults to the ID of the requester. */
  byId?: number;

  /** Name of the addressed. */
  addressee: string;

  /** The description of the invoice. */
  description: string;

  /** The state to set of the invoice,
   can be either CREATED, SENT, PAID or DELETED. */
  state?: string;
}

export interface CreateInvoiceRequest {
  /** The recipient of the Invoice. */
  toId: number;

  /** The creator of the Invoice, defaults to the ID of the requester. */
  byId?: number;

  /** Name of the addressed. */
  addressee: string;

  /** The description of the invoice. */
  description: string;

  /**  */
  customEntries?: InvoiceEntryRequest[];

  /**  */
  transactionIDs?: number[];

  /** For creating an Invoice for all transactions from a specific date. */
  fromDate?: string;
}

export interface PayoutRequestRequest {
  /** The requested amount to be paid out */
  amount: DineroObjectRequest;

  /** The bank account number to transfer the money to */
  bankAccountNumber: string;

  /** The name of the owner of the bank account */
  bankAccountName: string;
}

export interface PayoutRequestStatusRequest {
  /** PayoutRequestState to change to,
should be one of CREATED, APPROVED, DENIED, CANCELLED */
  state?: string;
}

export interface CreatePointOfSaleRequest {
  /** Name of the POS */
  name: string;

  /** Whether this POS requires users to
authenticate themselves before making a transaction */
  useAuthentication: boolean;

  /**  */
  containers?: number[];

  /** ID of the user who will own the POS, if undefined it will
   default to the token ID. */
  ownerId?: number;
}

export interface UpdatePointOfSaleRequest {
  /** Name of the POS */
  name: string;

  /** Whether this POS requires users to
authenticate themselves before making a transaction */
  useAuthentication: boolean;

  /**  */
  containers?: number[];

  /** ID of the POS to update. */
  id: number;
}

export interface ProductCategoryRequest {
  /** Name/label of the productCategory */
  name?: string;
}

export interface CreateProductRequest {
  /** Name of the product */
  name: string;

  /** Price of the product */
  priceInclVat: DineroObjectRequest;

  /** VAT group ID of the product */
  vat: number;

  /** Category of the product */
  category: number;

  /** Alcohol percentage of the product in 2 decimals */
  alcoholPercentage: number;

  /** ID of the owner */
  ownerId: number;
}

export interface UpdateProductRequest {
  /** Name of the product */
  name: string;

  /** Price of the product */
  priceInclVat: DineroObjectRequest;

  /** VAT group ID of the product */
  vat: number;

  /** Category of the product */
  category: number;

  /** Alcohol percentage of the product in 2 decimals */
  alcoholPercentage: number;
}

export interface ResetLocalRequest {
  /** The mail of the user */
  accountMail: string;
}

export interface RevisionRequest {
  /** revision id */
  id?: number;

  /** revision number */
  revision?: number;
}

export interface SimpleFileRequest {
  /** Name of the file */
  name?: string;
}

export interface StripeRequest {
  /** Amount of money being deposited */
  amount?: Dinero;
}

export interface TransactionRequest {
  /** from user id */
  from: number;

  /** createdBy user id */
  createdBy?: number;

  /**  */
  subTransactions: SubTransactionRequest[];

  /** point of sale */
  pointOfSale: RevisionRequest;

  /** total price of the transaction */
  totalPriceInclVat: DineroObjectRequest;
}

export interface SubTransactionRequest {
  /** to user id */
  to: number;

  /** container */
  container: RevisionRequest;

  /**  */
  subTransactionRows: SubTransactionRowRequest[];

  /** total price
          of the subtransaction */
  totalPriceInclVat: DineroObjectRequest;
}

export interface SubTransactionRowRequest {
  /** product */
  product?: RevisionRequest;

  /** amount of this product in subtransaction */
  amount?: number;

  /** total price
          of the subtransaction row */
  totalPriceInclVat: DineroObjectRequest;
}

export interface TransferRequest {
  /** Description of the transfer */
  description?: string;

  /** Amount of money being transferred */
  amount?: DineroObjectRequest;

  /** Type of transfer */
  type?: number;

  /** from which user the money is being transferred */
  fromId?: number;

  /** to which user the money is being transferred. */
  toId?: number;
}

export interface UpdateLocalRequest {
  /** The password to set */
  password: string;
}

export interface UpdatePinRequest {
  /** The PIN code to set */
  pin: string;
}

export interface UpdateUserRequest {
  /**  */
  firstName?: string;

  /**  */
  lastName?: string;

  /**  */
  active?: boolean;

  /**  */
  ofAge?: boolean;

  /**  */
  email?: string;

  /**  */
  deleted?: boolean;
}

export interface UpdateVatGroupRequest {
  /** Name of the VAT group */
  name: string;

  /** Whether this group should be hidden
in the financial overviews when its value is zero */
  deleted: boolean;

  /** Whether this group should
be hidden from transactions */
  hidden: boolean;
}

export interface VatGroupRequest {
  /** VAT percentage */
  percentage: number;
}

export interface GEWISAuthenticationPinRequest {
  /**  */
  gewisId: number;

  /**  */
  pin: string;
}

export interface GewiswebAuthenticationRequest {
  /** The gewisweb JWT token. */
  token: string;

  /** The nonce used in the newly signed JWT token. */
  nonce: string;
}

export interface PaginationResult {
  /** Number of records queried */
  take?: number;

  /** Number of skipped records */
  skip?: number;

  /** Total number of resulting records */
  count?: number;
}
