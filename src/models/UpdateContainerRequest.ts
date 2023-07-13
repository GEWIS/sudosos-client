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
 * @interface UpdateContainerRequest
 */
export interface UpdateContainerRequest {
    /**
     * Name of the container
     * @type {string}
     * @memberof UpdateContainerRequest
     */
    name: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof UpdateContainerRequest
     */
    products: Array<number>;
    /**
     * Whether the container is public or not
     * @type {boolean}
     * @memberof UpdateContainerRequest
     */
    _public: boolean;
}

/**
 * Check if a given object implements the UpdateContainerRequest interface.
 */
export function instanceOfUpdateContainerRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "products" in value;
    isInstance = isInstance && "_public" in value;

    return isInstance;
}

export function UpdateContainerRequestFromJSON(json: any): UpdateContainerRequest {
    return UpdateContainerRequestFromJSONTyped(json, false);
}

export function UpdateContainerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateContainerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'products': json['products'],
        '_public': json['public'],
    };
}

export function UpdateContainerRequestToJSON(value?: UpdateContainerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'products': value.products,
        'public': value._public,
    };
}

