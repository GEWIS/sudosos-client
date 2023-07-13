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
exports.PaginatedProductResponseToJSON = exports.PaginatedProductResponseFromJSONTyped = exports.PaginatedProductResponseFromJSON = exports.instanceOfPaginatedProductResponse = void 0;
const runtime_1 = require("../runtime");
const PaginationResult_1 = require("./PaginationResult");
const ProductResponse_1 = require("./ProductResponse");
/**
 * Check if a given object implements the PaginatedProductResponse interface.
 */
function instanceOfPaginatedProductResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaginatedProductResponse = instanceOfPaginatedProductResponse;
function PaginatedProductResponseFromJSON(json) {
    return PaginatedProductResponseFromJSONTyped(json, false);
}
exports.PaginatedProductResponseFromJSON = PaginatedProductResponseFromJSON;
function PaginatedProductResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pagination': !(0, runtime_1.exists)(json, '_pagination') ? undefined : (0, PaginationResult_1.PaginationResultFromJSON)(json['_pagination']),
        'records': !(0, runtime_1.exists)(json, 'records') ? undefined : (json['records'].map(ProductResponse_1.ProductResponseFromJSON)),
    };
}
exports.PaginatedProductResponseFromJSONTyped = PaginatedProductResponseFromJSONTyped;
function PaginatedProductResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '_pagination': (0, PaginationResult_1.PaginationResultToJSON)(value.pagination),
        'records': value.records === undefined ? undefined : (value.records.map(ProductResponse_1.ProductResponseToJSON)),
    };
}
exports.PaginatedProductResponseToJSON = PaginatedProductResponseToJSON;
//# sourceMappingURL=PaginatedProductResponse.js.map