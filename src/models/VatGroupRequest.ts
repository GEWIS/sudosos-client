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
 * @interface VatGroupRequest
 */
export interface VatGroupRequest {
    /**
     * VAT percentage
     * @type {number}
     * @memberof VatGroupRequest
     */
    percentage: number;
    /**
     * Name of the VAT group
     * @type {string}
     * @memberof VatGroupRequest
     */
    name: string;
    /**
     * Whether this group should be hidden
     * in the financial overviews when its value is zero
     * @type {boolean}
     * @memberof VatGroupRequest
     */
    deleted: boolean;
    /**
     * Whether this group should
     * be hidden from transactions
     * @type {boolean}
     * @memberof VatGroupRequest
     */
    hidden: boolean;
}

/**
 * Check if a given object implements the VatGroupRequest interface.
 */
export function instanceOfVatGroupRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "percentage" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "hidden" in value;

    return isInstance;
}

export function VatGroupRequestFromJSON(json: any): VatGroupRequest {
    return VatGroupRequestFromJSONTyped(json, false);
}

export function VatGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VatGroupRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'percentage': json['percentage'],
        'name': json['name'],
        'deleted': json['deleted'],
        'hidden': json['hidden'],
    };
}

export function VatGroupRequestToJSON(value?: VatGroupRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'percentage': value.percentage,
        'name': value.name,
        'deleted': value.deleted,
        'hidden': value.hidden,
    };
}

