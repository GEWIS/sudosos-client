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
import type { PointOfSaleRevision } from './PointOfSaleRevision';
import type { SubTransaction } from './SubTransaction';
import type { User } from './User';
/**
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     *
     * @type {User}
     * @memberof Transaction
     */
    from: User;
    /**
     *
     * @type {User}
     * @memberof Transaction
     */
    createdBy: User;
    /**
     *
     * @type {Array<SubTransaction>}
     * @memberof Transaction
     */
    subTransactions: Array<SubTransaction>;
    /**
     *
     * @type {PointOfSaleRevision}
     * @memberof Transaction
     */
    pointOfSale: PointOfSaleRevision;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof Transaction
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof Transaction
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof Transaction
     */
    version?: number;
}
/**
 * Check if a given object implements the Transaction interface.
 */
export declare function instanceOfTransaction(value: object): boolean;
export declare function TransactionFromJSON(json: any): Transaction;
export declare function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction;
export declare function TransactionToJSON(value?: Transaction | null): any;