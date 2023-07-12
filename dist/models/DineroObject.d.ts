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
 * @interface DineroObject
 */
export interface DineroObject {
    /**
     * amount
     * @type {number}
     * @memberof DineroObject
     */
    amount: number;
    /**
     * currency
     * @type {string}
     * @memberof DineroObject
     */
    currency: string;
    /**
     * precision
     * @type {number}
     * @memberof DineroObject
     */
    precision: number;
}
/**
 * Check if a given object implements the DineroObject interface.
 */
export declare function instanceOfDineroObject(value: object): boolean;
export declare function DineroObjectFromJSON(json: any): DineroObject;
export declare function DineroObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): DineroObject;
export declare function DineroObjectToJSON(value?: DineroObject | null): any;
