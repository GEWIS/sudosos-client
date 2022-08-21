"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ------------------------------------------------------------------
 * # THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-NEXTGEN     #
 * # AUTHORS: acacode & grandsilence                                #
 * # https://github.com/grandsilence/swagger-typescript-api-nextgen #
 * ------------------------------------------------------------------
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.abortControllers = new Map();
        this.customFetch = (...fetchParams) => fetch(...fetchParams);
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(key, property instanceof Blob
                    ? property
                    : typeof property === "object" && property !== null
                        ? JSON.stringify(property)
                        : `${property}`);
                return formData;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
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
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = (_a) => __awaiter(this, void 0, void 0, function* () {
            var { body, secure, path, type, query, format, baseUrl, cancelToken } = _a, params = __rest(_a, ["body", "secure", "path", "type", "query", "format", "baseUrl", "cancelToken"]);
            const secureParams = ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
                this.securityWorker &&
                (yield this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            const responseFormat = format || requestParams.format;
            return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal, body: typeof body === "undefined" || body === null ? null : payloadFormatter(body) })).then((response) => __awaiter(this, void 0, void 0, function* () {
                const r = response;
                r.data = null;
                r.error = null;
                const data = !responseFormat
                    ? r
                    : yield response[responseFormat]()
                        .then((data) => {
                        if (r.ok) {
                            r.data = data;
                        }
                        else {
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
                if (!response.ok)
                    throw data;
                return data;
            }));
        });
        Object.assign(this, apiConfig);
    }
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join("&");
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.baseApiParams), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, (this.baseApiParams.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
}
exports.HttpClient = HttpClient;
/**
 * @title sudosos-back-end
 * @version 0.1.0
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.authentication = {
            /**
             * @description PIN login and hand out token
             *
             * @tags authenticate
             * @name PinAuthentication
             * @request POST:/authentication/pin
             */
            pinAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/pin`, method: "POST", body: req, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description LDAP login and hand out token If user has never signed in before this also creates an account.
             *
             * @tags authenticate
             * @name LdapAuthentication
             * @request POST:/authentication/LDAP
             */
            ldapAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/LDAP`, method: "POST", body: req, format: "json" }, params)),
            /**
             * @description Local login and hand out token
             *
             * @tags authenticate
             * @name LocalAuthentication
             * @request POST:/authentication/local
             */
            localAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/local`, method: "POST", body: req, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Reset local authentication using the provided token
             *
             * @tags authenticate
             * @name ResetLocalWithToken
             * @request PUT:/authentication/local
             */
            resetLocalWithToken: (req, params = {}) => this.request(Object.assign({ path: `/authentication/local`, method: "PUT", body: req, type: ContentType.Json }, params)),
            /**
             * @description Creates a reset token for the local authentication
             *
             * @tags authenticate
             * @name ResetLocal
             * @request POST:/authentication/local/reset
             */
            resetLocal: (req, params = {}) => this.request(Object.assign({ path: `/authentication/local/reset`, method: "POST", body: req, type: ContentType.Json }, params)),
            /**
             * @description EAN login and hand out token
             *
             * @tags authenticate
             * @name EanAuthentication
             * @request POST:/authentication/ean
             */
            eanAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/ean`, method: "POST", body: req, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Mock login and hand out token.
             *
             * @tags authenticate
             * @name MockAuthentication
             * @request POST:/authentication/mock
             */
            mockAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/mock`, method: "POST", body: req, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Get a new JWT token, lesser if the existing token is also lesser
             *
             * @tags authenticate
             * @name RefreshToken
             * @request GET:/authentication/refreshToken
             * @secure
             */
            refreshToken: (params = {}) => this.request(Object.assign({ path: `/authentication/refreshToken`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description GEWIS login verification based on gewisweb JWT tokens. This method verifies the validity of the gewisweb JWT token, and returns a SudoSOS token if the GEWIS token is valid.
             *
             * @tags authenticate
             * @name GewisWebAuthentication
             * @request POST:/authentication/gewisweb
             */
            gewisWebAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/gewisweb`, method: "POST", body: req, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description LDAP login and hand out token If user has never signed in before this also creates an GEWIS account.
             *
             * @tags authenticate
             * @name GewisLdapAuthentication
             * @request POST:/authentication/GEWIS/LDAP
             */
            gewisLdapAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/GEWIS/LDAP`, method: "POST", body: req, format: "json" }, params)),
            /**
             * @description PIN login and hand out token.
             *
             * @tags authenticate
             * @name GewisPinAuthentication
             * @request POST:/authentication/GEWIS/pin
             */
            gewisPinAuthentication: (req, params = {}) => this.request(Object.assign({ path: `/authentication/GEWIS/pin`, method: "POST", body: req, type: ContentType.Json, format: "json" }, params)),
        };
        this.balances = {
            /**
             * @description Get balance of the current user
             *
             * @tags balance
             * @name GetBalance
             * @request GET:/balances
             * @secure
             */
            getBalance: (params = {}) => this.request(Object.assign({ path: `/balances`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Retrieves the requested balance
             *
             * @tags balance
             * @name GetBalanceId
             * @request GET:/balances/{id}
             * @secure
             */
            getBalanceId: (id, params = {}) => this.request(Object.assign({ path: `/balances/${id}`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.banners = {
            /**
             * @description Saves a banner to the database
             *
             * @tags banners
             * @name Create
             * @request POST:/banners
             * @secure
             */
            create: (banner, params = {}) => this.request(Object.assign({ path: `/banners`, method: "POST", body: banner, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns all existing banners
             *
             * @tags banners
             * @name GetAll
             * @request GET:/banners
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/banners`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Uploads a banner image to the given banner
             *
             * @tags banners
             * @name UpdateImage
             * @request POST:/banners/{id}/image
             * @secure
             */
            updateImage: (id, data, params = {}) => this.request(Object.assign({ path: `/banners/${id}/image`, method: "POST", body: data, secure: true, type: ContentType.FormData }, params)),
            /**
             * @description Returns the requested banner
             *
             * @tags banners
             * @name Get
             * @request GET:/banners/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/banners/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Updates the requested banner
             *
             * @tags banners
             * @name Update
             * @request PATCH:/banners/{id}
             * @secure
             */
            update: (id, banner, params = {}) => this.request(Object.assign({ path: `/banners/${id}`, method: "PATCH", body: banner, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Deletes the requested banner
             *
             * @tags banners
             * @name Delete
             * @request DELETE:/banners/{id}
             * @secure
             */
            delete: (id, params = {}) => this.request(Object.assign({ path: `/banners/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * @description Returns all active banners
             *
             * @tags banners
             * @name GetActive
             * @request GET:/banners/active
             * @secure
             */
            getActive: (query, params = {}) => this.request(Object.assign({ path: `/banners/active`, method: "GET", query: query, secure: true, format: "json" }, params)),
        };
        this.borrelkaartgroups = {
            /**
             * @description Returns all existing borrelkaart groups
             *
             * @tags borrelkaartgroups
             * @name GetAll
             * @request GET:/borrelkaartgroups
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/borrelkaartgroups`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Creates a new borrelkaart group
             *
             * @tags borrelkaartgroups
             * @name Create
             * @request POST:/borrelkaartgroups
             * @secure
             */
            create: (borrelkaartgroup, params = {}) => this.request(Object.assign({ path: `/borrelkaartgroups`, method: "POST", body: borrelkaartgroup, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns the requested borrelkaart group
             *
             * @tags borrelkaartgroups
             * @name Get
             * @request GET:/borrelkaartgroups/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/borrelkaartgroups/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Updates the requested borrelkaart group
             *
             * @tags borrelkaartgroups
             * @name Update
             * @request PATCH:/borrelkaartgroups/{id}
             * @secure
             */
            update: (id, borrelkaartgroup, params = {}) => this.request(Object.assign({ path: `/borrelkaartgroups/${id}`, method: "PATCH", body: borrelkaartgroup, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Deletes the requested borrelkaart group
             *
             * @tags borrelkaartgroups
             * @name Delete
             * @request DELETE:/borrelkaartgroups/{id}
             * @secure
             */
            delete: (id, params = {}) => this.request(Object.assign({ path: `/borrelkaartgroups/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
        };
        this.containers = {
            /**
             * @description Returns all existing containers
             *
             * @tags containers
             * @name GetAll
             * @request GET:/containers
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/containers`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a new container.
             *
             * @tags containers
             * @name Create
             * @request POST:/containers
             * @secure
             */
            create: (container, params = {}) => this.request(Object.assign({ path: `/containers`, method: "POST", body: container, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns the requested container
             *
             * @tags containers
             * @name Get
             * @request GET:/containers/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/containers/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Update an existing container.
             *
             * @tags containers
             * @name Update
             * @request PATCH:/containers/{id}
             * @secure
             */
            update: (id, container, params = {}) => this.request(Object.assign({ path: `/containers/${id}`, method: "PATCH", body: container, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns all the products in the container
             *
             * @tags containers
             * @name GetProducts
             * @request GET:/containers/{id}/products
             * @secure
             */
            getProducts: (id, query, params = {}) => this.request(Object.assign({ path: `/containers/${id}/products`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Approve a container update.
             *
             * @tags containers
             * @name ApproveCreate
             * @request POST:/containers/{id}/approve
             * @secure
             */
            approveCreate: (id, params = {}) => this.request(Object.assign({ path: `/containers/${id}/approve`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * @description Returns all public container
             *
             * @tags containers
             * @name GetPublic
             * @request GET:/containers/public
             * @secure
             */
            getPublic: (query, params = {}) => this.request(Object.assign({ path: `/containers/public`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns all updated containers
             *
             * @tags containers
             * @name GetUpdated
             * @request GET:/containers/updated
             * @secure
             */
            getUpdated: (query, params = {}) => this.request(Object.assign({ path: `/containers/updated`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the requested updated container
             *
             * @tags containers
             * @name GetUpdate
             * @request GET:/containers/{id}/update
             * @secure
             */
            getUpdate: (id, params = {}) => this.request(Object.assign({ path: `/containers/${id}/update`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.invoices = {
            /**
             * @description Returns all invoices in the system.
             *
             * @tags invoices
             * @name GetAll
             * @request GET:/invoices
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/invoices`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Adds an invoice to the system.
             *
             * @tags invoices
             * @name Create
             * @request POST:/invoices
             * @secure
             */
            create: (invoice, params = {}) => this.request(Object.assign({ path: `/invoices`, method: "POST", body: invoice, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns a single invoice in the system.
             *
             * @tags invoices
             * @name InvoicesDetail
             * @request GET:/invoices/{id}
             * @secure
             */
            invoicesDetail: (id, query, params = {}) => this.request(Object.assign({ path: `/invoices/${id}`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Adds an invoice to the system.
             *
             * @tags invoices
             * @name Update
             * @request PATCH:/invoices/{id}
             * @secure
             */
            update: (id, invoice, params = {}) => this.request(Object.assign({ path: `/invoices/${id}`, method: "PATCH", body: invoice, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Deletes an invoice.
             *
             * @tags invoices
             * @name Delete
             * @request DELETE:/invoices/{id}
             * @secure
             */
            delete: (id, params = {}) => this.request(Object.assign({ path: `/invoices/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
        };
        this.payoutrequests = {
            /**
             * @description Returns all payout requests given the filter parameters
             *
             * @tags payoutRequests
             * @name GetAll
             * @request GET:/payoutrequests
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/payoutrequests`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a new payout request
             *
             * @tags payoutRequests
             * @name Create
             * @request POST:/payoutrequests
             * @secure
             */
            create: (payoutRequest, params = {}) => this.request(Object.assign({ path: `/payoutrequests`, method: "POST", body: payoutRequest, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Get a single payout request
             *
             * @tags payoutRequests
             * @name Get
             * @request GET:/payoutrequests/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/payoutrequests/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Create a new status for a payout request
             *
             * @tags payoutRequests
             * @name SetStatus
             * @request POST:/payoutrequests/{id}/status
             * @secure
             */
            setStatus: (id, state, params = {}) => this.request(Object.assign({ path: `/payoutrequests/${id}/status`, method: "POST", body: state, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.pointsofsale = {
            /**
             * @description Create a new Point of Sale.
             *
             * @tags pointofsale
             * @name Create
             * @request POST:/pointsofsale
             * @secure
             */
            create: (pointofsale, params = {}) => this.request(Object.assign({ path: `/pointsofsale`, method: "POST", body: pointofsale, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns all existing Point of Sales
             *
             * @tags pointofsale
             * @name GetAll
             * @request GET:/pointsofsale
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/pointsofsale`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the requested Point of Sale
             *
             * @tags pointofsale
             * @name Get
             * @request GET:/pointsofsale/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/pointsofsale/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Update an existing Point of Sale.
             *
             * @tags pointofsale
             * @name Update
             * @request PATCH:/pointsofsale/{id}
             * @secure
             */
            update: (id, pointofsale, params = {}) => this.request(Object.assign({ path: `/pointsofsale/${id}`, method: "PATCH", body: pointofsale, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns the containers of the requested Point of Sale, empty list if POS does not exist
             *
             * @tags pointofsale
             * @name GetContainers
             * @request GET:/pointsofsale/{id}/containers
             * @secure
             */
            getContainers: (id, query, params = {}) => this.request(Object.assign({ path: `/pointsofsale/${id}/containers`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the products of the requested Point of Sale, empty list if POS does not exist
             *
             * @tags pointofsale
             * @name GetProducts
             * @request GET:/pointsofsale/{id}/products
             * @secure
             */
            getProducts: (id, query, params = {}) => this.request(Object.assign({ path: `/pointsofsale/${id}/products`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns a single Points of Sale update
             *
             * @tags pointofsale
             * @name GetUpdate
             * @request GET:/pointsofsale/{id}/update
             * @secure
             */
            getUpdate: (id, params = {}) => this.request(Object.assign({ path: `/pointsofsale/${id}/update`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Returns all updated Points of Sale
             *
             * @tags pointofsale
             * @name GetUpdated
             * @request GET:/pointsofsale/updated
             * @secure
             */
            getUpdated: (query, params = {}) => this.request(Object.assign({ path: `/pointsofsale/updated`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Approve a Point of Sale update.
             *
             * @tags pointofsale
             * @name ApproveCreate
             * @request POST:/pointsofsale/{id}/approve
             * @secure
             */
            approveCreate: (id, params = {}) => this.request(Object.assign({ path: `/pointsofsale/${id}/approve`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * @description Returns a Point of Sale transactions
             *
             * @tags pointofsale
             * @name GetTransactions
             * @request GET:/pointsofsale/{id}/transactions
             * @secure
             */
            getTransactions: (id, query, params = {}) => this.request(Object.assign({ path: `/pointsofsale/${id}/transactions`, method: "GET", query: query, secure: true, format: "json" }, params)),
        };
        this.productcategories = {
            /**
             * @description Returns all existing productcategories
             *
             * @tags productCategories
             * @name GetAll
             * @request GET:/productcategories
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/productcategories`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Post a new productCategory.
             *
             * @tags productCategories
             * @name Create
             * @request POST:/productcategories
             * @secure
             */
            create: (productCategory, params = {}) => this.request(Object.assign({ path: `/productcategories`, method: "POST", body: productCategory, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns the requested productcategory
             *
             * @tags productCategories
             * @name Get
             * @request GET:/productcategories/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/productcategories/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Update an existing productcategory.
             *
             * @tags productCategories
             * @name Update
             * @request PATCH:/productcategories/{id}
             * @secure
             */
            update: (id, productCategory, params = {}) => this.request(Object.assign({ path: `/productcategories/${id}`, method: "PATCH", body: productCategory, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.products = {
            /**
             * @description Returns all existing products
             *
             * @tags products
             * @name GetAll
             * @request GET:/products
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/products`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a new product.
             *
             * @tags products
             * @name Create
             * @request POST:/products
             * @secure
             */
            create: (product, params = {}) => this.request(Object.assign({ path: `/products`, method: "POST", body: product, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Update an existing product.
             *
             * @tags products
             * @name Update
             * @request PATCH:/products/{id}
             * @secure
             */
            update: (id, product, params = {}) => this.request(Object.assign({ path: `/products/${id}`, method: "PATCH", body: product, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns the requested product
             *
             * @tags products
             * @name Get
             * @request GET:/products/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/products/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Approve a product update.
             *
             * @tags products
             * @name ApproveCreate
             * @request POST:/products/{id}/approve
             * @secure
             */
            approveCreate: (id, params = {}) => this.request(Object.assign({ path: `/products/${id}/approve`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * @description Returns all updated products
             *
             * @tags products
             * @name GetUpdated
             * @request GET:/products/updated
             * @secure
             */
            getUpdated: (query, params = {}) => this.request(Object.assign({ path: `/products/updated`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the requested updated product
             *
             * @tags products
             * @name GetUpdate
             * @request GET:/products/{id}/update
             * @secure
             */
            getUpdate: (id, params = {}) => this.request(Object.assign({ path: `/products/${id}/update`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Upload a new image for a product
             *
             * @tags products
             * @name UpdateImage
             * @request POST:/products/{id}/image
             * @secure
             */
            updateImage: (id, data, params = {}) => this.request(Object.assign({ path: `/products/${id}/image`, method: "POST", body: data, secure: true, type: ContentType.FormData }, params)),
        };
        this.rbac = {
            /**
             * @description Returns all existing roles
             *
             * @tags rbac
             * @name GetAll
             * @request GET:/rbac/roles
             * @secure
             */
            getAll: (params = {}) => this.request(Object.assign({ path: `/rbac/roles`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.ping = {
            /**
             * @description Ping the backend to check whether everything is working correctly
             *
             * @tags root
             * @name Ping
             * @request GET:/ping
             */
            ping: (params = {}) => this.request(Object.assign({ path: `/ping`, method: "GET" }, params)),
        };
        this.files = {
            /**
             * @description Upload a file with the given name.
             *
             * @tags files
             * @name Create
             * @request POST:/files
             * @secure
             */
            create: (data, params = {}) => this.request(Object.assign({ path: `/files`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * @description Download a file with the given id.
             *
             * @tags files
             * @name Get
             * @request GET:/files/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/files/${id}`, method: "GET", secure: true }, params)),
            /**
             * @description Delete the file with the given id.
             *
             * @tags files
             * @name Delete
             * @request DELETE:/files/{id}
             * @secure
             */
            delete: (id, params = {}) => this.request(Object.assign({ path: `/files/${id}`, method: "DELETE", secure: true }, params)),
        };
        this.stripe = {
            /**
             * @description Start the stripe deposit flow
             *
             * @tags Stripe
             * @name Deposit
             * @request POST:/stripe/deposit
             * @secure
             */
            deposit: (stripe, params = {}) => this.request(Object.assign({ path: `/stripe/deposit`, method: "POST", body: stripe, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Webhook for Stripe event updates
             *
             * @tags Stripe
             * @name Webhook
             * @request POST:/stripe/webhook
             */
            webhook: (params = {}) => this.request(Object.assign({ path: `/stripe/webhook`, method: "POST" }, params)),
        };
        this.test = {
            /**
             * @description Get a beautiful Hello World email to your inbox
             *
             * @tags test
             * @name Helloworld
             * @request POST:/test/helloworld
             * @secure
             */
            helloworld: (params = {}) => this.request(Object.assign({ path: `/test/helloworld`, method: "POST", secure: true }, params)),
        };
        this.transactions = {
            /**
             * @description Get a list of all transactions
             *
             * @tags transactions
             * @name GetAll
             * @request GET:/transactions
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/transactions`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Creates a new transaction
             *
             * @tags transactions
             * @name Create
             * @request POST:/transactions
             * @secure
             */
            create: (transaction, params = {}) => this.request(Object.assign({ path: `/transactions`, method: "POST", body: transaction, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Get a single transaction
             *
             * @tags transactions
             * @name Get
             * @request GET:/transactions/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Updates the requested transaction
             *
             * @tags transactions
             * @name Update
             * @request PATCH:/transactions/{id}
             * @secure
             */
            update: (id, transaction, params = {}) => this.request(Object.assign({ path: `/transactions/${id}`, method: "PATCH", body: transaction, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Deletes a transaction
             *
             * @tags transactions
             * @name Delete
             * @request DELETE:/transactions/{id}
             * @secure
             */
            delete: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
        };
        this.transfers = {
            /**
             * @description Returns all existing transfers
             *
             * @tags transfers
             * @name GetAll
             * @request GET:/transfers
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/transfers`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Post a new transfer.
             *
             * @tags transfers
             * @name Create
             * @request POST:/transfers
             * @secure
             */
            create: (transfer, params = {}) => this.request(Object.assign({ path: `/transfers`, method: "POST", body: transfer, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns the requested transfer
             *
             * @tags transfers
             * @name Get
             * @request GET:/transfers/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/transfers/${id}`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.users = {
            /**
             * @description Get a list of all users
             *
             * @tags users
             * @name GetAll
             * @request GET:/users
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/users`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a new user
             *
             * @tags users
             * @name Create
             * @request POST:/users
             * @secure
             */
            create: (user, params = {}) => this.request(Object.assign({ path: `/users`, method: "POST", body: user, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Get all users of user type
             *
             * @tags users
             * @name GetType
             * @request GET:/users/usertype/{userType}
             * @secure
             */
            getType: (userType, query, params = {}) => this.request(Object.assign({ path: `/users/usertype/${userType}`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Put an users pin code
             *
             * @tags users
             * @name UpdatePin
             * @request PUT:/users/{id}/authenticator/pin
             * @secure
             */
            updatePin: (id, update, params = {}) => this.request(Object.assign({ path: `/users/${id}/authenticator/pin`, method: "PUT", body: update, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Put a user's local password
             *
             * @tags users
             * @name UpdateLocal
             * @request PUT:/users/{id}/authenticator/local
             * @secure
             */
            updateLocal: (id, update, params = {}) => this.request(Object.assign({ path: `/users/${id}/authenticator/local`, method: "PUT", body: update, secure: true, type: ContentType.Json }, params)),
            /**
             * @description Get an organs members
             *
             * @tags users
             * @name GetMembers
             * @request GET:/users/{id}/members
             * @secure
             */
            getMembers: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/members`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get an individual user
             *
             * @tags users
             * @name Get
             * @request GET:/users/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Update a user
             *
             * @tags users
             * @name Update
             * @request PATCH:/users/{id}
             * @secure
             */
            update: (id, user, params = {}) => this.request(Object.assign({ path: `/users/${id}`, method: "PATCH", body: user, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Delete a single user
             *
             * @tags users
             * @name Delete
             * @request DELETE:/users/{id}
             * @secure
             */
            delete: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * @description Accept the Terms of Service if you have not accepted it yet
             *
             * @tags users
             * @name AcceptTos
             * @request POST:/users/acceptTos
             * @secure
             */
            acceptTos: (params, requestParams = {}) => this.request(Object.assign({ path: `/users/acceptTos`, method: "POST", body: params, secure: true, type: ContentType.Json }, requestParams)),
            /**
             * @description Get an user's products
             *
             * @tags users
             * @name GetProducts
             * @request GET:/users/{id}/products
             * @secure
             */
            getProducts: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/products`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Get an user's updated products
             *
             * @tags users
             * @name GetUpdatedProducts
             * @request GET:/users/{id}/products/updated
             * @secure
             */
            getUpdatedProducts: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/products/updated`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the user's containers
             *
             * @tags users
             * @name GetContainers
             * @request GET:/users/{id}/containers
             * @secure
             */
            getContainers: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/containers`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the user's updated containers
             *
             * @tags users
             * @name GetUpdatedContainers
             * @request GET:/users/{id}/containers/updated
             * @secure
             */
            getUpdatedContainers: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/containers/updated`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the user's Points of Sale
             *
             * @tags users
             * @name GetPointsOfSale
             * @request GET:/users/{id}/pointsofsale
             * @secure
             */
            getPointsOfSale: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/pointsofsale`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Returns the user's updated Points of Sale
             *
             * @tags users
             * @name GetUpdatedPointsOfSale
             * @request GET:/users/{id}/pointsofsale/updated
             * @secure
             */
            getUpdatedPointsOfSale: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/pointsofsale/updated`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Get an user's transactions (from, to or created)
             *
             * @tags users
             * @name GetTransactions
             * @request GET:/users/{id}/transactions
             * @secure
             */
            getTransactions: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/transactions`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Get an user's transfers
             *
             * @tags users
             * @name GetTransfers
             * @request GET:/users/{id}/transfers
             * @secure
             */
            getTransfers: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/transfers`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Authenticate as another user
             *
             * @tags users
             * @name AuthenticateAs
             * @request POST:/users/{id}/authenticate
             * @secure
             */
            authenticateAs: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/authenticate`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * @description Get all users that the user can authenticate as
             *
             * @tags users
             * @name GetAuthentications
             * @request GET:/users/{id}/authenticate
             * @secure
             */
            getAuthentications: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/authenticate`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get all roles assigned to the user.
             *
             * @tags users
             * @name GetRoles
             * @request GET:/users/{id}/roles
             * @secure
             */
            getRoles: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/roles`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get all financial mutations of a user.
             *
             * @tags users
             * @name GetFinancialMutations
             * @request GET:/users/{id}/financialmutations
             * @secure
             */
            getFinancialMutations: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/financialmutations`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Get all deposits of a user that are still being processed by Stripe
             *
             * @tags users
             * @name GetPendingDeposits
             * @request GET:/users/{id}/deposits
             * @secure
             */
            getPendingDeposits: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/deposits`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.vatgroups = {
            /**
             * @description Get a list of all VAT groups
             *
             * @tags vatGroups
             * @name GetAll
             * @request GET:/vatgroups
             * @secure
             */
            getAll: (query, params = {}) => this.request(Object.assign({ path: `/vatgroups`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a new VAT group
             *
             * @tags vatGroups
             * @name Create
             * @request POST:/vatgroups
             * @secure
             */
            create: (vatGroup, params = {}) => this.request(Object.assign({ path: `/vatgroups`, method: "POST", body: vatGroup, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Returns the requested VAT group
             *
             * @tags vatGroups
             * @name Get
             * @request GET:/vatgroups/{id}
             * @secure
             */
            get: (id, params = {}) => this.request(Object.assign({ path: `/vatgroups/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Create a new VAT group
             *
             * @tags vatGroups
             * @name Update
             * @request PATCH:/vatgroups/{id}
             * @secure
             */
            update: (id, vatGroup, params = {}) => this.request(Object.assign({ path: `/vatgroups/${id}`, method: "PATCH", body: vatGroup, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Get the VAT collections needed for VAT declarations
             *
             * @tags vatGroups
             * @name GetDeclaration
             * @request GET:/vatgroups/declaration
             * @secure
             */
            getDeclaration: (query, params = {}) => this.request(Object.assign({ path: `/vatgroups/declaration`, method: "GET", query: query, secure: true, format: "json" }, params)),
        };
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map