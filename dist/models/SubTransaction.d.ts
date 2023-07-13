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
import type { Container } from './Container';
import type { SubTransactionRow } from './SubTransactionRow';
import type { Transaction } from './Transaction';
import type { User } from './User';
/**
 *
 * @export
 * @interface SubTransaction
 */
export interface SubTransaction {
    /**
     *
     * @type {User}
     * @memberof SubTransaction
     */
    to: User;
    /**
     *
     * @type {Container}
     * @memberof SubTransaction
     */
    container: Container;
    /**
     *
     * @type {Transaction}
     * @memberof SubTransaction
     */
    transaction: Transaction;
    /**
     *
     * @type {Array<SubTransactionRow>}
     * @memberof SubTransaction
     */
    subTransactionsRows: Array<SubTransactionRow>;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof SubTransaction
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof SubTransaction
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof SubTransaction
     */
    version?: number;
}
/**
 * Check if a given object implements the SubTransaction interface.
 */
export declare function instanceOfSubTransaction(value: object): boolean;
export declare function SubTransactionFromJSON(json: any): SubTransaction;
export declare function SubTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubTransaction;
export declare function SubTransactionToJSON(value?: SubTransaction | null): any;
