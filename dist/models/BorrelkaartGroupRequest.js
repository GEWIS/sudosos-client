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
exports.BorrelkaartGroupRequestToJSON = exports.BorrelkaartGroupRequestFromJSONTyped = exports.BorrelkaartGroupRequestFromJSON = exports.instanceOfBorrelkaartGroupRequest = void 0;
const DineroObjectRequest_1 = require("./DineroObjectRequest");
/**
 * Check if a given object implements the BorrelkaartGroupRequest interface.
 */
function instanceOfBorrelkaartGroupRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "activeStartDate" in value;
    isInstance = isInstance && "activeEndDate" in value;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
exports.instanceOfBorrelkaartGroupRequest = instanceOfBorrelkaartGroupRequest;
function BorrelkaartGroupRequestFromJSON(json) {
    return BorrelkaartGroupRequestFromJSONTyped(json, false);
}
exports.BorrelkaartGroupRequestFromJSON = BorrelkaartGroupRequestFromJSON;
function BorrelkaartGroupRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'activeStartDate': json['activeStartDate'],
        'activeEndDate': json['activeEndDate'],
        'balance': (0, DineroObjectRequest_1.DineroObjectRequestFromJSON)(json['balance']),
        'amount': json['amount'],
    };
}
exports.BorrelkaartGroupRequestFromJSONTyped = BorrelkaartGroupRequestFromJSONTyped;
function BorrelkaartGroupRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'activeStartDate': value.activeStartDate,
        'activeEndDate': value.activeEndDate,
        'balance': (0, DineroObjectRequest_1.DineroObjectRequestToJSON)(value.balance),
        'amount': value.amount,
    };
}
exports.BorrelkaartGroupRequestToJSON = BorrelkaartGroupRequestToJSON;
//# sourceMappingURL=BorrelkaartGroupRequest.js.map