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
import type { PaginationResult } from './PaginationResult';
import {
    PaginationResultFromJSON,
    PaginationResultFromJSONTyped,
    PaginationResultToJSON,
} from './PaginationResult';
import type { PointOfSaleResponse } from './PointOfSaleResponse';
import {
    PointOfSaleResponseFromJSON,
    PointOfSaleResponseFromJSONTyped,
    PointOfSaleResponseToJSON,
} from './PointOfSaleResponse';

/**
 * 
 * @export
 * @interface PaginatedPointOfSaleResponse
 */
export interface PaginatedPointOfSaleResponse {
    /**
     * 
     * @type {PaginationResult}
     * @memberof PaginatedPointOfSaleResponse
     */
    pagination?: PaginationResult;
    /**
     * 
     * @type {Array<PointOfSaleResponse>}
     * @memberof PaginatedPointOfSaleResponse
     */
    records?: Array<PointOfSaleResponse>;
}

/**
 * Check if a given object implements the PaginatedPointOfSaleResponse interface.
 */
export function instanceOfPaginatedPointOfSaleResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedPointOfSaleResponseFromJSON(json: any): PaginatedPointOfSaleResponse {
    return PaginatedPointOfSaleResponseFromJSONTyped(json, false);
}

export function PaginatedPointOfSaleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedPointOfSaleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, '_pagination') ? undefined : PaginationResultFromJSON(json['_pagination']),
        'records': !exists(json, 'records') ? undefined : ((json['records'] as Array<any>).map(PointOfSaleResponseFromJSON)),
    };
}

export function PaginatedPointOfSaleResponseToJSON(value?: PaginatedPointOfSaleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_pagination': PaginationResultToJSON(value.pagination),
        'records': value.records === undefined ? undefined : ((value.records as Array<any>).map(PointOfSaleResponseToJSON)),
    };
}

