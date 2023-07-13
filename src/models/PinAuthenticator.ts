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
 * @interface PinAuthenticator
 */
export interface PinAuthenticator {
    /**
     * The PIN code of this user (hashed)
     * @type {string}
     * @memberof PinAuthenticator
     */
    hash: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof PinAuthenticator
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof PinAuthenticator
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof PinAuthenticator
     */
    version?: number;
}

/**
 * Check if a given object implements the PinAuthenticator interface.
 */
export function instanceOfPinAuthenticator(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hash" in value;

    return isInstance;
}

export function PinAuthenticatorFromJSON(json: any): PinAuthenticator {
    return PinAuthenticatorFromJSONTyped(json, false);
}

export function PinAuthenticatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PinAuthenticator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hash': json['hash'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function PinAuthenticatorToJSON(value?: PinAuthenticator | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hash': value.hash,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

