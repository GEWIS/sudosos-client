/* eslint-disable */
/* tslint:disable */
/*
 * ------------------------------------------------------------------
 * # THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-NEXTGEN     #
 * # AUTHORS: acacode & grandsilence                                #
 * # https://github.com/grandsilence/swagger-typescript-api-nextgen #
 * ------------------------------------------------------------------
 */

export type Banner = BaseEntity & {
  name?: string;
  duration?: number;
  active?: boolean;
  startDate?: string;
  endDate?: string;
};

export interface BaseEntityWithoutId {
  /** The creation date of the object. */
  createdAt?: string;

  /** The last update date of the object. */
  updatedAt?: string;

  /** The current version of the object. */
  version?: number;
}

export type BaseEntity = BaseEntityWithoutId & { id: number };

export type VatGroup = BaseEntity & { name?: string; percentage?: number; deleted?: boolean; hidden?: boolean };

export type AuthenticationMethod = BaseEntityWithoutId & { user: User };

export type EanAuthenticator = AuthenticationMethod & { eanCode: string };

export type HashBasedAuthenticationMethod = AuthenticationMethod & { hash: string };

export type LDAPAuthenticator = AuthenticationMethod & { accountName: string };

export type LocalAuthenticator = AuthenticationMethod & { hash: string };

export type MemberAuthenticator = AuthenticationMethod & { authenticateAs: User };

export type NfcAuthenticator = AuthenticationMethod & { uid: string };

export type PinAuthenticator = HashBasedAuthenticationMethod & { hash: string };

export type ResetToken = HashBasedAuthenticationMethod & { expires: string };

export type BaseContainer = BaseEntityWithoutId & { name: string };

export type ContainerRevision = BaseContainer & { container: Container; revision: number; products: ProductRevision[] };

export type Container = BaseEntity & { currentRevision?: number; owner: User; public?: boolean };

export type UpdatedContainer = BaseContainer & { container: Container; products: Product[] };

export type BannerImage = BaseFile;

export type BaseFile = BaseEntity & { downloadName: string; location: string; createdBy: User };

export type ProductImage = BaseFile;

export type InvoiceEntry = BaseEntity & {
  invoice: Invoice;
  priceInclVat: Dinero;
  amount: number;
  description: string;
  vatPercentage: number;
};

export type InvoiceStatus = BaseEntity & { invoice: Invoice; changedBy: User; state: string };

export type Invoice = BaseEntity & {
  to: User;
  transfer: Transfer;
  invoiceEntries: InvoiceEntry[];
  invoiceStatus: InvoiceStatus[];
  addressee: string;
  description: string;
};

export type BasePointOfSale = BaseEntityWithoutId & { name: string };

export type PointOfSaleRevision = BasePointOfSale & {
  pointOfSale: PointOfSale;
  revision: number;
  containers: ContainerRevision[];
};

export type PointOfSale = BaseEntity & { currentRevision?: number; owner: User };

export interface ProductOrdering {
  pos: PointOfSale;
  product: Product;

  /** The order number of the product in the pointOfSale. */
  order: number;
}

export type UpdatedPointOfSale = BasePointOfSale & { pointOfSale: PointOfSale; containers: Container[] };

export type BaseProduct = BaseEntityWithoutId & { name: string; price: Dinero };

export type ProductCategory = BaseEntity & { name: string };

export type ProductRevision = BaseProduct & { product: Product; revision: number };

export type Product = BaseEntity & { currentRevision?: number; owner: User; image?: ProductImage };

export type UpdatedProduct = BaseProduct & { product: Product };

export type AssignedRole = BaseEntityWithoutId & { user: User; role: string };

export type Balance = BaseEntityWithoutId & {
  user: User;
  amount: Dinero;
  lastTransaction?: Transaction;
  lastTransfer?: Transfer;
};

export type Transaction = BaseEntity & {
  from: User;
  createdBy: User;
  subTransactions: SubTransaction[];
  pointOfSale: PointOfSaleRevision;
};

export type SubTransactionRow = BaseEntity & { product: Product; amount: number; subTransaction?: SubTransaction };

export type SubTransaction = BaseEntityWithoutId & {
  to: User;
  container: Container;
  transaction: Transaction;
  subTransactionsRows: SubTransactionRow[];
};

export type Transfer = BaseEntity & { from?: User; to?: User; amount: Dinero; type: number; description?: string };

export type BorrelkaartGroup = BaseEntity & {
  name: string;
  activeStartDate: string;
  activeEndDate?: string;
  borrelkaarten: User[];
};

export type InvoiceUser = BaseEntity & { user: User; automatic?: boolean };

export type LocalUser = BaseEntity & { user: User; passwordHash: string };

export type UserBorrelkaartGroup = BaseEntity & { user: User; borrelkaartGroup: BorrelkaartGroup };

export type User = BaseEntity & {
  firstName: string;
  lastName?: string;
  active?: boolean;
  ofAge?: boolean;
  email?: string;
  deleted?: boolean;
  type: string;
};

export type GewisUserResponse = UserResponse & { gewisId?: number };

export type GewisUser = BaseEntity & { user: User; gewisId: number };

export interface AuthenticationResponse {
  user?: UserResponse;
  roles?: string[];
  organs?: UserResponse[];

  /** The JWT token that can be used as Bearer token for authentication. */
  token?: string;

  /**
   * Whether the related user has accepted the Terms of Service
   *  or is not required to.
   */
  acceptedToS?: string;
}

export type BalanceResponse = BaseResponse & {
  id: number;
  amount: DineroObjectResponse;
  lastTransactionId?: number;
  lastTransferId?: number;
};

export type BannerResponse = BaseResponse & {
  name?: string;
  image?: string;
  duration?: number;
  active?: boolean;
  startDate?: string;
  endDate?: string;
};

export interface PaginatedBannerResponse {
  _pagination?: PaginationResult;
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

export type BorrelkaartGroupResponse = BaseResponse & {
  name: string;
  activeStartDate?: string;
  activeEndDate: string;
  users: UserResponse[];
};

export interface PaginatedBorrelkaartGroupResponse {
  _pagination?: PaginationResult;
  records?: BorrelkaartGroupResponse[];
}

export type BaseContainerResponse = BaseResponse & { name: string; public: boolean; revision?: number };

export type ContainerResponse = BaseContainerResponse & { owner: BaseUserResponse };

export interface PaginatedContainerResponse {
  _pagination?: PaginationResult;
  records?: ContainerResponse[];
}

export interface PaginatedContainerWithProductResponse {
  _pagination?: PaginationResult;
  records?: ContainerWithProductsResponse[];
}

export type ContainerWithProductsResponse = ContainerResponse & { products: ProductResponse[] };

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

export type FinancialMutationResponse = any;

export interface PaginatedFinancialMutationResponse {
  _pagination?: PaginationResult;
  records?: PaginatedFinancialMutationResponse[];
}

export interface InvoiceStatusResponse {
  changedBy: BaseUserResponse;

  /**
   * The state of the invoice,
   * can be either CREATED, SENT, PAID or DELETED.
   */
  state: string;
}

export interface InvoiceEntryResponse {
  /** The description of the entry */
  description: string;

  /** Amount of products sold. */
  amount: number;
  priceInclVat: DineroObject;

  /** The percentage of VAT applied to this entry */
  vatPercentage: number;
}

export type BaseInvoiceResponse = BaseResponse & {
  to: BaseUserResponse;
  addressee: string;
  description: string;
  currentState: InvoiceStatusResponse;
  transfer?: TransferResponse;
};

export type InvoiceResponse = BaseInvoiceResponse & { invoiceEntries?: InvoiceEntryResponse[] };

export type InvoiceResponseTypes = any;

export interface PaginatedInvoiceResponse {
  _pagination?: PaginationResult;
  records?: InvoiceResponseTypes[];
}

export interface MessageResponse {
  /** The message response text. */
  message: string;
}

export type BoilerPayoutRequestResponse = BaseResponse & {
  requestedBy: BaseUserResponse;
  approvedBy?: BaseUserResponse;
  amount: DineroObjectResponse;
};

export type BasePayoutRequestResponse = BoilerPayoutRequestResponse & { status?: string };

export type PayoutRequestStatusResponse = BaseResponse & { state?: string };

export type PayoutRequestResponse = BoilerPayoutRequestResponse & {
  status?: PayoutRequestStatusResponse[];
  bankAccountNumber?: string;
  bankAccountName?: string;
};

export interface PaginatedBasePayoutRequestResponse {
  _pagination?: PaginationResult;
  records?: BasePayoutRequestResponse[];
}

export type BasePointOfSaleResponse = BaseResponse & { name: string };

export type PointOfSaleResponse = BasePointOfSaleResponse & {
  owner?: BaseUserResponse;
  revision: number;
  useAuthentication: boolean;
};

export interface PaginatedPointOfSaleResponse {
  _pagination?: PaginationResult;
  records?: PointOfSaleResponse[];
}

export type UpdatedPointOfSaleResponse = BasePointOfSaleResponse & {
  owner: BaseUserResponse;
  useAuthentication: boolean;
};

export type UpdatedPOSResponses = any;

export interface PaginatedUpdatedPointOfSaleResponse {
  _pagination?: PaginationResult;
  records?: UpdatedPOSResponses[];
}

export type PointOfSaleWithContainersResponse = PointOfSaleResponse & { containers: ContainerWithProductsResponse[] };

export type UpdatedPointOfSaleWithContainersResponse = UpdatedPointOfSaleResponse & {
  containers: ContainerWithProductsResponse[];
};

export type ProductCategoryResponse = BaseResponse & { name: string };

export interface PaginatedProductCategoryResponse {
  _pagination?: PaginationResult;
  records?: ProductCategoryResponse[];
}

export type BaseProductResponse = BaseResponse & {
  name: string;
  priceInclVat: DineroObjectResponse;
  vat: BaseVatGroupResponse;
};

export type UpdatedProductResponse = BaseProductResponse & {
  revision?: number;
  owner: BaseUserResponse;
  category: ProductCategoryResponse;
  priceExclVat: DineroObjectResponse;
  image?: string;
  alcoholPercentage?: number;
};

export type ProductResponse = UpdatedProductResponse & { revision?: number };

export interface PaginatedProductResponse {
  _pagination?: PaginationResult;
  records?: ProductResponse[];
}

export interface ActionResponse {
  /** The name of the action performed on the entity. */
  action?: string;
  relations?: RelationResponse[];
}

export interface EntityResponse {
  /** The name of the entity for which the permissions are. */
  entity?: string;
  actions?: ActionResponse[];
}

export interface RelationResponse {
  /** The the ownership relation towards the entity. */
  relation?: string;
  attributes?: string[];
}

export interface RoleResponse {
  /** The name of the role. */
  role: string;
  entities?: EntityResponse[];
}

export type SimpleFileResponse = BaseResponse & { downloadName: string; location: string; createdBy: UserResponse };

export type StripePaymentIntentResponse = BaseResponse & { stripeId: string; clientSecret: string };

export type StripeDepositStatusResponse = BaseResponse & { depositStatus: string };

export type StripeDepositResponse = BaseResponse & {
  stripeId: string;
  depositStatus: StripeDepositStatusResponse[];
  amount: DineroObjectResponse;
  to: BaseUserResponse;
};

export type BaseTransactionResponse = BaseResponse & {
  from: UserResponse;
  createdBy?: UserResponse;
  pointOfSale?: BasePointOfSaleResponse;
  value?: Dinero;
};

export type TransactionResponse = BaseResponse & {
  from: BaseUserResponse;
  createdBy?: BaseUserResponse;
  subTransactions: SubTransactionResponse[];
  pointOfSale?: BasePointOfSaleResponse;
  totalPriceInclVat: DineroObjectResponse;
};

export type SubTransactionResponse = BaseResponse & {
  to: BaseUserResponse;
  container: BaseContainerResponse;
  subTransactionsRows: SubTransactionRowResponse[];
  totalPriceInclVat: DineroObjectResponse;
};

export type SubTransactionRowResponse = BaseResponse & {
  product: BaseProductResponse;
  amount: number;
  totalPriceInclVat: DineroObjectResponse;
};

export interface PaginatedBaseTransactionResponse {
  _pagination?: PaginationResult;
  records?: BaseTransactionResponse[];
}

export type TransferResponse = BaseResponse & {
  description: string;
  amount: Dinero;
  from?: BaseUserResponse;
  to?: BaseUserResponse;
  invoice?: BaseInvoiceResponse;
  deposit?: StripeDepositResponse;
  payoutRequest?: BasePayoutRequestResponse;
};

export interface PaginatedTransferResponse {
  _pagination?: PaginationResult;
  records?: TransferResponse[];
}

export type BaseUserResponse = BaseResponse & { firstName: string; lastName?: string };

export type UserResponse = BaseUserResponse & {
  active: boolean;
  deleted: boolean;
  type: string;
  email?: string;
  acceptedToS?: string;
  extensiveDataProcessing?: boolean;
  ofAge?: boolean;
};

export interface PaginatedUserResponse {
  _pagination?: PaginationResult;
  records?: UserResponse[];
}

export type BaseVatGroupResponse = BaseResponse & { percentage: number; hidden: boolean };

export interface PaginatedVatGroupResponse {
  _pagination: PaginationResult;
  records: VatGroup[];
}

export interface VatDeclarationRow {
  /** ID of the VAT group */
  id?: number;

  /** Name of the VAT group */
  name?: string;

  /** Percentage of VAT in this group */
  percentage?: number;
  values?: DineroObject[];
}

export interface VatDeclarationResponse {
  /** Calendar year of this result table */
  calendarYear?: number;

  /** The used VAT declaration period the rows below are based upon */
  period?: string;
  rows?: VatDeclarationRow[];
}

export interface AcceptTosRequest {
  /**
   * Whether data about this
   * user can be used (non-anonymously) for more data science!
   */
  extensiveDataProcessing: boolean;
}

export interface AuthenticationEanRequest {
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
  userId: number;
  nonce: string;
}

export interface AuthenticationPinRequest {
  userId: number;
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
  users: User[];
}

export interface CreateContainerRequest {
  /** Name of the container */
  name: string;
  products: number[];

  /** Whether the container is public or not */
  public: boolean;

  /**
   * Id of the user who will own the container, if undefined it will
   *    default to the token ID.
   */
  ownerId?: number;
}

export interface UpdateContainerRequest {
  /** Name of the container */
  name: string;
  products: number[];

  /** Whether the container is public or not */
  public: boolean;
}

export interface CreateUserRequest {
  firstName: string;
  lastName?: string;
  active?: boolean;
  type: number;
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

  /**
   * The state to set of the invoice,
   *    can be either CREATED, SENT, PAID or DELETED.
   */
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
  customEntries?: InvoiceEntryRequest[];
  transactionIDs?: number[];

  /** For creating an Invoice for all transactions from a specific date. */
  fromDate?: string;
}

export interface PayoutRequestRequest {
  amount: DineroObjectRequest;

  /** The bank account number to transfer the money to */
  bankAccountNumber: string;

  /** The name of the owner of the bank account */
  bankAccountName: string;
}

export interface PayoutRequestStatusRequest {
  /**
   * PayoutRequestState to change to,
   * should be one of CREATED, APPROVED, DENIED, CANCELLED
   */
  state?: string;
}

export interface CreatePointOfSaleRequest {
  /** Name of the POS */
  name: string;

  /**
   * Whether this POS requires users to
   * authenticate themselves before making a transaction
   */
  useAuthentication: boolean;
  containers?: number[];

  /**
   * ID of the user who will own the POS, if undefined it will
   *    default to the token ID.
   */
  ownerId?: number;
}

export interface UpdatePointOfSaleRequest {
  /** Name of the POS */
  name: string;

  /**
   * Whether this POS requires users to
   * authenticate themselves before making a transaction
   */
  useAuthentication: boolean;
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
  amount?: Dinero;
}

export interface TransactionRequest {
  /** from user id */
  from: number;

  /** createdBy user id */
  createdBy?: number;
  subTransactions: SubTransactionRequest[];
  pointOfSale: RevisionRequest;
  totalPriceInclVat: DineroObjectRequest;
}

export interface SubTransactionRequest {
  /** to user id */
  to: number;
  container: RevisionRequest;
  subTransactionRows: SubTransactionRowRequest[];
  totalPriceInclVat: DineroObjectRequest;
}

export interface SubTransactionRowRequest {
  product?: RevisionRequest;

  /** amount of this product in subtransaction */
  amount?: number;
  totalPriceInclVat: DineroObjectRequest;
}

export interface TransferRequest {
  /** Description of the transfer */
  description?: string;
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
  firstName?: string;
  lastName?: string;
  active?: boolean;
  ofAge?: boolean;
  email?: string;
  deleted?: boolean;
}

export interface UpdateVatGroupRequest {
  /** Name of the VAT group */
  name: string;

  /**
   * Whether this group should be hidden
   * in the financial overviews when its value is zero
   */
  deleted: boolean;

  /**
   * Whether this group should
   * be hidden from transactions
   */
  hidden: boolean;
}

export type VatGroupRequest = UpdateVatGroupRequest & { percentage: number };

export interface GEWISAuthenticationPinRequest {
  gewisId: number;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title sudosos-back-end
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  authentication = {
    /**
     * @description PIN login and hand out token
     *
     * @tags authenticate
     * @name PinAuthentication
     * @request POST:/authentication/pin
     */
    pinAuthentication: (req: AuthenticationPinRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/authentication/pin`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description LDAP login and hand out token If user has never signed in before this also creates an account.
     *
     * @tags authenticate
     * @name LdapAuthentication
     * @request POST:/authentication/LDAP
     */
    ldapAuthentication: (req: AuthenticationLDAPRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/authentication/LDAP`,
        method: "POST",
        body: req,
        format: "json",
        ...params,
      }),

    /**
     * @description Local login and hand out token
     *
     * @tags authenticate
     * @name LocalAuthentication
     * @request POST:/authentication/local
     */
    localAuthentication: (req: AuthenticationLocalRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/authentication/local`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Reset local authentication using the provided token
     *
     * @tags authenticate
     * @name ResetLocalWithToken
     * @request PUT:/authentication/local
     */
    resetLocalWithToken: (req: AuthenticationResetTokenRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/authentication/local`,
        method: "PUT",
        body: req,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Creates a reset token for the local authentication
     *
     * @tags authenticate
     * @name ResetLocal
     * @request POST:/authentication/local/reset
     */
    resetLocal: (req: ResetLocalRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/authentication/local/reset`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description EAN login and hand out token
     *
     * @tags authenticate
     * @name EanAuthentication
     * @request POST:/authentication/ean
     */
    eanAuthentication: (req: AuthenticationEanRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/authentication/ean`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Mock login and hand out token.
     *
     * @tags authenticate
     * @name MockAuthentication
     * @request POST:/authentication/mock
     */
    mockAuthentication: (req: AuthenticationMockRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/authentication/mock`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a new JWT token, lesser if the existing token is also lesser
     *
     * @tags authenticate
     * @name RefreshToken
     * @request GET:/authentication/refreshToken
     * @secure
     */
    refreshToken: (params: RequestParams = {}) =>
      this.request<AuthenticationResponse, any>({
        path: `/authentication/refreshToken`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GEWIS login verification based on gewisweb JWT tokens. This method verifies the validity of the gewisweb JWT token, and returns a SudoSOS token if the GEWIS token is valid.
     *
     * @tags authenticate
     * @name GewisWebAuthentication
     * @request POST:/authentication/gewisweb
     */
    gewisWebAuthentication: (req: GewiswebAuthenticationRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void | MessageResponse>({
        path: `/authentication/gewisweb`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description LDAP login and hand out token If user has never signed in before this also creates an GEWIS account.
     *
     * @tags authenticate
     * @name GewisLdapAuthentication
     * @request POST:/authentication/GEWIS/LDAP
     */
    gewisLdapAuthentication: (req: AuthenticationLDAPRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/authentication/GEWIS/LDAP`,
        method: "POST",
        body: req,
        format: "json",
        ...params,
      }),

    /**
     * @description PIN login and hand out token.
     *
     * @tags authenticate
     * @name GewisPinAuthentication
     * @request POST:/authentication/GEWIS/pin
     */
    gewisPinAuthentication: (req: GEWISAuthenticationPinRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/authentication/GEWIS/pin`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  balances = {
    /**
     * @description Get balance of the current user
     *
     * @tags balance
     * @name GetBalance
     * @request GET:/balances
     * @secure
     */
    getBalance: (params: RequestParams = {}) =>
      this.request<BalanceResponse, void>({
        path: `/balances`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the requested balance
     *
     * @tags balance
     * @name GetBalanceId
     * @request GET:/balances/{id}
     * @secure
     */
    getBalanceId: (id: number, params: RequestParams = {}) =>
      this.request<BalanceResponse, void>({
        path: `/balances/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  banners = {
    /**
     * @description Saves a banner to the database
     *
     * @tags banners
     * @name Create
     * @request POST:/banners
     * @secure
     */
    create: (banner: BannerRequest, params: RequestParams = {}) =>
      this.request<BannerResponse, void>({
        path: `/banners`,
        method: "POST",
        body: banner,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all existing banners
     *
     * @tags banners
     * @name GetAll
     * @request GET:/banners
     * @secure
     */
    getAll: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedBannerResponse, void>({
        path: `/banners`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Uploads a banner image to the given banner
     *
     * @tags banners
     * @name UpdateImage
     * @request POST:/banners/{id}/image
     * @secure
     */
    updateImage: (id: number, data: { file?: File }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/banners/${id}/image`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns the requested banner
     *
     * @tags banners
     * @name Get
     * @request GET:/banners/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<BannerResponse, void>({
        path: `/banners/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the requested banner
     *
     * @tags banners
     * @name Update
     * @request PATCH:/banners/{id}
     * @secure
     */
    update: (id: number, banner: BannerRequest, params: RequestParams = {}) =>
      this.request<BannerResponse, void>({
        path: `/banners/${id}`,
        method: "PATCH",
        body: banner,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the requested banner
     *
     * @tags banners
     * @name Delete
     * @request DELETE:/banners/{id}
     * @secure
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<BannerResponse, void>({
        path: `/banners/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all active banners
     *
     * @tags banners
     * @name GetActive
     * @request GET:/banners/active
     * @secure
     */
    getActive: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedBannerResponse, void>({
        path: `/banners/active`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  borrelkaartgroups = {
    /**
     * @description Returns all existing borrelkaart groups
     *
     * @tags borrelkaartgroups
     * @name GetAll
     * @request GET:/borrelkaartgroups
     * @secure
     */
    getAll: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedBorrelkaartGroupResponse, void>({
        path: `/borrelkaartgroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new borrelkaart group
     *
     * @tags borrelkaartgroups
     * @name Create
     * @request POST:/borrelkaartgroups
     * @secure
     */
    create: (borrelkaartgroup: BorrelkaartGroupRequest, params: RequestParams = {}) =>
      this.request<BorrelkaartGroupResponse, void>({
        path: `/borrelkaartgroups`,
        method: "POST",
        body: borrelkaartgroup,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested borrelkaart group
     *
     * @tags borrelkaartgroups
     * @name Get
     * @request GET:/borrelkaartgroups/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<BorrelkaartGroupResponse, void>({
        path: `/borrelkaartgroups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the requested borrelkaart group
     *
     * @tags borrelkaartgroups
     * @name Update
     * @request PATCH:/borrelkaartgroups/{id}
     * @secure
     */
    update: (id: number, borrelkaartgroup: BorrelkaartGroupRequest, params: RequestParams = {}) =>
      this.request<BorrelkaartGroupResponse, void>({
        path: `/borrelkaartgroups/${id}`,
        method: "PATCH",
        body: borrelkaartgroup,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the requested borrelkaart group
     *
     * @tags borrelkaartgroups
     * @name Delete
     * @request DELETE:/borrelkaartgroups/{id}
     * @secure
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<BorrelkaartGroupResponse, void>({
        path: `/borrelkaartgroups/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  containers = {
    /**
     * @description Returns all existing containers
     *
     * @tags containers
     * @name GetAll
     * @request GET:/containers
     * @secure
     */
    getAll: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedContainerResponse, void>({
        path: `/containers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new container.
     *
     * @tags containers
     * @name Create
     * @request POST:/containers
     * @secure
     */
    create: (container: CreateContainerRequest, params: RequestParams = {}) =>
      this.request<ContainerWithProductsResponse, void>({
        path: `/containers`,
        method: "POST",
        body: container,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested container
     *
     * @tags containers
     * @name Get
     * @request GET:/containers/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<ContainerWithProductsResponse, void>({
        path: `/containers/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing container.
     *
     * @tags containers
     * @name Update
     * @request PATCH:/containers/{id}
     * @secure
     */
    update: (id: number, container: UpdateContainerRequest, params: RequestParams = {}) =>
      this.request<ContainerWithProductsResponse, void>({
        path: `/containers/${id}`,
        method: "PATCH",
        body: container,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all the products in the container
     *
     * @tags containers
     * @name GetProducts
     * @request GET:/containers/{id}/products
     * @secure
     */
    getProducts: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProductResponse, void>({
        path: `/containers/${id}/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Approve a container update.
     *
     * @tags containers
     * @name ApproveCreate
     * @request POST:/containers/{id}/approve
     * @secure
     */
    approveCreate: (id: number, params: RequestParams = {}) =>
      this.request<ContainerWithProductsResponse, void>({
        path: `/containers/${id}/approve`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all public container
     *
     * @tags containers
     * @name GetPublic
     * @request GET:/containers/public
     * @secure
     */
    getPublic: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedContainerResponse, void>({
        path: `/containers/public`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all updated containers
     *
     * @tags containers
     * @name GetUpdated
     * @request GET:/containers/updated
     * @secure
     */
    getUpdated: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedContainerResponse, void>({
        path: `/containers/updated`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested updated container
     *
     * @tags containers
     * @name GetUpdate
     * @request GET:/containers/{id}/update
     * @secure
     */
    getUpdate: (id: number, params: RequestParams = {}) =>
      this.request<ContainerWithProductsResponse, void>({
        path: `/containers/${id}/update`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  invoices = {
    /**
     * @description Returns all invoices in the system.
     *
     * @tags invoices
     * @name GetAll
     * @request GET:/invoices
     * @secure
     */
    getAll: (
      query?: {
        toId?: number;
        invoiceId?: number;
        state?: string;
        returnEntries?: boolean;
        fromDate?: string;
        tillDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedInvoiceResponse, void>({
        path: `/invoices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds an invoice to the system.
     *
     * @tags invoices
     * @name Create
     * @request POST:/invoices
     * @secure
     */
    create: (invoice: CreateInvoiceRequest, params: RequestParams = {}) =>
      this.request<InvoiceResponse, void>({
        path: `/invoices`,
        method: "POST",
        body: invoice,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a single invoice in the system.
     *
     * @tags invoices
     * @name InvoicesDetail
     * @request GET:/invoices/{id}
     * @secure
     */
    invoicesDetail: (id: number, query?: { returnEntries?: boolean }, params: RequestParams = {}) =>
      this.request<InvoiceResponse, void>({
        path: `/invoices/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds an invoice to the system.
     *
     * @tags invoices
     * @name Update
     * @request PATCH:/invoices/{id}
     * @secure
     */
    update: (id: number, invoice: UpdateInvoiceRequest, params: RequestParams = {}) =>
      this.request<BaseInvoiceResponse, void>({
        path: `/invoices/${id}`,
        method: "PATCH",
        body: invoice,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an invoice.
     *
     * @tags invoices
     * @name Delete
     * @request DELETE:/invoices/{id}
     * @secure
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<BaseInvoiceResponse, void>({
        path: `/invoices/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  payoutrequests = {
    /**
     * @description Returns all payout requests given the filter parameters
     *
     * @tags payoutRequests
     * @name GetAll
     * @request GET:/payoutrequests
     * @secure
     */
    getAll: (
      query?: {
        requestedById?: string;
        approvedById?: string;
        fromDate?: string;
        tillDate?: string;
        status?: string;
        take?: number;
        skip?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedBasePayoutRequestResponse, void>({
        path: `/payoutrequests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new payout request
     *
     * @tags payoutRequests
     * @name Create
     * @request POST:/payoutrequests
     * @secure
     */
    create: (payoutRequest: PayoutRequestRequest, params: RequestParams = {}) =>
      this.request<PayoutRequestResponse, void>({
        path: `/payoutrequests`,
        method: "POST",
        body: payoutRequest,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a single payout request
     *
     * @tags payoutRequests
     * @name Get
     * @request GET:/payoutrequests/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<PayoutRequestResponse, void>({
        path: `/payoutrequests/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new status for a payout request
     *
     * @tags payoutRequests
     * @name SetStatus
     * @request POST:/payoutrequests/{id}/status
     * @secure
     */
    setStatus: (id: number, state: PayoutRequestStatusRequest, params: RequestParams = {}) =>
      this.request<PayoutRequestResponse, void>({
        path: `/payoutrequests/${id}/status`,
        method: "POST",
        body: state,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  pointsofsale = {
    /**
     * @description Create a new Point of Sale.
     *
     * @tags pointofsale
     * @name Create
     * @request POST:/pointsofsale
     * @secure
     */
    create: (pointofsale: CreatePointOfSaleRequest, params: RequestParams = {}) =>
      this.request<UpdatedPointOfSaleResponse, void>({
        path: `/pointsofsale`,
        method: "POST",
        body: pointofsale,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all existing Point of Sales
     *
     * @tags pointofsale
     * @name GetAll
     * @request GET:/pointsofsale
     * @secure
     */
    getAll: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedPointOfSaleResponse, void>({
        path: `/pointsofsale`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested Point of Sale
     *
     * @tags pointofsale
     * @name Get
     * @request GET:/pointsofsale/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<PointOfSaleWithContainersResponse, void>({
        path: `/pointsofsale/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing Point of Sale.
     *
     * @tags pointofsale
     * @name Update
     * @request PATCH:/pointsofsale/{id}
     * @secure
     */
    update: (id: number, pointofsale: UpdatePointOfSaleRequest, params: RequestParams = {}) =>
      this.request<UpdatedPointOfSaleResponse, void>({
        path: `/pointsofsale/${id}`,
        method: "PATCH",
        body: pointofsale,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the containers of the requested Point of Sale, empty list if POS does not exist
     *
     * @tags pointofsale
     * @name GetContainers
     * @request GET:/pointsofsale/{id}/containers
     * @secure
     */
    getContainers: (id: string, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedContainerResponse, void>({
        path: `/pointsofsale/${id}/containers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the products of the requested Point of Sale, empty list if POS does not exist
     *
     * @tags pointofsale
     * @name GetProducts
     * @request GET:/pointsofsale/{id}/products
     * @secure
     */
    getProducts: (id: string, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProductResponse, void>({
        path: `/pointsofsale/${id}/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a single Points of Sale update
     *
     * @tags pointofsale
     * @name GetUpdate
     * @request GET:/pointsofsale/{id}/update
     * @secure
     */
    getUpdate: (id: number, params: RequestParams = {}) =>
      this.request<UpdatedPointOfSaleWithContainersResponse, void>({
        path: `/pointsofsale/${id}/update`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all updated Points of Sale
     *
     * @tags pointofsale
     * @name GetUpdated
     * @request GET:/pointsofsale/updated
     * @secure
     */
    getUpdated: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedUpdatedPointOfSaleResponse, void>({
        path: `/pointsofsale/updated`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Approve a Point of Sale update.
     *
     * @tags pointofsale
     * @name ApproveCreate
     * @request POST:/pointsofsale/{id}/approve
     * @secure
     */
    approveCreate: (id: number, params: RequestParams = {}) =>
      this.request<PointOfSaleResponse, void>({
        path: `/pointsofsale/${id}/approve`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a Point of Sale transactions
     *
     * @tags pointofsale
     * @name GetTransactions
     * @request GET:/pointsofsale/{id}/transactions
     * @secure
     */
    getTransactions: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedBaseTransactionResponse, void>({
        path: `/pointsofsale/${id}/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  productcategories = {
    /**
     * @description Returns all existing productcategories
     *
     * @tags productCategories
     * @name GetAll
     * @request GET:/productcategories
     * @secure
     */
    getAll: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProductCategoryResponse, void>({
        path: `/productcategories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Post a new productCategory.
     *
     * @tags productCategories
     * @name Create
     * @request POST:/productcategories
     * @secure
     */
    create: (productCategory: ProductCategoryRequest, params: RequestParams = {}) =>
      this.request<ProductCategoryResponse, void>({
        path: `/productcategories`,
        method: "POST",
        body: productCategory,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested productcategory
     *
     * @tags productCategories
     * @name Get
     * @request GET:/productcategories/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<ProductCategoryResponse, void>({
        path: `/productcategories/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing productcategory.
     *
     * @tags productCategories
     * @name Update
     * @request PATCH:/productcategories/{id}
     * @secure
     */
    update: (id: number, productCategory: ProductCategoryRequest, params: RequestParams = {}) =>
      this.request<ProductCategoryResponse, void>({
        path: `/productcategories/${id}`,
        method: "PATCH",
        body: productCategory,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * @description Returns all existing products
     *
     * @tags products
     * @name GetAll
     * @request GET:/products
     * @secure
     */
    getAll: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProductResponse, void>({
        path: `/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new product.
     *
     * @tags products
     * @name Create
     * @request POST:/products
     * @secure
     */
    create: (product: CreateProductRequest, params: RequestParams = {}) =>
      this.request<UpdatedProductResponse, void>({
        path: `/products`,
        method: "POST",
        body: product,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing product.
     *
     * @tags products
     * @name Update
     * @request PATCH:/products/{id}
     * @secure
     */
    update: (id: number, product: UpdateProductRequest, params: RequestParams = {}) =>
      this.request<ProductResponse, void>({
        path: `/products/${id}`,
        method: "PATCH",
        body: product,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested product
     *
     * @tags products
     * @name Get
     * @request GET:/products/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<ProductResponse, void>({
        path: `/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Approve a product update.
     *
     * @tags products
     * @name ApproveCreate
     * @request POST:/products/{id}/approve
     * @secure
     */
    approveCreate: (id: number, params: RequestParams = {}) =>
      this.request<ProductResponse, void>({
        path: `/products/${id}/approve`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all updated products
     *
     * @tags products
     * @name GetUpdated
     * @request GET:/products/updated
     * @secure
     */
    getUpdated: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProductResponse, void>({
        path: `/products/updated`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested updated product
     *
     * @tags products
     * @name GetUpdate
     * @request GET:/products/{id}/update
     * @secure
     */
    getUpdate: (id: number, params: RequestParams = {}) =>
      this.request<ProductResponse, void>({
        path: `/products/${id}/update`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Upload a new image for a product
     *
     * @tags products
     * @name UpdateImage
     * @request POST:/products/{id}/image
     * @secure
     */
    updateImage: (id: number, data: { file?: File }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/products/${id}/image`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  rbac = {
    /**
     * @description Returns all existing roles
     *
     * @tags rbac
     * @name GetAll
     * @request GET:/rbac/roles
     * @secure
     */
    getAll: (params: RequestParams = {}) =>
      this.request<RoleResponse[], void>({
        path: `/rbac/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  ping = {
    /**
     * @description Ping the backend to check whether everything is working correctly
     *
     * @tags root
     * @name Ping
     * @request GET:/ping
     */
    ping: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/ping`,
        method: "GET",
        ...params,
      }),
  };
  files = {
    /**
     * @description Upload a file with the given name.
     *
     * @tags files
     * @name Create
     * @request POST:/files
     * @secure
     */
    create: (data: { file?: File; name?: string }, params: RequestParams = {}) =>
      this.request<SimpleFileResponse, void>({
        path: `/files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Download a file with the given id.
     *
     * @tags files
     * @name Get
     * @request GET:/files/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/files/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Delete the file with the given id.
     *
     * @tags files
     * @name Delete
     * @request DELETE:/files/{id}
     * @secure
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/files/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  stripe = {
    /**
     * @description Start the stripe deposit flow
     *
     * @tags Stripe
     * @name Deposit
     * @request POST:/stripe/deposit
     * @secure
     */
    deposit: (stripe: StripeRequest, params: RequestParams = {}) =>
      this.request<StripePaymentIntentResponse, void>({
        path: `/stripe/deposit`,
        method: "POST",
        body: stripe,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Webhook for Stripe event updates
     *
     * @tags Stripe
     * @name Webhook
     * @request POST:/stripe/webhook
     */
    webhook: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/stripe/webhook`,
        method: "POST",
        ...params,
      }),
  };
  test = {
    /**
     * @description Get a beautiful Hello World email to your inbox
     *
     * @tags test
     * @name Helloworld
     * @request POST:/test/helloworld
     * @secure
     */
    helloworld: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/test/helloworld`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  transactions = {
    /**
     * @description Get a list of all transactions
     *
     * @tags transactions
     * @name GetAll
     * @request GET:/transactions
     * @secure
     */
    getAll: (
      query?: {
        fromId?: number;
        createdById?: number;
        toId?: number;
        pointOfSaleId?: number;
        productId?: number;
        productRevision?: number;
        fromDate?: string;
        tillDate?: string;
        take?: number;
        skip?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedBaseTransactionResponse, any>({
        path: `/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new transaction
     *
     * @tags transactions
     * @name Create
     * @request POST:/transactions
     * @secure
     */
    create: (transaction: TransactionRequest, params: RequestParams = {}) =>
      this.request<TransactionResponse, void>({
        path: `/transactions`,
        method: "POST",
        body: transaction,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a single transaction
     *
     * @tags transactions
     * @name Get
     * @request GET:/transactions/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<TransactionResponse, void>({
        path: `/transactions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the requested transaction
     *
     * @tags transactions
     * @name Update
     * @request PATCH:/transactions/{id}
     * @secure
     */
    update: (id: number, transaction: TransactionRequest, params: RequestParams = {}) =>
      this.request<TransactionResponse, void>({
        path: `/transactions/${id}`,
        method: "PATCH",
        body: transaction,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a transaction
     *
     * @tags transactions
     * @name Delete
     * @request DELETE:/transactions/{id}
     * @secure
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<TransactionResponse, void>({
        path: `/transactions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  transfers = {
    /**
     * @description Returns all existing transfers
     *
     * @tags transfers
     * @name GetAll
     * @request GET:/transfers
     * @secure
     */
    getAll: (query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<TransferResponse[], void>({
        path: `/transfers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Post a new transfer.
     *
     * @tags transfers
     * @name Create
     * @request POST:/transfers
     * @secure
     */
    create: (transfer: TransferRequest, params: RequestParams = {}) =>
      this.request<TransferResponse, void>({
        path: `/transfers`,
        method: "POST",
        body: transfer,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested transfer
     *
     * @tags transfers
     * @name Get
     * @request GET:/transfers/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<TransferResponse, void>({
        path: `/transfers/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Get a list of all users
     *
     * @tags users
     * @name GetAll
     * @request GET:/users
     * @secure
     */
    getAll: (
      query?: {
        take?: number;
        skip?: number;
        firstName?: string;
        lastName?: string;
        active?: boolean;
        ofAge?: boolean;
        id?: number;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedUserResponse, any>({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new user
     *
     * @tags users
     * @name Create
     * @request POST:/users
     * @secure
     */
    create: (user: CreateUserRequest, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/users`,
        method: "POST",
        body: user,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all users of user type
     *
     * @tags users
     * @name GetType
     * @request GET:/users/usertype/{userType}
     * @secure
     */
    getType: (userType: string, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedUserResponse, void>({
        path: `/users/usertype/${userType}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Put an users pin code
     *
     * @tags users
     * @name UpdatePin
     * @request PUT:/users/{id}/authenticator/pin
     * @secure
     */
    updatePin: (id: number, update: UpdatePinRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${id}/authenticator/pin`,
        method: "PUT",
        body: update,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Put a user's local password
     *
     * @tags users
     * @name UpdateLocal
     * @request PUT:/users/{id}/authenticator/local
     * @secure
     */
    updateLocal: (id: number, update: UpdateLocalRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${id}/authenticator/local`,
        method: "PUT",
        body: update,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get an organs members
     *
     * @tags users
     * @name GetMembers
     * @request GET:/users/{id}/members
     * @secure
     */
    getMembers: (id: number, params: RequestParams = {}) =>
      this.request<PaginatedUserResponse, void>({
        path: `/users/${id}/members`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an individual user
     *
     * @tags users
     * @name Get
     * @request GET:/users/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a user
     *
     * @tags users
     * @name Update
     * @request PATCH:/users/{id}
     * @secure
     */
    update: (id: string, user: UpdateUserRequest, params: RequestParams = {}) =>
      this.request<UpdateUserRequest, void>({
        path: `/users/${id}`,
        method: "PATCH",
        body: user,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a single user
     *
     * @tags users
     * @name Delete
     * @request DELETE:/users/{id}
     * @secure
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Accept the Terms of Service if you have not accepted it yet
     *
     * @tags users
     * @name AcceptTos
     * @request POST:/users/acceptTos
     * @secure
     */
    acceptTos: (params: AcceptTosRequest, requestParams: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/acceptTos`,
        method: "POST",
        body: params,
        secure: true,
        type: ContentType.Json,
        ...requestParams,
      }),

    /**
     * @description Get an user's products
     *
     * @tags users
     * @name GetProducts
     * @request GET:/users/{id}/products
     * @secure
     */
    getProducts: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProductResponse, any>({
        path: `/users/${id}/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an user's updated products
     *
     * @tags users
     * @name GetUpdatedProducts
     * @request GET:/users/{id}/products/updated
     * @secure
     */
    getUpdatedProducts: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedProductResponse, any>({
        path: `/users/${id}/products/updated`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the user's containers
     *
     * @tags users
     * @name GetContainers
     * @request GET:/users/{id}/containers
     * @secure
     */
    getContainers: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedContainerResponse, void>({
        path: `/users/${id}/containers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the user's updated containers
     *
     * @tags users
     * @name GetUpdatedContainers
     * @request GET:/users/{id}/containers/updated
     * @secure
     */
    getUpdatedContainers: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedContainerResponse, void>({
        path: `/users/${id}/containers/updated`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the user's Points of Sale
     *
     * @tags users
     * @name GetPointsOfSale
     * @request GET:/users/{id}/pointsofsale
     * @secure
     */
    getPointsOfSale: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedPointOfSaleResponse, void>({
        path: `/users/${id}/pointsofsale`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the user's updated Points of Sale
     *
     * @tags users
     * @name GetUpdatedPointsOfSale
     * @request GET:/users/{id}/pointsofsale/updated
     * @secure
     */
    getUpdatedPointsOfSale: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedUpdatedPointOfSaleResponse, void>({
        path: `/users/${id}/pointsofsale/updated`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an user's transactions (from, to or created)
     *
     * @tags users
     * @name GetTransactions
     * @request GET:/users/{id}/transactions
     * @secure
     */
    getTransactions: (
      id: number,
      query?: {
        fromId?: number;
        createdById?: number;
        toId?: number;
        productId?: number;
        productRevision?: number;
        fromDate?: string;
        tillDate?: string;
        take?: number;
        skip?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedBaseTransactionResponse, any>({
        path: `/users/${id}/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an user's transfers
     *
     * @tags users
     * @name GetTransfers
     * @request GET:/users/{id}/transfers
     * @secure
     */
    getTransfers: (
      id: number,
      query?: { take?: number; skip?: number; fromId?: number; toId?: number; id?: number },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedTransferResponse, any>({
        path: `/users/${id}/transfers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Authenticate as another user
     *
     * @tags users
     * @name AuthenticateAs
     * @request POST:/users/{id}/authenticate
     * @secure
     */
    authenticateAs: (id: number, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, void>({
        path: `/users/${id}/authenticate`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all users that the user can authenticate as
     *
     * @tags users
     * @name GetAuthentications
     * @request GET:/users/{id}/authenticate
     * @secure
     */
    getAuthentications: (id: number, params: RequestParams = {}) =>
      this.request<UserResponse[], void>({
        path: `/users/${id}/authenticate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all roles assigned to the user.
     *
     * @tags users
     * @name GetRoles
     * @request GET:/users/{id}/roles
     * @secure
     */
    getRoles: (id: number, params: RequestParams = {}) =>
      this.request<RoleResponse[], void>({
        path: `/users/${id}/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all financial mutations of a user.
     *
     * @tags users
     * @name GetFinancialMutations
     * @request GET:/users/{id}/financialmutations
     * @secure
     */
    getFinancialMutations: (id: number, query?: { take?: number; skip?: number }, params: RequestParams = {}) =>
      this.request<PaginatedFinancialMutationResponse, void>({
        path: `/users/${id}/financialmutations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all deposits of a user that are still being processed by Stripe
     *
     * @tags users
     * @name GetPendingDeposits
     * @request GET:/users/{id}/deposits
     * @secure
     */
    getPendingDeposits: (id: number, params: RequestParams = {}) =>
      this.request<RoleResponse[], void>({
        path: `/users/${id}/deposits`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  vatgroups = {
    /**
     * @description Get a list of all VAT groups
     *
     * @tags vatGroups
     * @name GetAll
     * @request GET:/vatgroups
     * @secure
     */
    getAll: (
      query?: {
        vatGroupId?: number;
        name?: string;
        percentage?: number;
        deleted?: boolean;
        take?: number;
        skip?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedVatGroupResponse, any>({
        path: `/vatgroups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new VAT group
     *
     * @tags vatGroups
     * @name Create
     * @request POST:/vatgroups
     * @secure
     */
    create: (vatGroup: VatGroupRequest, params: RequestParams = {}) =>
      this.request<VatGroup, void>({
        path: `/vatgroups`,
        method: "POST",
        body: vatGroup,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested VAT group
     *
     * @tags vatGroups
     * @name Get
     * @request GET:/vatgroups/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<VatGroup, void>({
        path: `/vatgroups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new VAT group
     *
     * @tags vatGroups
     * @name Update
     * @request PATCH:/vatgroups/{id}
     * @secure
     */
    update: (id: number, vatGroup: UpdateVatGroupRequest, params: RequestParams = {}) =>
      this.request<VatGroup, void>({
        path: `/vatgroups/${id}`,
        method: "PATCH",
        body: vatGroup,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the VAT collections needed for VAT declarations
     *
     * @tags vatGroups
     * @name GetDeclaration
     * @request GET:/vatgroups/declaration
     * @secure
     */
    getDeclaration: (query: { year: number; period: string }, params: RequestParams = {}) =>
      this.request<PaginatedVatGroupResponse, any>({
        path: `/vatgroups/declaration`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
