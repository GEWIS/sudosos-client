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
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';

/**
 * 
 * @export
 * @interface ProductRevision
 */
export interface ProductRevision {
    /**
     * 
     * @type {Product}
     * @memberof ProductRevision
     */
    product: Product;
    /**
     * The revision number of this revision.
     * @type {number}
     * @memberof ProductRevision
     */
    revision: number;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof ProductRevision
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof ProductRevision
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof ProductRevision
     */
    version?: number;
}

/**
 * Check if a given object implements the ProductRevision interface.
 */
export function instanceOfProductRevision(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "product" in value;
    isInstance = isInstance && "revision" in value;

    return isInstance;
}

export function ProductRevisionFromJSON(json: any): ProductRevision {
    return ProductRevisionFromJSONTyped(json, false);
}

export function ProductRevisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductRevision {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'product': ProductFromJSON(json['product']),
        'revision': json['revision'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ProductRevisionToJSON(value?: ProductRevision | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product': ProductToJSON(value.product),
        'revision': value.revision,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

