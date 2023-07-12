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
exports.VatGroupsApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class VatGroupsApi extends runtime.BaseAPI {
    /**
     *  Create a new VAT group
     */
    createVatGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.vatGroup === null || requestParameters.vatGroup === undefined) {
                throw new runtime.RequiredError('vatGroup', 'Required parameter requestParameters.vatGroup was null or undefined when calling createVatGroup.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/vatgroups`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.VatGroupRequestToJSON)(requestParameters.vatGroup),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.VatGroupFromJSON)(jsonValue));
        });
    }
    /**
     *  Create a new VAT group
     */
    createVatGroup(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createVatGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Get a list of all VAT groups
     */
    getAllVatGroupsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.vatGroupId !== undefined) {
                queryParameters['vatGroupId'] = requestParameters.vatGroupId;
            }
            if (requestParameters.name !== undefined) {
                queryParameters['name'] = requestParameters.name;
            }
            if (requestParameters.percentage !== undefined) {
                queryParameters['percentage'] = requestParameters.percentage;
            }
            if (requestParameters.deleted !== undefined) {
                queryParameters['deleted'] = requestParameters.deleted;
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
                path: `/vatgroups`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PaginatedVatGroupResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Get a list of all VAT groups
     */
    getAllVatGroups(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAllVatGroupsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Returns the requested VAT group
     */
    getSingleVatGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getSingleVatGroup.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/vatgroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.VatGroupFromJSON)(jsonValue));
        });
    }
    /**
     *  Returns the requested VAT group
     */
    getSingleVatGroup(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSingleVatGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Get the VAT collections needed for VAT declarations
     */
    getVatDeclarationAmountsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.year === null || requestParameters.year === undefined) {
                throw new runtime.RequiredError('year', 'Required parameter requestParameters.year was null or undefined when calling getVatDeclarationAmounts.');
            }
            if (requestParameters.period === null || requestParameters.period === undefined) {
                throw new runtime.RequiredError('period', 'Required parameter requestParameters.period was null or undefined when calling getVatDeclarationAmounts.');
            }
            const queryParameters = {};
            if (requestParameters.year !== undefined) {
                queryParameters['year'] = requestParameters.year;
            }
            if (requestParameters.period !== undefined) {
                queryParameters['period'] = requestParameters.period;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/vatgroups/declaration`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PaginatedVatGroupResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Get the VAT collections needed for VAT declarations
     */
    getVatDeclarationAmounts(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getVatDeclarationAmountsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Create a new VAT group
     */
    updateVatGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling updateVatGroup.');
            }
            if (requestParameters.vatGroup === null || requestParameters.vatGroup === undefined) {
                throw new runtime.RequiredError('vatGroup', 'Required parameter requestParameters.vatGroup was null or undefined when calling updateVatGroup.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/vatgroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.UpdateVatGroupRequestToJSON)(requestParameters.vatGroup),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.VatGroupFromJSON)(jsonValue));
        });
    }
    /**
     *  Create a new VAT group
     */
    updateVatGroup(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateVatGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.VatGroupsApi = VatGroupsApi;
//# sourceMappingURL=VatGroupsApi.js.map