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
exports.PayoutRequestStatusRequestToJSON = exports.PayoutRequestStatusRequestFromJSONTyped = exports.PayoutRequestStatusRequestFromJSON = exports.instanceOfPayoutRequestStatusRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PayoutRequestStatusRequest interface.
 */
function instanceOfPayoutRequestStatusRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPayoutRequestStatusRequest = instanceOfPayoutRequestStatusRequest;
function PayoutRequestStatusRequestFromJSON(json) {
    return PayoutRequestStatusRequestFromJSONTyped(json, false);
}
exports.PayoutRequestStatusRequestFromJSON = PayoutRequestStatusRequestFromJSON;
function PayoutRequestStatusRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
    };
}
exports.PayoutRequestStatusRequestFromJSONTyped = PayoutRequestStatusRequestFromJSONTyped;
function PayoutRequestStatusRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'state': value.state,
    };
}
exports.PayoutRequestStatusRequestToJSON = PayoutRequestStatusRequestToJSON;
//# sourceMappingURL=PayoutRequestStatusRequest.js.map