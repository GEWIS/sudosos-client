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
 * @interface GewisUserResponse
 */
export interface GewisUserResponse {
    /**
     * The m-Number of the user
     * @type {number}
     * @memberof GewisUserResponse
     */
    gewisId?: number;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof GewisUserResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof GewisUserResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof GewisUserResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof GewisUserResponse
     */
    version?: number;
}

/**
 * Check if a given object implements the GewisUserResponse interface.
 */
export function instanceOfGewisUserResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GewisUserResponseFromJSON(json: any): GewisUserResponse {
    return GewisUserResponseFromJSONTyped(json, false);
}

export function GewisUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GewisUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gewisId': !exists(json, 'gewisId') ? undefined : json['gewisId'],
        'id': json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function GewisUserResponseToJSON(value?: GewisUserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gewisId': value.gewisId,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

