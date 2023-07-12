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
 * @interface VatGroup
 */
export interface VatGroup {
    /**
     * Name of the VAT group
     * @type {string}
     * @memberof VatGroup
     */
    name?: string;
    /**
     * VAT percentage
     * @type {number}
     * @memberof VatGroup
     */
    percentage?: number;
    /**
     * Whether this group is soft-deleted
     * @type {boolean}
     * @memberof VatGroup
     */
    deleted?: boolean;
    /**
     * Whether this group is hidden from transactions
     * @type {boolean}
     * @memberof VatGroup
     */
    hidden?: boolean;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof VatGroup
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof VatGroup
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof VatGroup
     */
    version?: number;
}
/**
 * Check if a given object implements the VatGroup interface.
 */
export declare function instanceOfVatGroup(value: object): boolean;
export declare function VatGroupFromJSON(json: any): VatGroup;
export declare function VatGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): VatGroup;
export declare function VatGroupToJSON(value?: VatGroup | null): any;