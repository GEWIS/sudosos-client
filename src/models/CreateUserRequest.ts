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
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    lastName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserRequest
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateUserRequest
     */
    type: number;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    email?: string;
}

/**
 * Check if a given object implements the CreateUserRequest interface.
 */
export function instanceOfCreateUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CreateUserRequestFromJSON(json: any): CreateUserRequest {
    return CreateUserRequestFromJSONTyped(json, false);
}

export function CreateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'type': json['type'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function CreateUserRequestToJSON(value?: CreateUserRequest | null): any {
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
        'type': value.type,
        'email': value.email,
    };
}

