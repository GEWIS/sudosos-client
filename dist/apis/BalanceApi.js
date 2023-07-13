"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * sudosos-back-end
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancesAllGetOrderDirectionEnum = exports.BalancesAllGetOrderByEnum = exports.BalanceApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class BalanceApi extends runtime.BaseAPI {
    /**
     *  Get balance of the current user
     */
    balancesAllGetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.date !== undefined) {
                queryParameters['date'] = requestParameters.date;
            }
            if (requestParameters.minBalance !== undefined) {
                queryParameters['minBalance'] = requestParameters.minBalance;
            }
            if (requestParameters.maxBalance !== undefined) {
                queryParameters['maxBalance'] = requestParameters.maxBalance;
            }
            if (requestParameters.orderBy !== undefined) {
                queryParameters['orderBy'] = requestParameters.orderBy;
            }
            if (requestParameters.orderDirection !== undefined) {
                queryParameters['orderDirection'] = requestParameters.orderDirection;
            }
            if (requestParameters.take !== undefined) {
                queryParameters['take'] = requestParameters.take;
            }
            if (requestParameters.skip !== undefined) {
                queryParameters['skip'] = requestParameters.skip;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/balances/all`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.BalanceResponseFromJSON));
        });
    }
    /**
     *  Get balance of the current user
     */
    balancesAllGet(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.balancesAllGetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Get balance of the current user
     */
    getBalanceRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/balances`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BalanceResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Get balance of the current user
     */
    getBalance(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBalanceRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Retrieves the requested balance
     */
    getBalanceIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getBalanceId.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/balances/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BalanceResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Retrieves the requested balance
     */
    getBalanceId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBalanceIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.BalanceApi = BalanceApi;
/**
 * @export
 */
exports.BalancesAllGetOrderByEnum = {
    Id: 'id',
    Amount: 'amount'
};
/**
 * @export
 */
exports.BalancesAllGetOrderDirectionEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
};
//# sourceMappingURL=BalanceApi.js.map