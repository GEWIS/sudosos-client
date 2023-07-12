/**
 * sudosos-back-end
 * Back-end API and database management for SudoSOS.
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { User } from './User';
/**
 *
 * @export
 * @interface BorrelkaartGroup
 */
export interface BorrelkaartGroup {
    /**
     * Name of the group.
     * @type {string}
     * @memberof BorrelkaartGroup
     */
    name: string;
    /**
     * Date after which the included cards are active.
     * @type {string}
     * @memberof BorrelkaartGroup
     */
    activeStartDate: string;
    /**
     * Date after which cards are no longer active.
     * @type {string}
     * @memberof BorrelkaartGroup
     */
    activeEndDate?: string;
    /**
     *
     * @type {Array<User>}
     * @memberof BorrelkaartGroup
     */
    borrelkaarten: Array<User>;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof BorrelkaartGroup
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof BorrelkaartGroup
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof BorrelkaartGroup
     */
    version?: number;
}
/**
 * Check if a given object implements the BorrelkaartGroup interface.
 */
export declare function instanceOfBorrelkaartGroup(value: object): boolean;
export declare function BorrelkaartGroupFromJSON(json: any): BorrelkaartGroup;
export declare function BorrelkaartGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): BorrelkaartGroup;
export declare function BorrelkaartGroupToJSON(value?: BorrelkaartGroup | null): any;