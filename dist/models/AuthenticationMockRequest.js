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
exports.AuthenticationMockRequestToJSON = exports.AuthenticationMockRequestFromJSONTyped = exports.AuthenticationMockRequestFromJSON = exports.instanceOfAuthenticationMockRequest = void 0;
/**
 * Check if a given object implements the AuthenticationMockRequest interface.
 */
function instanceOfAuthenticationMockRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "nonce" in value;
    return isInstance;
}
exports.instanceOfAuthenticationMockRequest = instanceOfAuthenticationMockRequest;
function AuthenticationMockRequestFromJSON(json) {
    return AuthenticationMockRequestFromJSONTyped(json, false);
}
exports.AuthenticationMockRequestFromJSON = AuthenticationMockRequestFromJSON;
function AuthenticationMockRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'userId': json['userId'],
        'nonce': json['nonce'],
    };
}
exports.AuthenticationMockRequestFromJSONTyped = AuthenticationMockRequestFromJSONTyped;
function AuthenticationMockRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'userId': value.userId,
        'nonce': value.nonce,
    };
}
exports.AuthenticationMockRequestToJSON = AuthenticationMockRequestToJSON;
//# sourceMappingURL=AuthenticationMockRequest.js.map