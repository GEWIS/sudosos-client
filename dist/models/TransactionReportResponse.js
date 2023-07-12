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
exports.TransactionReportResponseToJSON = exports.TransactionReportResponseFromJSONTyped = exports.TransactionReportResponseFromJSON = exports.instanceOfTransactionReportResponse = void 0;
const DineroObjectResponse_1 = require("./DineroObjectResponse");
const TransactionFilterParameters_1 = require("./TransactionFilterParameters");
const TransactionReportDataResponse_1 = require("./TransactionReportDataResponse");
/**
 * Check if a given object implements the TransactionReportResponse interface.
 */
function instanceOfTransactionReportResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "parameters" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "totalExclVat" in value;
    isInstance = isInstance && "totalInclVat" in value;
    return isInstance;
}
exports.instanceOfTransactionReportResponse = instanceOfTransactionReportResponse;
function TransactionReportResponseFromJSON(json) {
    return TransactionReportResponseFromJSONTyped(json, false);
}
exports.TransactionReportResponseFromJSON = TransactionReportResponseFromJSON;
function TransactionReportResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'parameters': (0, TransactionFilterParameters_1.TransactionFilterParametersFromJSON)(json['parameters']),
        'data': (0, TransactionReportDataResponse_1.TransactionReportDataResponseFromJSON)(json['data']),
        'totalExclVat': (0, DineroObjectResponse_1.DineroObjectResponseFromJSON)(json['totalExclVat']),
        'totalInclVat': (0, DineroObjectResponse_1.DineroObjectResponseFromJSON)(json['totalInclVat']),
    };
}
exports.TransactionReportResponseFromJSONTyped = TransactionReportResponseFromJSONTyped;
function TransactionReportResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'parameters': (0, TransactionFilterParameters_1.TransactionFilterParametersToJSON)(value.parameters),
        'data': (0, TransactionReportDataResponse_1.TransactionReportDataResponseToJSON)(value.data),
        'totalExclVat': (0, DineroObjectResponse_1.DineroObjectResponseToJSON)(value.totalExclVat),
        'totalInclVat': (0, DineroObjectResponse_1.DineroObjectResponseToJSON)(value.totalInclVat),
    };
}
exports.TransactionReportResponseToJSON = TransactionReportResponseToJSON;
//# sourceMappingURL=TransactionReportResponse.js.map