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
exports.TransactionReportVatEntryResponseToJSON = exports.TransactionReportVatEntryResponseFromJSONTyped = exports.TransactionReportVatEntryResponseFromJSON = exports.instanceOfTransactionReportVatEntryResponse = void 0;
const BaseVatGroupResponse_1 = require("./BaseVatGroupResponse");
const DineroObjectResponse_1 = require("./DineroObjectResponse");
/**
 * Check if a given object implements the TransactionReportVatEntryResponse interface.
 */
function instanceOfTransactionReportVatEntryResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "vat" in value;
    isInstance = isInstance && "totalInclVat" in value;
    isInstance = isInstance && "totalExclVat" in value;
    return isInstance;
}
exports.instanceOfTransactionReportVatEntryResponse = instanceOfTransactionReportVatEntryResponse;
function TransactionReportVatEntryResponseFromJSON(json) {
    return TransactionReportVatEntryResponseFromJSONTyped(json, false);
}
exports.TransactionReportVatEntryResponseFromJSON = TransactionReportVatEntryResponseFromJSON;
function TransactionReportVatEntryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'vat': (0, BaseVatGroupResponse_1.BaseVatGroupResponseFromJSON)(json['vat']),
        'totalInclVat': (0, DineroObjectResponse_1.DineroObjectResponseFromJSON)(json['totalInclVat']),
        'totalExclVat': (0, DineroObjectResponse_1.DineroObjectResponseFromJSON)(json['totalExclVat']),
    };
}
exports.TransactionReportVatEntryResponseFromJSONTyped = TransactionReportVatEntryResponseFromJSONTyped;
function TransactionReportVatEntryResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'vat': (0, BaseVatGroupResponse_1.BaseVatGroupResponseToJSON)(value.vat),
        'totalInclVat': (0, DineroObjectResponse_1.DineroObjectResponseToJSON)(value.totalInclVat),
        'totalExclVat': (0, DineroObjectResponse_1.DineroObjectResponseToJSON)(value.totalExclVat),
    };
}
exports.TransactionReportVatEntryResponseToJSON = TransactionReportVatEntryResponseToJSON;
//# sourceMappingURL=TransactionReportVatEntryResponse.js.map