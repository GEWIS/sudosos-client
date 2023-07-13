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
import type { InvoiceEntryResponse } from './InvoiceEntryResponse';
import {
    InvoiceEntryResponseFromJSON,
    InvoiceEntryResponseFromJSONTyped,
    InvoiceEntryResponseToJSON,
} from './InvoiceEntryResponse';

/**
 * 
 * @export
 * @interface InvoiceResponse
 */
export interface InvoiceResponse {
    /**
     * 
     * @type {Array<InvoiceEntryResponse>}
     * @memberof InvoiceResponse
     */
    invoiceEntries?: Array<InvoiceEntryResponse>;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof InvoiceResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof InvoiceResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof InvoiceResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof InvoiceResponse
     */
    version?: number;
}

/**
 * Check if a given object implements the InvoiceResponse interface.
 */
export function instanceOfInvoiceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InvoiceResponseFromJSON(json: any): InvoiceResponse {
    return InvoiceResponseFromJSONTyped(json, false);
}

export function InvoiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceEntries': !exists(json, 'invoiceEntries') ? undefined : ((json['invoiceEntries'] as Array<any>).map(InvoiceEntryResponseFromJSON)),
        'id': json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function InvoiceResponseToJSON(value?: InvoiceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoiceEntries': value.invoiceEntries === undefined ? undefined : ((value.invoiceEntries as Array<any>).map(InvoiceEntryResponseToJSON)),
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

