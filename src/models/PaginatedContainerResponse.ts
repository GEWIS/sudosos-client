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
import type { ContainerResponse } from './ContainerResponse';
import {
    ContainerResponseFromJSON,
    ContainerResponseFromJSONTyped,
    ContainerResponseToJSON,
} from './ContainerResponse';
import type { PaginationResult } from './PaginationResult';
import {
    PaginationResultFromJSON,
    PaginationResultFromJSONTyped,
    PaginationResultToJSON,
} from './PaginationResult';

/**
 * 
 * @export
 * @interface PaginatedContainerResponse
 */
export interface PaginatedContainerResponse {
    /**
     * 
     * @type {PaginationResult}
     * @memberof PaginatedContainerResponse
     */
    pagination?: PaginationResult;
    /**
     * 
     * @type {Array<ContainerResponse>}
     * @memberof PaginatedContainerResponse
     */
    records?: Array<ContainerResponse>;
}

/**
 * Check if a given object implements the PaginatedContainerResponse interface.
 */
export function instanceOfPaginatedContainerResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedContainerResponseFromJSON(json: any): PaginatedContainerResponse {
    return PaginatedContainerResponseFromJSONTyped(json, false);
}

export function PaginatedContainerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedContainerResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, '_pagination') ? undefined : PaginationResultFromJSON(json['_pagination']),
        'records': !exists(json, 'records') ? undefined : ((json['records'] as Array<any>).map(ContainerResponseFromJSON)),
    };
}

export function PaginatedContainerResponseToJSON(value?: PaginatedContainerResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_pagination': PaginationResultToJSON(value.pagination),
        'records': value.records === undefined ? undefined : ((value.records as Array<any>).map(ContainerResponseToJSON)),
    };
}

