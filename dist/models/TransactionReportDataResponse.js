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
exports.TransactionReportDataResponseToJSON = exports.TransactionReportDataResponseFromJSONTyped = exports.TransactionReportDataResponseFromJSON = exports.instanceOfTransactionReportDataResponse = void 0;
const TransactionReportCategoryEntryResponse_1 = require("./TransactionReportCategoryEntryResponse");
const TransactionReportEntryResponse_1 = require("./TransactionReportEntryResponse");
const TransactionReportVatEntryResponse_1 = require("./TransactionReportVatEntryResponse");
/**
 * Check if a given object implements the TransactionReportDataResponse interface.
 */
function instanceOfTransactionReportDataResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "entries" in value;
    isInstance = isInstance && "categories" in value;
    isInstance = isInstance && "vat" in value;
    return isInstance;
}
exports.instanceOfTransactionReportDataResponse = instanceOfTransactionReportDataResponse;
function TransactionReportDataResponseFromJSON(json) {
    return TransactionReportDataResponseFromJSONTyped(json, false);
}
exports.TransactionReportDataResponseFromJSON = TransactionReportDataResponseFromJSON;
function TransactionReportDataResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entries': (json['entries'].map(TransactionReportEntryResponse_1.TransactionReportEntryResponseFromJSON)),
        'categories': (json['categories'].map(TransactionReportCategoryEntryResponse_1.TransactionReportCategoryEntryResponseFromJSON)),
        'vat': (json['vat'].map(TransactionReportVatEntryResponse_1.TransactionReportVatEntryResponseFromJSON)),
    };
}
exports.TransactionReportDataResponseFromJSONTyped = TransactionReportDataResponseFromJSONTyped;
function TransactionReportDataResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'entries': (value.entries.map(TransactionReportEntryResponse_1.TransactionReportEntryResponseToJSON)),
        'categories': (value.categories.map(TransactionReportCategoryEntryResponse_1.TransactionReportCategoryEntryResponseToJSON)),
        'vat': (value.vat.map(TransactionReportVatEntryResponse_1.TransactionReportVatEntryResponseToJSON)),
    };
}
exports.TransactionReportDataResponseToJSON = TransactionReportDataResponseToJSON;
//# sourceMappingURL=TransactionReportDataResponse.js.map