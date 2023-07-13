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
exports.StripeDepositStatusResponseToJSON = exports.StripeDepositStatusResponseFromJSONTyped = exports.StripeDepositStatusResponseFromJSON = exports.instanceOfStripeDepositStatusResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the StripeDepositStatusResponse interface.
 */
function instanceOfStripeDepositStatusResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "depositStatus" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfStripeDepositStatusResponse = instanceOfStripeDepositStatusResponse;
function StripeDepositStatusResponseFromJSON(json) {
    return StripeDepositStatusResponseFromJSONTyped(json, false);
}
exports.StripeDepositStatusResponseFromJSON = StripeDepositStatusResponseFromJSON;
function StripeDepositStatusResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'depositStatus': json['depositStatus'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.StripeDepositStatusResponseFromJSONTyped = StripeDepositStatusResponseFromJSONTyped;
function StripeDepositStatusResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'depositStatus': value.depositStatus,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.StripeDepositStatusResponseToJSON = StripeDepositStatusResponseToJSON;
//# sourceMappingURL=StripeDepositStatusResponse.js.map