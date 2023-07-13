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
import type { BaseContainerResponse } from './BaseContainerResponse';
import {
    BaseContainerResponseFromJSON,
    BaseContainerResponseFromJSONTyped,
    BaseContainerResponseToJSON,
} from './BaseContainerResponse';
import type { BaseUserResponse } from './BaseUserResponse';
import {
    BaseUserResponseFromJSON,
    BaseUserResponseFromJSONTyped,
    BaseUserResponseToJSON,
} from './BaseUserResponse';
import type { DineroObjectResponse } from './DineroObjectResponse';
import {
    DineroObjectResponseFromJSON,
    DineroObjectResponseFromJSONTyped,
    DineroObjectResponseToJSON,
} from './DineroObjectResponse';
import type { SubTransactionRowResponse } from './SubTransactionRowResponse';
import {
    SubTransactionRowResponseFromJSON,
    SubTransactionRowResponseFromJSONTyped,
    SubTransactionRowResponseToJSON,
} from './SubTransactionRowResponse';

/**
 * 
 * @export
 * @interface SubTransactionResponse
 */
export interface SubTransactionResponse {
    /**
     * 
     * @type {BaseUserResponse}
     * @memberof SubTransactionResponse
     */
    to: BaseUserResponse;
    /**
     * 
     * @type {BaseContainerResponse}
     * @memberof SubTransactionResponse
     */
    container: BaseContainerResponse;
    /**
     * 
     * @type {Array<SubTransactionRowResponse>}
     * @memberof SubTransactionResponse
     */
    subTransactionsRows: Array<SubTransactionRowResponse>;
    /**
     * 
     * @type {DineroObjectResponse}
     * @memberof SubTransactionResponse
     */
    totalPriceInclVat: DineroObjectResponse;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof SubTransactionResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof SubTransactionResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof SubTransactionResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof SubTransactionResponse
     */
    version?: number;
}

/**
 * Check if a given object implements the SubTransactionResponse interface.
 */
export function instanceOfSubTransactionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "container" in value;
    isInstance = isInstance && "subTransactionsRows" in value;
    isInstance = isInstance && "totalPriceInclVat" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubTransactionResponseFromJSON(json: any): SubTransactionResponse {
    return SubTransactionResponseFromJSONTyped(json, false);
}

export function SubTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'to': BaseUserResponseFromJSON(json['to']),
        'container': BaseContainerResponseFromJSON(json['container']),
        'subTransactionsRows': ((json['subTransactionsRows'] as Array<any>).map(SubTransactionRowResponseFromJSON)),
        'totalPriceInclVat': DineroObjectResponseFromJSON(json['totalPriceInclVat']),
        'id': json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function SubTransactionResponseToJSON(value?: SubTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'to': BaseUserResponseToJSON(value.to),
        'container': BaseContainerResponseToJSON(value.container),
        'subTransactionsRows': ((value.subTransactionsRows as Array<any>).map(SubTransactionRowResponseToJSON)),
        'totalPriceInclVat': DineroObjectResponseToJSON(value.totalPriceInclVat),
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

