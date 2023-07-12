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
exports.UpdatePinRequestToJSON = exports.UpdatePinRequestFromJSONTyped = exports.UpdatePinRequestFromJSON = exports.instanceOfUpdatePinRequest = void 0;
/**
 * Check if a given object implements the UpdatePinRequest interface.
 */
function instanceOfUpdatePinRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "pin" in value;
    return isInstance;
}
exports.instanceOfUpdatePinRequest = instanceOfUpdatePinRequest;
function UpdatePinRequestFromJSON(json) {
    return UpdatePinRequestFromJSONTyped(json, false);
}
exports.UpdatePinRequestFromJSON = UpdatePinRequestFromJSON;
function UpdatePinRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pin': json['pin'],
    };
}
exports.UpdatePinRequestFromJSONTyped = UpdatePinRequestFromJSONTyped;
function UpdatePinRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pin': value.pin,
    };
}
exports.UpdatePinRequestToJSON = UpdatePinRequestToJSON;
//# sourceMappingURL=UpdatePinRequest.js.map