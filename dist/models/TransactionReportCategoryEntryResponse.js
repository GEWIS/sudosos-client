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
exports.TransactionReportCategoryEntryResponseToJSON = exports.TransactionReportCategoryEntryResponseFromJSONTyped = exports.TransactionReportCategoryEntryResponseFromJSON = exports.instanceOfTransactionReportCategoryEntryResponse = void 0;
const DineroObjectResponse_1 = require("./DineroObjectResponse");
const ProductCategoryResponse_1 = require("./ProductCategoryResponse");
/**
 * Check if a given object implements the TransactionReportCategoryEntryResponse interface.
 */
function instanceOfTransactionReportCategoryEntryResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "totalInclVat" in value;
    isInstance = isInstance && "totalExclVat" in value;
    return isInstance;
}
exports.instanceOfTransactionReportCategoryEntryResponse = instanceOfTransactionReportCategoryEntryResponse;
function TransactionReportCategoryEntryResponseFromJSON(json) {
    return TransactionReportCategoryEntryResponseFromJSONTyped(json, false);
}
exports.TransactionReportCategoryEntryResponseFromJSON = TransactionReportCategoryEntryResponseFromJSON;
function TransactionReportCategoryEntryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'category': (0, ProductCategoryResponse_1.ProductCategoryResponseFromJSON)(json['category']),
        'totalInclVat': (0, DineroObjectResponse_1.DineroObjectResponseFromJSON)(json['totalInclVat']),
        'totalExclVat': (0, DineroObjectResponse_1.DineroObjectResponseFromJSON)(json['totalExclVat']),
    };
}
exports.TransactionReportCategoryEntryResponseFromJSONTyped = TransactionReportCategoryEntryResponseFromJSONTyped;
function TransactionReportCategoryEntryResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'category': (0, ProductCategoryResponse_1.ProductCategoryResponseToJSON)(value.category),
        'totalInclVat': (0, DineroObjectResponse_1.DineroObjectResponseToJSON)(value.totalInclVat),
        'totalExclVat': (0, DineroObjectResponse_1.DineroObjectResponseToJSON)(value.totalExclVat),
    };
}
exports.TransactionReportCategoryEntryResponseToJSON = TransactionReportCategoryEntryResponseToJSON;
//# sourceMappingURL=TransactionReportCategoryEntryResponse.js.map