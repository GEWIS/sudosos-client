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
exports.UpdateNfcRequestToJSON = exports.UpdateNfcRequestFromJSONTyped = exports.UpdateNfcRequestFromJSON = exports.instanceOfUpdateNfcRequest = void 0;
/**
 * Check if a given object implements the UpdateNfcRequest interface.
 */
function instanceOfUpdateNfcRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "nfcCode" in value;
    return isInstance;
}
exports.instanceOfUpdateNfcRequest = instanceOfUpdateNfcRequest;
function UpdateNfcRequestFromJSON(json) {
    return UpdateNfcRequestFromJSONTyped(json, false);
}
exports.UpdateNfcRequestFromJSON = UpdateNfcRequestFromJSON;
function UpdateNfcRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nfcCode': json['nfcCode'],
    };
}
exports.UpdateNfcRequestFromJSONTyped = UpdateNfcRequestFromJSONTyped;
function UpdateNfcRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nfcCode': value.nfcCode,
    };
}
exports.UpdateNfcRequestToJSON = UpdateNfcRequestToJSON;
//# sourceMappingURL=UpdateNfcRequest.js.map