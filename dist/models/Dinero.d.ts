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
 * @interface Dinero
 */
export interface Dinero {
    /**
     * The amount of money as integer in the given precision.
     * @type {number}
     * @memberof Dinero
     */
    amount: number;
    /**
     * The precision of the amount, in decimal places.
     * @type {number}
     * @memberof Dinero
     */
    precision: number;
    /**
     * The ISO 4217 currency code.
     * @type {string}
     * @memberof Dinero
     */
    currency: string;
}
/**
 * Check if a given object implements the Dinero interface.
 */
export declare function instanceOfDinero(value: object): boolean;
export declare function DineroFromJSON(json: any): Dinero;
export declare function DineroFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dinero;
export declare function DineroToJSON(value?: Dinero | null): any;