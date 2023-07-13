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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface AssignedRole
 */
export interface AssignedRole {
    /**
     * 
     * @type {User}
     * @memberof AssignedRole
     */
    user: User;
    /**
     * The name of the role
     * @type {string}
     * @memberof AssignedRole
     */
    role: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof AssignedRole
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof AssignedRole
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof AssignedRole
     */
    version?: number;
}

/**
 * Check if a given object implements the AssignedRole interface.
 */
export function instanceOfAssignedRole(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function AssignedRoleFromJSON(json: any): AssignedRole {
    return AssignedRoleFromJSONTyped(json, false);
}

export function AssignedRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignedRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserFromJSON(json['user']),
        'role': json['role'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function AssignedRoleToJSON(value?: AssignedRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserToJSON(value.user),
        'role': value.role,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

