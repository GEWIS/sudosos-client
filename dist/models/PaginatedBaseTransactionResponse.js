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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedBaseTransactionResponseToJSON = exports.PaginatedBaseTransactionResponseFromJSONTyped = exports.PaginatedBaseTransactionResponseFromJSON = exports.instanceOfPaginatedBaseTransactionResponse = void 0;
const runtime_1 = require("../runtime");
const BaseTransactionResponse_1 = require("./BaseTransactionResponse");
const PaginationResult_1 = require("./PaginationResult");
/**
 * Check if a given object implements the PaginatedBaseTransactionResponse interface.
 */
function instanceOfPaginatedBaseTransactionResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaginatedBaseTransactionResponse = instanceOfPaginatedBaseTransactionResponse;
function PaginatedBaseTransactionResponseFromJSON(json) {
    return PaginatedBaseTransactionResponseFromJSONTyped(json, false);
}
exports.PaginatedBaseTransactionResponseFromJSON = PaginatedBaseTransactionResponseFromJSON;
function PaginatedBaseTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pagination': !(0, runtime_1.exists)(json, '_pagination') ? undefined : (0, PaginationResult_1.PaginationResultFromJSON)(json['_pagination']),
        'records': !(0, runtime_1.exists)(json, 'records') ? undefined : (json['records'].map(BaseTransactionResponse_1.BaseTransactionResponseFromJSON)),
    };
}
exports.PaginatedBaseTransactionResponseFromJSONTyped = PaginatedBaseTransactionResponseFromJSONTyped;
function PaginatedBaseTransactionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '_pagination': (0, PaginationResult_1.PaginationResultToJSON)(value.pagination),
        'records': value.records === undefined ? undefined : (value.records.map(BaseTransactionResponse_1.BaseTransactionResponseToJSON)),
    };
}
exports.PaginatedBaseTransactionResponseToJSON = PaginatedBaseTransactionResponseToJSON;
//# sourceMappingURL=PaginatedBaseTransactionResponse.js.map