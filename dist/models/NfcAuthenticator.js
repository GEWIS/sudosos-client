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
exports.NfcAuthenticatorToJSON = exports.NfcAuthenticatorFromJSONTyped = exports.NfcAuthenticatorFromJSON = exports.instanceOfNfcAuthenticator = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the NfcAuthenticator interface.
 */
function instanceOfNfcAuthenticator(value) {
    let isInstance = true;
    isInstance = isInstance && "nfcCode" in value;
    return isInstance;
}
exports.instanceOfNfcAuthenticator = instanceOfNfcAuthenticator;
function NfcAuthenticatorFromJSON(json) {
    return NfcAuthenticatorFromJSONTyped(json, false);
}
exports.NfcAuthenticatorFromJSON = NfcAuthenticatorFromJSON;
function NfcAuthenticatorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nfcCode': json['nfcCode'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.NfcAuthenticatorFromJSONTyped = NfcAuthenticatorFromJSONTyped;
function NfcAuthenticatorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nfcCode': value.nfcCode,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.NfcAuthenticatorToJSON = NfcAuthenticatorToJSON;
//# sourceMappingURL=NfcAuthenticator.js.map