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
import type { BaseProductResponse } from './BaseProductResponse';
import type { DineroObjectResponse } from './DineroObjectResponse';
/**
 *
 * @export
 * @interface SubTransactionRowResponse
 */
export interface SubTransactionRowResponse {
    /**
     *
     * @type {BaseProductResponse}
     * @memberof SubTransactionRowResponse
     */
    product: BaseProductResponse;
    /**
     * The amount that has been bought
     * @type {number}
     * @memberof SubTransactionRowResponse
     */
    amount: number;
    /**
     *
     * @type {DineroObjectResponse}
     * @memberof SubTransactionRowResponse
     */
    totalPriceInclVat: DineroObjectResponse;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof SubTransactionRowResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof SubTransactionRowResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof SubTransactionRowResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof SubTransactionRowResponse
     */
    version?: number;
}
/**
 * Check if a given object implements the SubTransactionRowResponse interface.
 */
export declare function instanceOfSubTransactionRowResponse(value: object): boolean;
export declare function SubTransactionRowResponseFromJSON(json: any): SubTransactionRowResponse;
export declare function SubTransactionRowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubTransactionRowResponse;
export declare function SubTransactionRowResponseToJSON(value?: SubTransactionRowResponse | null): any;
