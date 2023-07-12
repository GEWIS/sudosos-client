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
exports.AuthenticationResetTokenRequestToJSON = exports.AuthenticationResetTokenRequestFromJSONTyped = exports.AuthenticationResetTokenRequestFromJSON = exports.instanceOfAuthenticationResetTokenRequest = void 0;
/**
 * Check if a given object implements the AuthenticationResetTokenRequest interface.
 */
function instanceOfAuthenticationResetTokenRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "accountMail" in value;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "password" in value;
    return isInstance;
}
exports.instanceOfAuthenticationResetTokenRequest = instanceOfAuthenticationResetTokenRequest;
function AuthenticationResetTokenRequestFromJSON(json) {
    return AuthenticationResetTokenRequestFromJSONTyped(json, false);
}
exports.AuthenticationResetTokenRequestFromJSON = AuthenticationResetTokenRequestFromJSON;
function AuthenticationResetTokenRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountMail': json['accountMail'],
        'token': json['token'],
        'password': json['password'],
    };
}
exports.AuthenticationResetTokenRequestFromJSONTyped = AuthenticationResetTokenRequestFromJSONTyped;
function AuthenticationResetTokenRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountMail': value.accountMail,
        'token': value.token,
        'password': value.password,
    };
}
exports.AuthenticationResetTokenRequestToJSON = AuthenticationResetTokenRequestToJSON;
//# sourceMappingURL=AuthenticationResetTokenRequest.js.map