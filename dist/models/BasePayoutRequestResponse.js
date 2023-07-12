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
exports.BasePayoutRequestResponseToJSON = exports.BasePayoutRequestResponseFromJSONTyped = exports.BasePayoutRequestResponseFromJSON = exports.instanceOfBasePayoutRequestResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BasePayoutRequestResponse interface.
 */
function instanceOfBasePayoutRequestResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBasePayoutRequestResponse = instanceOfBasePayoutRequestResponse;
function BasePayoutRequestResponseFromJSON(json) {
    return BasePayoutRequestResponseFromJSONTyped(json, false);
}
exports.BasePayoutRequestResponseFromJSON = BasePayoutRequestResponseFromJSON;
function BasePayoutRequestResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BasePayoutRequestResponseFromJSONTyped = BasePayoutRequestResponseFromJSONTyped;
function BasePayoutRequestResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': value.status,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BasePayoutRequestResponseToJSON = BasePayoutRequestResponseToJSON;
//# sourceMappingURL=BasePayoutRequestResponse.js.map