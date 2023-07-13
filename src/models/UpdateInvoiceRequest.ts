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
 * @interface UpdateInvoiceRequest
 */
export interface UpdateInvoiceRequest {
    /**
     * The user who updates the Invoice, defaults to the ID of the requester.
     * @type {number}
     * @memberof UpdateInvoiceRequest
     */
    byId?: number;
    /**
     * Name of the addressed.
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    addressee: string;
    /**
     * The description of the invoice.
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    description: string;
    /**
     * The state to set of the invoice,
     *    can be either CREATED, SENT, PAID or DELETED.
     * @type {string}
     * @memberof UpdateInvoiceRequest
     */
    state?: string;
}

/**
 * Check if a given object implements the UpdateInvoiceRequest interface.
 */
export function instanceOfUpdateInvoiceRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addressee" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function UpdateInvoiceRequestFromJSON(json: any): UpdateInvoiceRequest {
    return UpdateInvoiceRequestFromJSONTyped(json, false);
}

export function UpdateInvoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInvoiceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'byId': !exists(json, 'byId') ? undefined : json['byId'],
        'addressee': json['addressee'],
        'description': json['description'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function UpdateInvoiceRequestToJSON(value?: UpdateInvoiceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'byId': value.byId,
        'addressee': value.addressee,
        'description': value.description,
        'state': value.state,
    };
}

