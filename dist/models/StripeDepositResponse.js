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
exports.StripeDepositResponseToJSON = exports.StripeDepositResponseFromJSONTyped = exports.StripeDepositResponseFromJSON = exports.instanceOfStripeDepositResponse = void 0;
const runtime_1 = require("../runtime");
const BaseUserResponse_1 = require("./BaseUserResponse");
const DineroObjectResponse_1 = require("./DineroObjectResponse");
const StripeDepositStatusResponse_1 = require("./StripeDepositStatusResponse");
/**
 * Check if a given object implements the StripeDepositResponse interface.
 */
function instanceOfStripeDepositResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "stripeId" in value;
    isInstance = isInstance && "depositStatus" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfStripeDepositResponse = instanceOfStripeDepositResponse;
function StripeDepositResponseFromJSON(json) {
    return StripeDepositResponseFromJSONTyped(json, false);
}
exports.StripeDepositResponseFromJSON = StripeDepositResponseFromJSON;
function StripeDepositResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stripeId': json['stripeId'],
        'depositStatus': (json['depositStatus'].map(StripeDepositStatusResponse_1.StripeDepositStatusResponseFromJSON)),
        'amount': (0, DineroObjectResponse_1.DineroObjectResponseFromJSON)(json['amount']),
        'to': (0, BaseUserResponse_1.BaseUserResponseFromJSON)(json['to']),
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.StripeDepositResponseFromJSONTyped = StripeDepositResponseFromJSONTyped;
function StripeDepositResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stripeId': value.stripeId,
        'depositStatus': (value.depositStatus.map(StripeDepositStatusResponse_1.StripeDepositStatusResponseToJSON)),
        'amount': (0, DineroObjectResponse_1.DineroObjectResponseToJSON)(value.amount),
        'to': (0, BaseUserResponse_1.BaseUserResponseToJSON)(value.to),
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.StripeDepositResponseToJSON = StripeDepositResponseToJSON;
//# sourceMappingURL=StripeDepositResponse.js.map