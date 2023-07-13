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
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    lastName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserRequest
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserRequest
     */
    ofAge?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserRequest
     */
    deleted?: boolean;
}

/**
 * Check if a given object implements the UpdateUserRequest interface.
 */
export function instanceOfUpdateUserRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateUserRequestFromJSON(json: any): UpdateUserRequest {
    return UpdateUserRequestFromJSONTyped(json, false);
}

export function UpdateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'ofAge': !exists(json, 'ofAge') ? undefined : json['ofAge'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
    };
}

export function UpdateUserRequestToJSON(value?: UpdateUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'active': value.active,
        'ofAge': value.ofAge,
        'email': value.email,
        'deleted': value.deleted,
    };
}

