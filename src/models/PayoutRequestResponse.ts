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
import type { PayoutRequestStatusResponse } from './PayoutRequestStatusResponse';
import {
    PayoutRequestStatusResponseFromJSON,
    PayoutRequestStatusResponseFromJSONTyped,
    PayoutRequestStatusResponseToJSON,
} from './PayoutRequestStatusResponse';

/**
 * 
 * @export
 * @interface PayoutRequestResponse
 */
export interface PayoutRequestResponse {
    /**
     * 
     * @type {Array<PayoutRequestStatusResponse>}
     * @memberof PayoutRequestResponse
     */
    status?: Array<PayoutRequestStatusResponse>;
    /**
     * Bank account number
     * @type {string}
     * @memberof PayoutRequestResponse
     */
    bankAccountNumber?: string;
    /**
     * Name of the account owner
     * @type {string}
     * @memberof PayoutRequestResponse
     */
    bankAccountName?: string;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof PayoutRequestResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof PayoutRequestResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof PayoutRequestResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof PayoutRequestResponse
     */
    version?: number;
}

/**
 * Check if a given object implements the PayoutRequestResponse interface.
 */
export function instanceOfPayoutRequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PayoutRequestResponseFromJSON(json: any): PayoutRequestResponse {
    return PayoutRequestResponseFromJSONTyped(json, false);
}

export function PayoutRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : ((json['status'] as Array<any>).map(PayoutRequestStatusResponseFromJSON)),
        'bankAccountNumber': !exists(json, 'bankAccountNumber') ? undefined : json['bankAccountNumber'],
        'bankAccountName': !exists(json, 'bankAccountName') ? undefined : json['bankAccountName'],
        'id': json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function PayoutRequestResponseToJSON(value?: PayoutRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status === undefined ? undefined : ((value.status as Array<any>).map(PayoutRequestStatusResponseToJSON)),
        'bankAccountNumber': value.bankAccountNumber,
        'bankAccountName': value.bankAccountName,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

