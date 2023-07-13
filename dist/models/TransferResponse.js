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
exports.TransferResponseToJSON = exports.TransferResponseFromJSONTyped = exports.TransferResponseFromJSON = exports.instanceOfTransferResponse = void 0;
const runtime_1 = require("../runtime");
const BaseInvoiceResponse_1 = require("./BaseInvoiceResponse");
const BasePayoutRequestResponse_1 = require("./BasePayoutRequestResponse");
const BaseUserResponse_1 = require("./BaseUserResponse");
const Dinero_1 = require("./Dinero");
const StripeDepositResponse_1 = require("./StripeDepositResponse");
/**
 * Check if a given object implements the TransferResponse interface.
 */
function instanceOfTransferResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfTransferResponse = instanceOfTransferResponse;
function TransferResponseFromJSON(json) {
    return TransferResponseFromJSONTyped(json, false);
}
exports.TransferResponseFromJSON = TransferResponseFromJSON;
function TransferResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'amount': (0, Dinero_1.DineroFromJSON)(json['amount']),
        'from': !(0, runtime_1.exists)(json, 'from') ? undefined : (0, BaseUserResponse_1.BaseUserResponseFromJSON)(json['from']),
        'to': !(0, runtime_1.exists)(json, 'to') ? undefined : (0, BaseUserResponse_1.BaseUserResponseFromJSON)(json['to']),
        'invoice': !(0, runtime_1.exists)(json, 'invoice') ? undefined : (0, BaseInvoiceResponse_1.BaseInvoiceResponseFromJSON)(json['invoice']),
        'deposit': !(0, runtime_1.exists)(json, 'deposit') ? undefined : (0, StripeDepositResponse_1.StripeDepositResponseFromJSON)(json['deposit']),
        'payoutRequest': !(0, runtime_1.exists)(json, 'payoutRequest') ? undefined : (0, BasePayoutRequestResponse_1.BasePayoutRequestResponseFromJSON)(json['payoutRequest']),
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.TransferResponseFromJSONTyped = TransferResponseFromJSONTyped;
function TransferResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'amount': (0, Dinero_1.DineroToJSON)(value.amount),
        'from': (0, BaseUserResponse_1.BaseUserResponseToJSON)(value.from),
        'to': (0, BaseUserResponse_1.BaseUserResponseToJSON)(value.to),
        'invoice': (0, BaseInvoiceResponse_1.BaseInvoiceResponseToJSON)(value.invoice),
        'deposit': (0, StripeDepositResponse_1.StripeDepositResponseToJSON)(value.deposit),
        'payoutRequest': (0, BasePayoutRequestResponse_1.BasePayoutRequestResponseToJSON)(value.payoutRequest),
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.TransferResponseToJSON = TransferResponseToJSON;
//# sourceMappingURL=TransferResponse.js.map