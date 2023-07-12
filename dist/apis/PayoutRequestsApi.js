"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * sudosos-back-end
 * Back-end API and database management for SudoSOS.
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
exports.PayoutRequestsApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class PayoutRequestsApi extends runtime.BaseAPI {
    /**
     *  Create a new payout request
     */
    createPayoutRequestRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.payoutRequest === null || requestParameters.payoutRequest === undefined) {
                throw new runtime.RequiredError('payoutRequest', 'Required parameter requestParameters.payoutRequest was null or undefined when calling createPayoutRequest.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/payoutrequests`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.PayoutRequestRequestToJSON)(requestParameters.payoutRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PayoutRequestResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Create a new payout request
     */
    createPayoutRequest(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createPayoutRequestRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Returns all payout requests given the filter parameters
     */
    getAllPayoutRequestsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.requestedById !== undefined) {
                queryParameters['requestedById'] = requestParameters.requestedById;
            }
            if (requestParameters.approvedById !== undefined) {
                queryParameters['approvedById'] = requestParameters.approvedById;
            }
            if (requestParameters.fromDate !== undefined) {
                queryParameters['fromDate'] = requestParameters.fromDate;
            }
            if (requestParameters.tillDate !== undefined) {
                queryParameters['tillDate'] = requestParameters.tillDate;
            }
            if (requestParameters.status !== undefined) {
                queryParameters['status'] = requestParameters.status;
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
                path: `/payoutrequests`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PaginatedBasePayoutRequestResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Returns all payout requests given the filter parameters
     */
    getAllPayoutRequests(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAllPayoutRequestsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Get a single payout request
     */
    getSinglePayoutRequestRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getSinglePayoutRequest.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/payoutrequests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PayoutRequestResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Get a single payout request
     */
    getSinglePayoutRequest(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSinglePayoutRequestRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Create a new status for a payout request
     */
    setPayoutRequestStatusRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling setPayoutRequestStatus.');
            }
            if (requestParameters.state === null || requestParameters.state === undefined) {
                throw new runtime.RequiredError('state', 'Required parameter requestParameters.state was null or undefined when calling setPayoutRequestStatus.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/payoutrequests/{id}/status`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.PayoutRequestStatusRequestToJSON)(requestParameters.state),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PayoutRequestResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Create a new status for a payout request
     */
    setPayoutRequestStatus(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.setPayoutRequestStatusRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.PayoutRequestsApi = PayoutRequestsApi;
//# sourceMappingURL=PayoutRequestsApi.js.map