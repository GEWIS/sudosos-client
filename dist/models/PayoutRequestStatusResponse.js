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
exports.PayoutRequestStatusResponseToJSON = exports.PayoutRequestStatusResponseFromJSONTyped = exports.PayoutRequestStatusResponseFromJSON = exports.instanceOfPayoutRequestStatusResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PayoutRequestStatusResponse interface.
 */
function instanceOfPayoutRequestStatusResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfPayoutRequestStatusResponse = instanceOfPayoutRequestStatusResponse;
function PayoutRequestStatusResponseFromJSON(json) {
    return PayoutRequestStatusResponseFromJSONTyped(json, false);
}
exports.PayoutRequestStatusResponseFromJSON = PayoutRequestStatusResponseFromJSON;
function PayoutRequestStatusResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.PayoutRequestStatusResponseFromJSONTyped = PayoutRequestStatusResponseFromJSONTyped;
function PayoutRequestStatusResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'state': value.state,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.PayoutRequestStatusResponseToJSON = PayoutRequestStatusResponseToJSON;
//# sourceMappingURL=PayoutRequestStatusResponse.js.map