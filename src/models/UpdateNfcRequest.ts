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
 * @interface UpdateNfcRequest
 */
export interface UpdateNfcRequest {
    /**
     * The NFC code to set
     * @type {string}
     * @memberof UpdateNfcRequest
     */
    nfcCode: string;
}

/**
 * Check if a given object implements the UpdateNfcRequest interface.
 */
export function instanceOfUpdateNfcRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nfcCode" in value;

    return isInstance;
}

export function UpdateNfcRequestFromJSON(json: any): UpdateNfcRequest {
    return UpdateNfcRequestFromJSONTyped(json, false);
}

export function UpdateNfcRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNfcRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nfcCode': json['nfcCode'],
    };
}

export function UpdateNfcRequestToJSON(value?: UpdateNfcRequest | null): any {
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

