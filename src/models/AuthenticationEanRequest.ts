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
 * @interface AuthenticationEanRequest
 */
export interface AuthenticationEanRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEanRequest
     */
    eanCode: string;
}

/**
 * Check if a given object implements the AuthenticationEanRequest interface.
 */
export function instanceOfAuthenticationEanRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "eanCode" in value;

    return isInstance;
}

export function AuthenticationEanRequestFromJSON(json: any): AuthenticationEanRequest {
    return AuthenticationEanRequestFromJSONTyped(json, false);
}

export function AuthenticationEanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationEanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eanCode': json['eanCode'],
    };
}

export function AuthenticationEanRequestToJSON(value?: AuthenticationEanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eanCode': value.eanCode,
    };
}

