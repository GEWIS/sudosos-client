export declare type Banner = BaseEntity & {
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
export declare type BaseEntity = BaseEntityWithoutId & {
    id: number;
};
export declare type VatGroup = BaseEntity & {
    name?: string;
    percentage?: number;
    deleted?: boolean;
    hidden?: boolean;
};
export declare type AuthenticationMethod = BaseEntityWithoutId & {
    user: User;
};
export declare type EanAuthenticator = AuthenticationMethod & {
    eanCode: string;
};
export declare type HashBasedAuthenticationMethod = AuthenticationMethod & {
    hash: string;
};
export declare type LDAPAuthenticator = AuthenticationMethod & {
    accountName: string;
};
export declare type LocalAuthenticator = AuthenticationMethod & {
    hash: string;
};
export declare type MemberAuthenticator = AuthenticationMethod & {
    authenticateAs: User;
};
export declare type NfcAuthenticator = AuthenticationMethod & {
    uid: string;
};
export declare type PinAuthenticator = HashBasedAuthenticationMethod & {
    hash: string;
};
export declare type ResetToken = HashBasedAuthenticationMethod & {
    expires: string;
};
export declare type BaseContainer = BaseEntityWithoutId & {
    name: string;
};
export declare type ContainerRevision = BaseContainer & {
    container: Container;
    revision: number;
    products: ProductRevision[];
};
export declare type Container = BaseEntity & {
    currentRevision?: number;
    owner: User;
    public?: boolean;
};
export declare type UpdatedContainer = BaseContainer & {
    container: Container;
    products: Product[];
};
export declare type BannerImage = BaseFile;
export declare type BaseFile = BaseEntity & {
    downloadName: string;
    location: string;
    createdBy: User;
};
export declare type ProductImage = BaseFile;
export declare type InvoiceEntry = BaseEntity & {
    invoice: Invoice;
    priceInclVat: Dinero;
    amount: number;
    description: string;
    vatPercentage: number;
};
export declare type InvoiceStatus = BaseEntity & {
    invoice: Invoice;
    changedBy: User;
    state: string;
};
export declare type Invoice = BaseEntity & {
    to: User;
    transfer: Transfer;
    invoiceEntries: InvoiceEntry[];
    invoiceStatus: InvoiceStatus[];
    addressee: string;
    description: string;
};
export declare type BasePointOfSale = BaseEntityWithoutId & {
    name: string;
};
export declare type PointOfSaleRevision = BasePointOfSale & {
    pointOfSale: PointOfSale;
    revision: number;
    containers: ContainerRevision[];
};
export declare type PointOfSale = BaseEntity & {
    currentRevision?: number;
    owner: User;
};
export interface ProductOrdering {
    pos: PointOfSale;
    product: Product;
    /** The order number of the product in the pointOfSale. */
    order: number;
}
export declare type UpdatedPointOfSale = BasePointOfSale & {
    pointOfSale: PointOfSale;
    containers: Container[];
};
export declare type BaseProduct = BaseEntityWithoutId & {
    name: string;
    price: Dinero;
};
export declare type ProductCategory = BaseEntity & {
    name: string;
};
export declare type ProductRevision = BaseProduct & {
    product: Product;
    revision: number;
};
export declare type Product = BaseEntity & {
    currentRevision?: number;
    owner: User;
    image?: ProductImage;
};
export declare type UpdatedProduct = BaseProduct & {
    product: Product;
};
export declare type AssignedRole = BaseEntityWithoutId & {
    user: User;
    role: string;
};
export declare type Balance = BaseEntityWithoutId & {
    user: User;
    amount: Dinero;
    lastTransaction?: Transaction;
    lastTransfer?: Transfer;
};
export declare type Transaction = BaseEntity & {
    from: User;
    createdBy: User;
    subTransactions: SubTransaction[];
    pointOfSale: PointOfSaleRevision;
};
export declare type SubTransactionRow = BaseEntity & {
    product: Product;
    amount: number;
    subTransaction?: SubTransaction;
};
export declare type SubTransaction = BaseEntityWithoutId & {
    to: User;
    container: Container;
    transaction: Transaction;
    subTransactionsRows: SubTransactionRow[];
};
export declare type Transfer = BaseEntity & {
    from?: User;
    to?: User;
    amount: Dinero;
    type: number;
    description?: string;
};
export declare type BorrelkaartGroup = BaseEntity & {
    name: string;
    activeStartDate: string;
    activeEndDate?: string;
    borrelkaarten: User[];
};
export declare type InvoiceUser = BaseEntity & {
    user: User;
    automatic?: boolean;
};
export declare type LocalUser = BaseEntity & {
    user: User;
    passwordHash: string;
};
export declare type UserBorrelkaartGroup = BaseEntity & {
    user: User;
    borrelkaartGroup: BorrelkaartGroup;
};
export declare type User = BaseEntity & {
    firstName: string;
    lastName?: string;
    active?: boolean;
    ofAge?: boolean;
    email?: string;
    deleted?: boolean;
    type: string;
};
export declare type GewisUserResponse = UserResponse & {
    gewisId?: number;
};
export declare type GewisUser = BaseEntity & {
    user: User;
    gewisId: number;
};
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
export declare type BalanceResponse = BaseResponse & {
    id: number;
    amount: DineroObjectResponse;
    lastTransactionId?: number;
    lastTransferId?: number;
};
export declare type BannerResponse = BaseResponse & {
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
export declare type BorrelkaartGroupResponse = BaseResponse & {
    name: string;
    activeStartDate?: string;
    activeEndDate: string;
    users: UserResponse[];
};
export interface PaginatedBorrelkaartGroupResponse {
    _pagination?: PaginationResult;
    records?: BorrelkaartGroupResponse[];
}
export declare type BaseContainerResponse = BaseResponse & {
    name: string;
    public: boolean;
    revision?: number;
};
export declare type ContainerResponse = BaseContainerResponse & {
    owner: BaseUserResponse;
};
export interface PaginatedContainerResponse {
    _pagination?: PaginationResult;
    records?: ContainerResponse[];
}
export interface PaginatedContainerWithProductResponse {
    _pagination?: PaginationResult;
    records?: ContainerWithProductsResponse[];
}
export declare type ContainerWithProductsResponse = ContainerResponse & {
    products: ProductResponse[];
};
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
export declare type FinancialMutationResponse = any;
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
export declare type BaseInvoiceResponse = BaseResponse & {
    to: BaseUserResponse;
    addressee: string;
    description: string;
    currentState: InvoiceStatusResponse;
    transfer?: TransferResponse;
};
export declare type InvoiceResponse = BaseInvoiceResponse & {
    invoiceEntries?: InvoiceEntryResponse[];
};
export declare type InvoiceResponseTypes = any;
export interface PaginatedInvoiceResponse {
    _pagination?: PaginationResult;
    records?: InvoiceResponseTypes[];
}
export interface MessageResponse {
    /** The message response text. */
    message: string;
}
export declare type BoilerPayoutRequestResponse = BaseResponse & {
    requestedBy: BaseUserResponse;
    approvedBy?: BaseUserResponse;
    amount: DineroObjectResponse;
};
export declare type BasePayoutRequestResponse = BoilerPayoutRequestResponse & {
    status?: string;
};
export declare type PayoutRequestStatusResponse = BaseResponse & {
    state?: string;
};
export declare type PayoutRequestResponse = BoilerPayoutRequestResponse & {
    status?: PayoutRequestStatusResponse[];
    bankAccountNumber?: string;
    bankAccountName?: string;
};
export interface PaginatedBasePayoutRequestResponse {
    _pagination?: PaginationResult;
    records?: BasePayoutRequestResponse[];
}
export declare type BasePointOfSaleResponse = BaseResponse & {
    name: string;
};
export declare type PointOfSaleResponse = BasePointOfSaleResponse & {
    owner?: BaseUserResponse;
    revision: number;
    useAuthentication: boolean;
};
export interface PaginatedPointOfSaleResponse {
    _pagination?: PaginationResult;
    records?: PointOfSaleResponse[];
}
export declare type UpdatedPointOfSaleResponse = BasePointOfSaleResponse & {
    owner: BaseUserResponse;
    useAuthentication: boolean;
};
export declare type UpdatedPOSResponses = any;
export interface PaginatedUpdatedPointOfSaleResponse {
    _pagination?: PaginationResult;
    records?: UpdatedPOSResponses[];
}
export declare type PointOfSaleWithContainersResponse = PointOfSaleResponse & {
    containers: ContainerWithProductsResponse[];
};
export declare type UpdatedPointOfSaleWithContainersResponse = UpdatedPointOfSaleResponse & {
    containers: ContainerWithProductsResponse[];
};
export declare type ProductCategoryResponse = BaseResponse & {
    name: string;
};
export interface PaginatedProductCategoryResponse {
    _pagination?: PaginationResult;
    records?: ProductCategoryResponse[];
}
export declare type BaseProductResponse = BaseResponse & {
    name: string;
    priceInclVat: DineroObjectResponse;
    vat: BaseVatGroupResponse;
};
export declare type UpdatedProductResponse = BaseProductResponse & {
    revision?: number;
    owner: BaseUserResponse;
    category: ProductCategoryResponse;
    priceExclVat: DineroObjectResponse;
    image?: string;
    alcoholPercentage?: number;
};
export declare type ProductResponse = UpdatedProductResponse & {
    revision?: number;
};
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
export declare type SimpleFileResponse = BaseResponse & {
    downloadName: string;
    location: string;
    createdBy: UserResponse;
};
export declare type StripePaymentIntentResponse = BaseResponse & {
    stripeId: string;
    clientSecret: string;
};
export declare type StripeDepositStatusResponse = BaseResponse & {
    depositStatus: string;
};
export declare type StripeDepositResponse = BaseResponse & {
    stripeId: string;
    depositStatus: StripeDepositStatusResponse[];
    amount: DineroObjectResponse;
    to: BaseUserResponse;
};
export declare type BaseTransactionResponse = BaseResponse & {
    from: UserResponse;
    createdBy?: UserResponse;
    pointOfSale?: BasePointOfSaleResponse;
    value?: Dinero;
};
export declare type TransactionResponse = BaseResponse & {
    from: BaseUserResponse;
    createdBy?: BaseUserResponse;
    subTransactions: SubTransactionResponse[];
    pointOfSale?: BasePointOfSaleResponse;
    totalPriceInclVat: DineroObjectResponse;
};
export declare type SubTransactionResponse = BaseResponse & {
    to: BaseUserResponse;
    container: BaseContainerResponse;
    subTransactionsRows: SubTransactionRowResponse[];
    totalPriceInclVat: DineroObjectResponse;
};
export declare type SubTransactionRowResponse = BaseResponse & {
    product: BaseProductResponse;
    amount: number;
    totalPriceInclVat: DineroObjectResponse;
};
export interface PaginatedBaseTransactionResponse {
    _pagination?: PaginationResult;
    records?: BaseTransactionResponse[];
}
export declare type TransferResponse = BaseResponse & {
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
export declare type BaseUserResponse = BaseResponse & {
    firstName: string;
    lastName?: string;
};
export declare type UserResponse = BaseUserResponse & {
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
export declare type BaseVatGroupResponse = BaseResponse & {
    percentage: number;
    hidden: boolean;
};
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
export declare type VatGroupRequest = UpdateVatGroupRequest & {
    percentage: number;
};
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
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
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
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
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
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private encodeQueryParam;
    private addQueryParam;
    private addArrayQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title sudosos-back-end
 * @version 0.1.0
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    authentication: {
        /**
         * @description PIN login and hand out token
         *
         * @tags authenticate
         * @name PinAuthentication
         * @request POST:/authentication/pin
         */
        pinAuthentication: (req: AuthenticationPinRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
        /**
         * @description LDAP login and hand out token If user has never signed in before this also creates an account.
         *
         * @tags authenticate
         * @name LdapAuthentication
         * @request POST:/authentication/LDAP
         */
        ldapAuthentication: (req: AuthenticationLDAPRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
        /**
         * @description Local login and hand out token
         *
         * @tags authenticate
         * @name LocalAuthentication
         * @request POST:/authentication/local
         */
        localAuthentication: (req: AuthenticationLocalRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
        /**
         * @description Reset local authentication using the provided token
         *
         * @tags authenticate
         * @name ResetLocalWithToken
         * @request PUT:/authentication/local
         */
        resetLocalWithToken: (req: AuthenticationResetTokenRequest, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Creates a reset token for the local authentication
         *
         * @tags authenticate
         * @name ResetLocal
         * @request POST:/authentication/local/reset
         */
        resetLocal: (req: ResetLocalRequest, params?: RequestParams) => Promise<HttpResponse<void, any>>;
        /**
         * @description EAN login and hand out token
         *
         * @tags authenticate
         * @name EanAuthentication
         * @request POST:/authentication/ean
         */
        eanAuthentication: (req: AuthenticationEanRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
        /**
         * @description Mock login and hand out token.
         *
         * @tags authenticate
         * @name MockAuthentication
         * @request POST:/authentication/mock
         */
        mockAuthentication: (req: AuthenticationMockRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
        /**
         * @description Get a new JWT token, lesser if the existing token is also lesser
         *
         * @tags authenticate
         * @name RefreshToken
         * @request GET:/authentication/refreshToken
         * @secure
         */
        refreshToken: (params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, any>>;
        /**
         * @description GEWIS login verification based on gewisweb JWT tokens. This method verifies the validity of the gewisweb JWT token, and returns a SudoSOS token if the GEWIS token is valid.
         *
         * @tags authenticate
         * @name GewisWebAuthentication
         * @request POST:/authentication/gewisweb
         */
        gewisWebAuthentication: (req: GewiswebAuthenticationRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void | MessageResponse>>;
        /**
         * @description LDAP login and hand out token If user has never signed in before this also creates an GEWIS account.
         *
         * @tags authenticate
         * @name GewisLdapAuthentication
         * @request POST:/authentication/GEWIS/LDAP
         */
        gewisLdapAuthentication: (req: AuthenticationLDAPRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
        /**
         * @description PIN login and hand out token.
         *
         * @tags authenticate
         * @name GewisPinAuthentication
         * @request POST:/authentication/GEWIS/pin
         */
        gewisPinAuthentication: (req: GEWISAuthenticationPinRequest, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
    };
    balances: {
        /**
         * @description Get balance of the current user
         *
         * @tags balance
         * @name GetBalance
         * @request GET:/balances
         * @secure
         */
        getBalance: (params?: RequestParams) => Promise<HttpResponse<BalanceResponse, void>>;
        /**
         * @description Retrieves the requested balance
         *
         * @tags balance
         * @name GetBalanceId
         * @request GET:/balances/{id}
         * @secure
         */
        getBalanceId: (id: number, params?: RequestParams) => Promise<HttpResponse<BalanceResponse, void>>;
    };
    banners: {
        /**
         * @description Saves a banner to the database
         *
         * @tags banners
         * @name Create
         * @request POST:/banners
         * @secure
         */
        create: (banner: BannerRequest, params?: RequestParams) => Promise<HttpResponse<BannerResponse, void>>;
        /**
         * @description Returns all existing banners
         *
         * @tags banners
         * @name GetAll
         * @request GET:/banners
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedBannerResponse, void>>;
        /**
         * @description Uploads a banner image to the given banner
         *
         * @tags banners
         * @name UpdateImage
         * @request POST:/banners/{id}/image
         * @secure
         */
        updateImage: (id: number, data: {
            file?: File;
        }, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Returns the requested banner
         *
         * @tags banners
         * @name Get
         * @request GET:/banners/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<BannerResponse, void>>;
        /**
         * @description Updates the requested banner
         *
         * @tags banners
         * @name Update
         * @request PATCH:/banners/{id}
         * @secure
         */
        update: (id: number, banner: BannerRequest, params?: RequestParams) => Promise<HttpResponse<BannerResponse, void>>;
        /**
         * @description Deletes the requested banner
         *
         * @tags banners
         * @name Delete
         * @request DELETE:/banners/{id}
         * @secure
         */
        delete: (id: number, params?: RequestParams) => Promise<HttpResponse<BannerResponse, void>>;
        /**
         * @description Returns all active banners
         *
         * @tags banners
         * @name GetActive
         * @request GET:/banners/active
         * @secure
         */
        getActive: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedBannerResponse, void>>;
    };
    borrelkaartgroups: {
        /**
         * @description Returns all existing borrelkaart groups
         *
         * @tags borrelkaartgroups
         * @name GetAll
         * @request GET:/borrelkaartgroups
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedBorrelkaartGroupResponse, void>>;
        /**
         * @description Creates a new borrelkaart group
         *
         * @tags borrelkaartgroups
         * @name Create
         * @request POST:/borrelkaartgroups
         * @secure
         */
        create: (borrelkaartgroup: BorrelkaartGroupRequest, params?: RequestParams) => Promise<HttpResponse<BorrelkaartGroupResponse, void>>;
        /**
         * @description Returns the requested borrelkaart group
         *
         * @tags borrelkaartgroups
         * @name Get
         * @request GET:/borrelkaartgroups/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<BorrelkaartGroupResponse, void>>;
        /**
         * @description Updates the requested borrelkaart group
         *
         * @tags borrelkaartgroups
         * @name Update
         * @request PATCH:/borrelkaartgroups/{id}
         * @secure
         */
        update: (id: number, borrelkaartgroup: BorrelkaartGroupRequest, params?: RequestParams) => Promise<HttpResponse<BorrelkaartGroupResponse, void>>;
        /**
         * @description Deletes the requested borrelkaart group
         *
         * @tags borrelkaartgroups
         * @name Delete
         * @request DELETE:/borrelkaartgroups/{id}
         * @secure
         */
        delete: (id: number, params?: RequestParams) => Promise<HttpResponse<BorrelkaartGroupResponse, void>>;
    };
    containers: {
        /**
         * @description Returns all existing containers
         *
         * @tags containers
         * @name GetAll
         * @request GET:/containers
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedContainerResponse, void>>;
        /**
         * @description Create a new container.
         *
         * @tags containers
         * @name Create
         * @request POST:/containers
         * @secure
         */
        create: (container: CreateContainerRequest, params?: RequestParams) => Promise<HttpResponse<ContainerWithProductsResponse, void>>;
        /**
         * @description Returns the requested container
         *
         * @tags containers
         * @name Get
         * @request GET:/containers/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<ContainerWithProductsResponse, void>>;
        /**
         * @description Update an existing container.
         *
         * @tags containers
         * @name Update
         * @request PATCH:/containers/{id}
         * @secure
         */
        update: (id: number, container: UpdateContainerRequest, params?: RequestParams) => Promise<HttpResponse<ContainerWithProductsResponse, void>>;
        /**
         * @description Returns all the products in the container
         *
         * @tags containers
         * @name GetProducts
         * @request GET:/containers/{id}/products
         * @secure
         */
        getProducts: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedProductResponse, void>>;
        /**
         * @description Approve a container update.
         *
         * @tags containers
         * @name ApproveCreate
         * @request POST:/containers/{id}/approve
         * @secure
         */
        approveCreate: (id: number, params?: RequestParams) => Promise<HttpResponse<ContainerWithProductsResponse, void>>;
        /**
         * @description Returns all public container
         *
         * @tags containers
         * @name GetPublic
         * @request GET:/containers/public
         * @secure
         */
        getPublic: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedContainerResponse, void>>;
        /**
         * @description Returns all updated containers
         *
         * @tags containers
         * @name GetUpdated
         * @request GET:/containers/updated
         * @secure
         */
        getUpdated: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedContainerResponse, void>>;
        /**
         * @description Returns the requested updated container
         *
         * @tags containers
         * @name GetUpdate
         * @request GET:/containers/{id}/update
         * @secure
         */
        getUpdate: (id: number, params?: RequestParams) => Promise<HttpResponse<ContainerWithProductsResponse, void>>;
    };
    invoices: {
        /**
         * @description Returns all invoices in the system.
         *
         * @tags invoices
         * @name GetAll
         * @request GET:/invoices
         * @secure
         */
        getAll: (query?: {
            toId?: number;
            invoiceId?: number;
            state?: string;
            returnEntries?: boolean;
            fromDate?: string;
            tillDate?: string;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedInvoiceResponse, void>>;
        /**
         * @description Adds an invoice to the system.
         *
         * @tags invoices
         * @name Create
         * @request POST:/invoices
         * @secure
         */
        create: (invoice: CreateInvoiceRequest, params?: RequestParams) => Promise<HttpResponse<InvoiceResponse, void>>;
        /**
         * @description Returns a single invoice in the system.
         *
         * @tags invoices
         * @name InvoicesDetail
         * @request GET:/invoices/{id}
         * @secure
         */
        invoicesDetail: (id: number, query?: {
            returnEntries?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<InvoiceResponse, void>>;
        /**
         * @description Adds an invoice to the system.
         *
         * @tags invoices
         * @name Update
         * @request PATCH:/invoices/{id}
         * @secure
         */
        update: (id: number, invoice: UpdateInvoiceRequest, params?: RequestParams) => Promise<HttpResponse<BaseInvoiceResponse, void>>;
        /**
         * @description Deletes an invoice.
         *
         * @tags invoices
         * @name Delete
         * @request DELETE:/invoices/{id}
         * @secure
         */
        delete: (id: number, params?: RequestParams) => Promise<HttpResponse<BaseInvoiceResponse, void>>;
    };
    payoutrequests: {
        /**
         * @description Returns all payout requests given the filter parameters
         *
         * @tags payoutRequests
         * @name GetAll
         * @request GET:/payoutrequests
         * @secure
         */
        getAll: (query?: {
            requestedById?: string;
            approvedById?: string;
            fromDate?: string;
            tillDate?: string;
            status?: string;
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedBasePayoutRequestResponse, void>>;
        /**
         * @description Create a new payout request
         *
         * @tags payoutRequests
         * @name Create
         * @request POST:/payoutrequests
         * @secure
         */
        create: (payoutRequest: PayoutRequestRequest, params?: RequestParams) => Promise<HttpResponse<PayoutRequestResponse, void>>;
        /**
         * @description Get a single payout request
         *
         * @tags payoutRequests
         * @name Get
         * @request GET:/payoutrequests/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<PayoutRequestResponse, void>>;
        /**
         * @description Create a new status for a payout request
         *
         * @tags payoutRequests
         * @name SetStatus
         * @request POST:/payoutrequests/{id}/status
         * @secure
         */
        setStatus: (id: number, state: PayoutRequestStatusRequest, params?: RequestParams) => Promise<HttpResponse<PayoutRequestResponse, void>>;
    };
    pointsofsale: {
        /**
         * @description Create a new Point of Sale.
         *
         * @tags pointofsale
         * @name Create
         * @request POST:/pointsofsale
         * @secure
         */
        create: (pointofsale: CreatePointOfSaleRequest, params?: RequestParams) => Promise<HttpResponse<UpdatedPointOfSaleResponse, void>>;
        /**
         * @description Returns all existing Point of Sales
         *
         * @tags pointofsale
         * @name GetAll
         * @request GET:/pointsofsale
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedPointOfSaleResponse, void>>;
        /**
         * @description Returns the requested Point of Sale
         *
         * @tags pointofsale
         * @name Get
         * @request GET:/pointsofsale/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<PointOfSaleWithContainersResponse, void>>;
        /**
         * @description Update an existing Point of Sale.
         *
         * @tags pointofsale
         * @name Update
         * @request PATCH:/pointsofsale/{id}
         * @secure
         */
        update: (id: number, pointofsale: UpdatePointOfSaleRequest, params?: RequestParams) => Promise<HttpResponse<UpdatedPointOfSaleResponse, void>>;
        /**
         * @description Returns the containers of the requested Point of Sale, empty list if POS does not exist
         *
         * @tags pointofsale
         * @name GetContainers
         * @request GET:/pointsofsale/{id}/containers
         * @secure
         */
        getContainers: (id: string, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedContainerResponse, void>>;
        /**
         * @description Returns the products of the requested Point of Sale, empty list if POS does not exist
         *
         * @tags pointofsale
         * @name GetProducts
         * @request GET:/pointsofsale/{id}/products
         * @secure
         */
        getProducts: (id: string, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedProductResponse, void>>;
        /**
         * @description Returns a single Points of Sale update
         *
         * @tags pointofsale
         * @name GetUpdate
         * @request GET:/pointsofsale/{id}/update
         * @secure
         */
        getUpdate: (id: number, params?: RequestParams) => Promise<HttpResponse<UpdatedPointOfSaleWithContainersResponse, void>>;
        /**
         * @description Returns all updated Points of Sale
         *
         * @tags pointofsale
         * @name GetUpdated
         * @request GET:/pointsofsale/updated
         * @secure
         */
        getUpdated: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedUpdatedPointOfSaleResponse, void>>;
        /**
         * @description Approve a Point of Sale update.
         *
         * @tags pointofsale
         * @name ApproveCreate
         * @request POST:/pointsofsale/{id}/approve
         * @secure
         */
        approveCreate: (id: number, params?: RequestParams) => Promise<HttpResponse<PointOfSaleResponse, void>>;
        /**
         * @description Returns a Point of Sale transactions
         *
         * @tags pointofsale
         * @name GetTransactions
         * @request GET:/pointsofsale/{id}/transactions
         * @secure
         */
        getTransactions: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedBaseTransactionResponse, void>>;
    };
    productcategories: {
        /**
         * @description Returns all existing productcategories
         *
         * @tags productCategories
         * @name GetAll
         * @request GET:/productcategories
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedProductCategoryResponse, void>>;
        /**
         * @description Post a new productCategory.
         *
         * @tags productCategories
         * @name Create
         * @request POST:/productcategories
         * @secure
         */
        create: (productCategory: ProductCategoryRequest, params?: RequestParams) => Promise<HttpResponse<ProductCategoryResponse, void>>;
        /**
         * @description Returns the requested productcategory
         *
         * @tags productCategories
         * @name Get
         * @request GET:/productcategories/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<ProductCategoryResponse, void>>;
        /**
         * @description Update an existing productcategory.
         *
         * @tags productCategories
         * @name Update
         * @request PATCH:/productcategories/{id}
         * @secure
         */
        update: (id: number, productCategory: ProductCategoryRequest, params?: RequestParams) => Promise<HttpResponse<ProductCategoryResponse, void>>;
    };
    products: {
        /**
         * @description Returns all existing products
         *
         * @tags products
         * @name GetAll
         * @request GET:/products
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedProductResponse, void>>;
        /**
         * @description Create a new product.
         *
         * @tags products
         * @name Create
         * @request POST:/products
         * @secure
         */
        create: (product: CreateProductRequest, params?: RequestParams) => Promise<HttpResponse<UpdatedProductResponse, void>>;
        /**
         * @description Update an existing product.
         *
         * @tags products
         * @name Update
         * @request PATCH:/products/{id}
         * @secure
         */
        update: (id: number, product: UpdateProductRequest, params?: RequestParams) => Promise<HttpResponse<ProductResponse, void>>;
        /**
         * @description Returns the requested product
         *
         * @tags products
         * @name Get
         * @request GET:/products/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<ProductResponse, void>>;
        /**
         * @description Approve a product update.
         *
         * @tags products
         * @name ApproveCreate
         * @request POST:/products/{id}/approve
         * @secure
         */
        approveCreate: (id: number, params?: RequestParams) => Promise<HttpResponse<ProductResponse, void>>;
        /**
         * @description Returns all updated products
         *
         * @tags products
         * @name GetUpdated
         * @request GET:/products/updated
         * @secure
         */
        getUpdated: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedProductResponse, void>>;
        /**
         * @description Returns the requested updated product
         *
         * @tags products
         * @name GetUpdate
         * @request GET:/products/{id}/update
         * @secure
         */
        getUpdate: (id: number, params?: RequestParams) => Promise<HttpResponse<ProductResponse, void>>;
        /**
         * @description Upload a new image for a product
         *
         * @tags products
         * @name UpdateImage
         * @request POST:/products/{id}/image
         * @secure
         */
        updateImage: (id: number, data: {
            file?: File;
        }, params?: RequestParams) => Promise<HttpResponse<void, void>>;
    };
    rbac: {
        /**
         * @description Returns all existing roles
         *
         * @tags rbac
         * @name GetAll
         * @request GET:/rbac/roles
         * @secure
         */
        getAll: (params?: RequestParams) => Promise<HttpResponse<RoleResponse[], void>>;
    };
    ping: {
        /**
         * @description Ping the backend to check whether everything is working correctly
         *
         * @tags root
         * @name Ping
         * @request GET:/ping
         */
        ping: (params?: RequestParams) => Promise<HttpResponse<void, void>>;
    };
    files: {
        /**
         * @description Upload a file with the given name.
         *
         * @tags files
         * @name Create
         * @request POST:/files
         * @secure
         */
        create: (data: {
            file?: File;
            name?: string;
        }, params?: RequestParams) => Promise<HttpResponse<SimpleFileResponse, void>>;
        /**
         * @description Download a file with the given id.
         *
         * @tags files
         * @name Get
         * @request GET:/files/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Delete the file with the given id.
         *
         * @tags files
         * @name Delete
         * @request DELETE:/files/{id}
         * @secure
         */
        delete: (id: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
    };
    stripe: {
        /**
         * @description Start the stripe deposit flow
         *
         * @tags Stripe
         * @name Deposit
         * @request POST:/stripe/deposit
         * @secure
         */
        deposit: (stripe: StripeRequest, params?: RequestParams) => Promise<HttpResponse<StripePaymentIntentResponse, void>>;
        /**
         * @description Webhook for Stripe event updates
         *
         * @tags Stripe
         * @name Webhook
         * @request POST:/stripe/webhook
         */
        webhook: (params?: RequestParams) => Promise<HttpResponse<void, void>>;
    };
    test: {
        /**
         * @description Get a beautiful Hello World email to your inbox
         *
         * @tags test
         * @name Helloworld
         * @request POST:/test/helloworld
         * @secure
         */
        helloworld: (params?: RequestParams) => Promise<HttpResponse<void, void>>;
    };
    transactions: {
        /**
         * @description Get a list of all transactions
         *
         * @tags transactions
         * @name GetAll
         * @request GET:/transactions
         * @secure
         */
        getAll: (query?: {
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
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedBaseTransactionResponse, any>>;
        /**
         * @description Creates a new transaction
         *
         * @tags transactions
         * @name Create
         * @request POST:/transactions
         * @secure
         */
        create: (transaction: TransactionRequest, params?: RequestParams) => Promise<HttpResponse<TransactionResponse, void>>;
        /**
         * @description Get a single transaction
         *
         * @tags transactions
         * @name Get
         * @request GET:/transactions/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<TransactionResponse, void>>;
        /**
         * @description Updates the requested transaction
         *
         * @tags transactions
         * @name Update
         * @request PATCH:/transactions/{id}
         * @secure
         */
        update: (id: number, transaction: TransactionRequest, params?: RequestParams) => Promise<HttpResponse<TransactionResponse, void>>;
        /**
         * @description Deletes a transaction
         *
         * @tags transactions
         * @name Delete
         * @request DELETE:/transactions/{id}
         * @secure
         */
        delete: (id: number, params?: RequestParams) => Promise<HttpResponse<TransactionResponse, void>>;
    };
    transfers: {
        /**
         * @description Returns all existing transfers
         *
         * @tags transfers
         * @name GetAll
         * @request GET:/transfers
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<TransferResponse[], void>>;
        /**
         * @description Post a new transfer.
         *
         * @tags transfers
         * @name Create
         * @request POST:/transfers
         * @secure
         */
        create: (transfer: TransferRequest, params?: RequestParams) => Promise<HttpResponse<TransferResponse, void>>;
        /**
         * @description Returns the requested transfer
         *
         * @tags transfers
         * @name Get
         * @request GET:/transfers/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<TransferResponse, void>>;
    };
    users: {
        /**
         * @description Get a list of all users
         *
         * @tags users
         * @name GetAll
         * @request GET:/users
         * @secure
         */
        getAll: (query?: {
            take?: number;
            skip?: number;
            firstName?: string;
            lastName?: string;
            active?: boolean;
            ofAge?: boolean;
            id?: number;
            type?: string;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedUserResponse, any>>;
        /**
         * @description Create a new user
         *
         * @tags users
         * @name Create
         * @request POST:/users
         * @secure
         */
        create: (user: CreateUserRequest, params?: RequestParams) => Promise<HttpResponse<User, void>>;
        /**
         * @description Get all users of user type
         *
         * @tags users
         * @name GetType
         * @request GET:/users/usertype/{userType}
         * @secure
         */
        getType: (userType: string, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedUserResponse, void>>;
        /**
         * @description Put an users pin code
         *
         * @tags users
         * @name UpdatePin
         * @request PUT:/users/{id}/authenticator/pin
         * @secure
         */
        updatePin: (id: number, update: UpdatePinRequest, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Put a user's local password
         *
         * @tags users
         * @name UpdateLocal
         * @request PUT:/users/{id}/authenticator/local
         * @secure
         */
        updateLocal: (id: number, update: UpdateLocalRequest, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Get an organs members
         *
         * @tags users
         * @name GetMembers
         * @request GET:/users/{id}/members
         * @secure
         */
        getMembers: (id: number, params?: RequestParams) => Promise<HttpResponse<PaginatedUserResponse, void>>;
        /**
         * @description Get an individual user
         *
         * @tags users
         * @name Get
         * @request GET:/users/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<User, void>>;
        /**
         * @description Update a user
         *
         * @tags users
         * @name Update
         * @request PATCH:/users/{id}
         * @secure
         */
        update: (id: string, user: UpdateUserRequest, params?: RequestParams) => Promise<HttpResponse<UpdateUserRequest, void>>;
        /**
         * @description Delete a single user
         *
         * @tags users
         * @name Delete
         * @request DELETE:/users/{id}
         * @secure
         */
        delete: (id: number, params?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Accept the Terms of Service if you have not accepted it yet
         *
         * @tags users
         * @name AcceptTos
         * @request POST:/users/acceptTos
         * @secure
         */
        acceptTos: (params: AcceptTosRequest, requestParams?: RequestParams) => Promise<HttpResponse<void, void>>;
        /**
         * @description Get an user's products
         *
         * @tags users
         * @name GetProducts
         * @request GET:/users/{id}/products
         * @secure
         */
        getProducts: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedProductResponse, any>>;
        /**
         * @description Get an user's updated products
         *
         * @tags users
         * @name GetUpdatedProducts
         * @request GET:/users/{id}/products/updated
         * @secure
         */
        getUpdatedProducts: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedProductResponse, any>>;
        /**
         * @description Returns the user's containers
         *
         * @tags users
         * @name GetContainers
         * @request GET:/users/{id}/containers
         * @secure
         */
        getContainers: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedContainerResponse, void>>;
        /**
         * @description Returns the user's updated containers
         *
         * @tags users
         * @name GetUpdatedContainers
         * @request GET:/users/{id}/containers/updated
         * @secure
         */
        getUpdatedContainers: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedContainerResponse, void>>;
        /**
         * @description Returns the user's Points of Sale
         *
         * @tags users
         * @name GetPointsOfSale
         * @request GET:/users/{id}/pointsofsale
         * @secure
         */
        getPointsOfSale: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedPointOfSaleResponse, void>>;
        /**
         * @description Returns the user's updated Points of Sale
         *
         * @tags users
         * @name GetUpdatedPointsOfSale
         * @request GET:/users/{id}/pointsofsale/updated
         * @secure
         */
        getUpdatedPointsOfSale: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedUpdatedPointOfSaleResponse, void>>;
        /**
         * @description Get an user's transactions (from, to or created)
         *
         * @tags users
         * @name GetTransactions
         * @request GET:/users/{id}/transactions
         * @secure
         */
        getTransactions: (id: number, query?: {
            fromId?: number;
            createdById?: number;
            toId?: number;
            productId?: number;
            productRevision?: number;
            fromDate?: string;
            tillDate?: string;
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedBaseTransactionResponse, any>>;
        /**
         * @description Get an user's transfers
         *
         * @tags users
         * @name GetTransfers
         * @request GET:/users/{id}/transfers
         * @secure
         */
        getTransfers: (id: number, query?: {
            take?: number;
            skip?: number;
            fromId?: number;
            toId?: number;
            id?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedTransferResponse, any>>;
        /**
         * @description Authenticate as another user
         *
         * @tags users
         * @name AuthenticateAs
         * @request POST:/users/{id}/authenticate
         * @secure
         */
        authenticateAs: (id: number, params?: RequestParams) => Promise<HttpResponse<AuthenticationResponse, void>>;
        /**
         * @description Get all users that the user can authenticate as
         *
         * @tags users
         * @name GetAuthentications
         * @request GET:/users/{id}/authenticate
         * @secure
         */
        getAuthentications: (id: number, params?: RequestParams) => Promise<HttpResponse<UserResponse[], void>>;
        /**
         * @description Get all roles assigned to the user.
         *
         * @tags users
         * @name GetRoles
         * @request GET:/users/{id}/roles
         * @secure
         */
        getRoles: (id: number, params?: RequestParams) => Promise<HttpResponse<RoleResponse[], void>>;
        /**
         * @description Get all financial mutations of a user.
         *
         * @tags users
         * @name GetFinancialMutations
         * @request GET:/users/{id}/financialmutations
         * @secure
         */
        getFinancialMutations: (id: number, query?: {
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedFinancialMutationResponse, void>>;
        /**
         * @description Get all deposits of a user that are still being processed by Stripe
         *
         * @tags users
         * @name GetPendingDeposits
         * @request GET:/users/{id}/deposits
         * @secure
         */
        getPendingDeposits: (id: number, params?: RequestParams) => Promise<HttpResponse<RoleResponse[], void>>;
    };
    vatgroups: {
        /**
         * @description Get a list of all VAT groups
         *
         * @tags vatGroups
         * @name GetAll
         * @request GET:/vatgroups
         * @secure
         */
        getAll: (query?: {
            vatGroupId?: number;
            name?: string;
            percentage?: number;
            deleted?: boolean;
            take?: number;
            skip?: number;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedVatGroupResponse, any>>;
        /**
         * @description Create a new VAT group
         *
         * @tags vatGroups
         * @name Create
         * @request POST:/vatgroups
         * @secure
         */
        create: (vatGroup: VatGroupRequest, params?: RequestParams) => Promise<HttpResponse<VatGroup, void>>;
        /**
         * @description Returns the requested VAT group
         *
         * @tags vatGroups
         * @name Get
         * @request GET:/vatgroups/{id}
         * @secure
         */
        get: (id: number, params?: RequestParams) => Promise<HttpResponse<VatGroup, void>>;
        /**
         * @description Create a new VAT group
         *
         * @tags vatGroups
         * @name Update
         * @request PATCH:/vatgroups/{id}
         * @secure
         */
        update: (id: number, vatGroup: UpdateVatGroupRequest, params?: RequestParams) => Promise<HttpResponse<VatGroup, void>>;
        /**
         * @description Get the VAT collections needed for VAT declarations
         *
         * @tags vatGroups
         * @name GetDeclaration
         * @request GET:/vatgroups/declaration
         * @secure
         */
        getDeclaration: (query: {
            year: number;
            period: string;
        }, params?: RequestParams) => Promise<HttpResponse<PaginatedVatGroupResponse, any>>;
    };
}
export {};
