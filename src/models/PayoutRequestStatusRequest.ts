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
 * @interface PayoutRequestStatusRequest
 */
export interface PayoutRequestStatusRequest {
    /**
     * PayoutRequestState to change to,
     * should be one of CREATED, APPROVED, DENIED, CANCELLED
     * @type {string}
     * @memberof PayoutRequestStatusRequest
     */
    state?: string;
}

/**
 * Check if a given object implements the PayoutRequestStatusRequest interface.
 */
export function instanceOfPayoutRequestStatusRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PayoutRequestStatusRequestFromJSON(json: any): PayoutRequestStatusRequest {
    return PayoutRequestStatusRequestFromJSONTyped(json, false);
}

export function PayoutRequestStatusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutRequestStatusRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function PayoutRequestStatusRequestToJSON(value?: PayoutRequestStatusRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': value.state,
    };
}

