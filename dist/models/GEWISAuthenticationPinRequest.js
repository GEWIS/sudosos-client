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
exports.GEWISAuthenticationPinRequestToJSON = exports.GEWISAuthenticationPinRequestFromJSONTyped = exports.GEWISAuthenticationPinRequestFromJSON = exports.instanceOfGEWISAuthenticationPinRequest = void 0;
/**
 * Check if a given object implements the GEWISAuthenticationPinRequest interface.
 */
function instanceOfGEWISAuthenticationPinRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "gewisId" in value;
    isInstance = isInstance && "pin" in value;
    return isInstance;
}
exports.instanceOfGEWISAuthenticationPinRequest = instanceOfGEWISAuthenticationPinRequest;
function GEWISAuthenticationPinRequestFromJSON(json) {
    return GEWISAuthenticationPinRequestFromJSONTyped(json, false);
}
exports.GEWISAuthenticationPinRequestFromJSON = GEWISAuthenticationPinRequestFromJSON;
function GEWISAuthenticationPinRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'gewisId': json['gewisId'],
        'pin': json['pin'],
    };
}
exports.GEWISAuthenticationPinRequestFromJSONTyped = GEWISAuthenticationPinRequestFromJSONTyped;
function GEWISAuthenticationPinRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'gewisId': value.gewisId,
        'pin': value.pin,
    };
}
exports.GEWISAuthenticationPinRequestToJSON = GEWISAuthenticationPinRequestToJSON;
//# sourceMappingURL=GEWISAuthenticationPinRequest.js.map