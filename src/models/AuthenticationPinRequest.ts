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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuthenticationPinRequest
 */
export interface AuthenticationPinRequest {
    /**
     * 
     * @type {number}
     * @memberof AuthenticationPinRequest
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationPinRequest
     */
    pin: string;
}

/**
 * Check if a given object implements the AuthenticationPinRequest interface.
 */
export function instanceOfAuthenticationPinRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "pin" in value;

    return isInstance;
}

export function AuthenticationPinRequestFromJSON(json: any): AuthenticationPinRequest {
    return AuthenticationPinRequestFromJSONTyped(json, false);
}

export function AuthenticationPinRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationPinRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'pin': json['pin'],
    };
}

export function AuthenticationPinRequestToJSON(value?: AuthenticationPinRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'pin': value.pin,
    };
}

