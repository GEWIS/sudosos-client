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
/**
 *
 * @export
 * @interface BaseContainer
 */
export interface BaseContainer {
    /**
     * The unique name of the container.
     * @type {string}
     * @memberof BaseContainer
     */
    name: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof BaseContainer
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof BaseContainer
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof BaseContainer
     */
    version?: number;
}
/**
 * Check if a given object implements the BaseContainer interface.
 */
export declare function instanceOfBaseContainer(value: object): boolean;
export declare function BaseContainerFromJSON(json: any): BaseContainer;
export declare function BaseContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseContainer;
export declare function BaseContainerToJSON(value?: BaseContainer | null): any;