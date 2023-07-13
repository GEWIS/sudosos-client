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
 * @interface Banner
 */
export interface Banner {
    /**
     * Name/label of the banner.
     * @type {string}
     * @memberof Banner
     */
    name?: string;
    /**
     * How long the banner should be shown (in seconds).
     * @type {number}
     * @memberof Banner
     */
    duration?: number;
    /**
     * Whether the banner is active. Overrides start and end date.
     * @type {boolean}
     * @memberof Banner
     */
    active?: boolean;
    /**
     * The starting date from which the banner should be shown.
     * @type {string}
     * @memberof Banner
     */
    startDate?: string;
    /**
     * The end date from which the banner should no longer be shown.
     * @type {string}
     * @memberof Banner
     */
    endDate?: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof Banner
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof Banner
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof Banner
     */
    version?: number;
}

/**
 * Check if a given object implements the Banner interface.
 */
export function instanceOfBanner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BannerFromJSON(json: any): Banner {
    return BannerFromJSONTyped(json, false);
}

export function BannerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Banner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function BannerToJSON(value?: Banner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'duration': value.duration,
        'active': value.active,
        'startDate': value.startDate,
        'endDate': value.endDate,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

