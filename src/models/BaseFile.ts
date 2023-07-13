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
 * @interface BaseFile
 */
export interface BaseFile {
    /**
     * The filename when the file is downloaded
     * @type {string}
     * @memberof BaseFile
     */
    downloadName: string;
    /**
     * The location of the file, including filename in storage
     * @type {string}
     * @memberof BaseFile
     */
    location: string;
    /**
     * 
     * @type {User}
     * @memberof BaseFile
     */
    createdBy: User;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof BaseFile
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof BaseFile
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof BaseFile
     */
    version?: number;
}

/**
 * Check if a given object implements the BaseFile interface.
 */
export function instanceOfBaseFile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "downloadName" in value;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "createdBy" in value;

    return isInstance;
}

export function BaseFileFromJSON(json: any): BaseFile {
    return BaseFileFromJSONTyped(json, false);
}

export function BaseFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'downloadName': json['downloadName'],
        'location': json['location'],
        'createdBy': UserFromJSON(json['createdBy']),
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function BaseFileToJSON(value?: BaseFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'downloadName': value.downloadName,
        'location': value.location,
        'createdBy': UserToJSON(value.createdBy),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

