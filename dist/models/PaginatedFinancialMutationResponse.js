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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedFinancialMutationResponseToJSON = exports.PaginatedFinancialMutationResponseFromJSONTyped = exports.PaginatedFinancialMutationResponseFromJSON = exports.instanceOfPaginatedFinancialMutationResponse = void 0;
const runtime_1 = require("../runtime");
const PaginationResult_1 = require("./PaginationResult");
/**
 * Check if a given object implements the PaginatedFinancialMutationResponse interface.
 */
function instanceOfPaginatedFinancialMutationResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaginatedFinancialMutationResponse = instanceOfPaginatedFinancialMutationResponse;
function PaginatedFinancialMutationResponseFromJSON(json) {
    return PaginatedFinancialMutationResponseFromJSONTyped(json, false);
}
exports.PaginatedFinancialMutationResponseFromJSON = PaginatedFinancialMutationResponseFromJSON;
function PaginatedFinancialMutationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pagination': !(0, runtime_1.exists)(json, '_pagination') ? undefined : (0, PaginationResult_1.PaginationResultFromJSON)(json['_pagination']),
        'records': !(0, runtime_1.exists)(json, 'records') ? undefined : (json['records'].map(PaginatedFinancialMutationResponseFromJSON)),
    };
}
exports.PaginatedFinancialMutationResponseFromJSONTyped = PaginatedFinancialMutationResponseFromJSONTyped;
function PaginatedFinancialMutationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '_pagination': (0, PaginationResult_1.PaginationResultToJSON)(value.pagination),
        'records': value.records === undefined ? undefined : (value.records.map(PaginatedFinancialMutationResponseToJSON)),
    };
}
exports.PaginatedFinancialMutationResponseToJSON = PaginatedFinancialMutationResponseToJSON;
//# sourceMappingURL=PaginatedFinancialMutationResponse.js.map