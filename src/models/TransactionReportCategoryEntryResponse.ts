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
import type { DineroObjectResponse } from './DineroObjectResponse';
import {
    DineroObjectResponseFromJSON,
    DineroObjectResponseFromJSONTyped,
    DineroObjectResponseToJSON,
} from './DineroObjectResponse';
import type { ProductCategoryResponse } from './ProductCategoryResponse';
import {
    ProductCategoryResponseFromJSON,
    ProductCategoryResponseFromJSONTyped,
    ProductCategoryResponseToJSON,
} from './ProductCategoryResponse';

/**
 * 
 * @export
 * @interface TransactionReportCategoryEntryResponse
 */
export interface TransactionReportCategoryEntryResponse {
    /**
     * 
     * @type {ProductCategoryResponse}
     * @memberof TransactionReportCategoryEntryResponse
     */
    category: ProductCategoryResponse;
    /**
     * 
     * @type {DineroObjectResponse}
     * @memberof TransactionReportCategoryEntryResponse
     */
    totalInclVat: DineroObjectResponse;
    /**
     * 
     * @type {DineroObjectResponse}
     * @memberof TransactionReportCategoryEntryResponse
     */
    totalExclVat: DineroObjectResponse;
}

/**
 * Check if a given object implements the TransactionReportCategoryEntryResponse interface.
 */
export function instanceOfTransactionReportCategoryEntryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "totalInclVat" in value;
    isInstance = isInstance && "totalExclVat" in value;

    return isInstance;
}

export function TransactionReportCategoryEntryResponseFromJSON(json: any): TransactionReportCategoryEntryResponse {
    return TransactionReportCategoryEntryResponseFromJSONTyped(json, false);
}

export function TransactionReportCategoryEntryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionReportCategoryEntryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': ProductCategoryResponseFromJSON(json['category']),
        'totalInclVat': DineroObjectResponseFromJSON(json['totalInclVat']),
        'totalExclVat': DineroObjectResponseFromJSON(json['totalExclVat']),
    };
}

export function TransactionReportCategoryEntryResponseToJSON(value?: TransactionReportCategoryEntryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': ProductCategoryResponseToJSON(value.category),
        'totalInclVat': DineroObjectResponseToJSON(value.totalInclVat),
        'totalExclVat': DineroObjectResponseToJSON(value.totalExclVat),
    };
}

