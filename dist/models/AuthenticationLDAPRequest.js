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
exports.AuthenticationLDAPRequestToJSON = exports.AuthenticationLDAPRequestFromJSONTyped = exports.AuthenticationLDAPRequestFromJSON = exports.instanceOfAuthenticationLDAPRequest = void 0;
/**
 * Check if a given object implements the AuthenticationLDAPRequest interface.
 */
function instanceOfAuthenticationLDAPRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "accountName" in value;
    isInstance = isInstance && "password" in value;
    return isInstance;
}
exports.instanceOfAuthenticationLDAPRequest = instanceOfAuthenticationLDAPRequest;
function AuthenticationLDAPRequestFromJSON(json) {
    return AuthenticationLDAPRequestFromJSONTyped(json, false);
}
exports.AuthenticationLDAPRequestFromJSON = AuthenticationLDAPRequestFromJSON;
function AuthenticationLDAPRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountName': json['accountName'],
        'password': json['password'],
    };
}
exports.AuthenticationLDAPRequestFromJSONTyped = AuthenticationLDAPRequestFromJSONTyped;
function AuthenticationLDAPRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountName': value.accountName,
        'password': value.password,
    };
}
exports.AuthenticationLDAPRequestToJSON = AuthenticationLDAPRequestToJSON;
//# sourceMappingURL=AuthenticationLDAPRequest.js.map