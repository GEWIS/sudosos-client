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
exports.TransactionFilterParametersToJSON = exports.TransactionFilterParametersFromJSONTyped = exports.TransactionFilterParametersFromJSON = exports.instanceOfTransactionFilterParameters = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionFilterParameters interface.
 */
function instanceOfTransactionFilterParameters(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionFilterParameters = instanceOfTransactionFilterParameters;
function TransactionFilterParametersFromJSON(json) {
    return TransactionFilterParametersFromJSONTyped(json, false);
}
exports.TransactionFilterParametersFromJSON = TransactionFilterParametersFromJSON;
function TransactionFilterParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactionId': !(0, runtime_1.exists)(json, 'transactionId') ? undefined : json['transactionId'],
        'fromId': !(0, runtime_1.exists)(json, 'fromId') ? undefined : json['fromId'],
        'createdById': !(0, runtime_1.exists)(json, 'createdById') ? undefined : json['createdById'],
        'toId': !(0, runtime_1.exists)(json, 'toId') ? undefined : json['toId'],
        'pointOfSaleId': !(0, runtime_1.exists)(json, 'pointOfSaleId') ? undefined : json['pointOfSaleId'],
        'pointOfSaleRevision': !(0, runtime_1.exists)(json, 'pointOfSaleRevision') ? undefined : json['pointOfSaleRevision'],
        'containerId': !(0, runtime_1.exists)(json, 'containerId') ? undefined : json['containerId'],
        'containerRevision': !(0, runtime_1.exists)(json, 'containerRevision') ? undefined : json['containerRevision'],
        'productId': !(0, runtime_1.exists)(json, 'productId') ? undefined : json['productId'],
        'productRevision': !(0, runtime_1.exists)(json, 'productRevision') ? undefined : json['productRevision'],
        'fromDate': !(0, runtime_1.exists)(json, 'fromDate') ? undefined : json['fromDate'],
        'tillDate': !(0, runtime_1.exists)(json, 'tillDate') ? undefined : json['tillDate'],
        'invoiceId': !(0, runtime_1.exists)(json, 'invoiceId') ? undefined : json['invoiceId'],
    };
}
exports.TransactionFilterParametersFromJSONTyped = TransactionFilterParametersFromJSONTyped;
function TransactionFilterParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactionId': value.transactionId,
        'fromId': value.fromId,
        'createdById': value.createdById,
        'toId': value.toId,
        'pointOfSaleId': value.pointOfSaleId,
        'pointOfSaleRevision': value.pointOfSaleRevision,
        'containerId': value.containerId,
        'containerRevision': value.containerRevision,
        'productId': value.productId,
        'productRevision': value.productRevision,
        'fromDate': value.fromDate,
        'tillDate': value.tillDate,
        'invoiceId': value.invoiceId,
    };
}
exports.TransactionFilterParametersToJSON = TransactionFilterParametersToJSON;
//# sourceMappingURL=TransactionFilterParameters.js.map