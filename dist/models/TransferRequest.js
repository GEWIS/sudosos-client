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
exports.TransferRequestToJSON = exports.TransferRequestFromJSONTyped = exports.TransferRequestFromJSON = exports.instanceOfTransferRequest = void 0;
const runtime_1 = require("../runtime");
const DineroObjectRequest_1 = require("./DineroObjectRequest");
/**
 * Check if a given object implements the TransferRequest interface.
 */
function instanceOfTransferRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransferRequest = instanceOfTransferRequest;
function TransferRequestFromJSON(json) {
    return TransferRequestFromJSONTyped(json, false);
}
exports.TransferRequestFromJSON = TransferRequestFromJSON;
function TransferRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, DineroObjectRequest_1.DineroObjectRequestFromJSON)(json['amount']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'fromId': !(0, runtime_1.exists)(json, 'fromId') ? undefined : json['fromId'],
        'toId': !(0, runtime_1.exists)(json, 'toId') ? undefined : json['toId'],
    };
}
exports.TransferRequestFromJSONTyped = TransferRequestFromJSONTyped;
function TransferRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'amount': (0, DineroObjectRequest_1.DineroObjectRequestToJSON)(value.amount),
        'type': value.type,
        'fromId': value.fromId,
        'toId': value.toId,
    };
}
exports.TransferRequestToJSON = TransferRequestToJSON;
//# sourceMappingURL=TransferRequest.js.map