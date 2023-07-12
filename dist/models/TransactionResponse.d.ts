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
import type { BasePointOfSaleResponse } from './BasePointOfSaleResponse';
import type { BaseUserResponse } from './BaseUserResponse';
import type { DineroObjectResponse } from './DineroObjectResponse';
import type { SubTransactionResponse } from './SubTransactionResponse';
/**
 *
 * @export
 * @interface TransactionResponse
 */
export interface TransactionResponse {
    /**
     *
     * @type {BaseUserResponse}
     * @memberof TransactionResponse
     */
    from: BaseUserResponse;
    /**
     *
     * @type {BaseUserResponse}
     * @memberof TransactionResponse
     */
    createdBy?: BaseUserResponse;
    /**
     *
     * @type {Array<SubTransactionResponse>}
     * @memberof TransactionResponse
     */
    subTransactions: Array<SubTransactionResponse>;
    /**
     *
     * @type {BasePointOfSaleResponse}
     * @memberof TransactionResponse
     */
    pointOfSale?: BasePointOfSaleResponse;
    /**
     *
     * @type {DineroObjectResponse}
     * @memberof TransactionResponse
     */
    totalPriceInclVat: DineroObjectResponse;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof TransactionResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof TransactionResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof TransactionResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof TransactionResponse
     */
    version?: number;
}
/**
 * Check if a given object implements the TransactionResponse interface.
 */
export declare function instanceOfTransactionResponse(value: object): boolean;
export declare function TransactionResponseFromJSON(json: any): TransactionResponse;
export declare function TransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResponse;
export declare function TransactionResponseToJSON(value?: TransactionResponse | null): any;
