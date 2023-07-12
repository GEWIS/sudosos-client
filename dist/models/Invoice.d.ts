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
import type { InvoiceEntry } from './InvoiceEntry';
import type { InvoiceStatus } from './InvoiceStatus';
import type { Transfer } from './Transfer';
import type { User } from './User';
/**
 *
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     *
     * @type {User}
     * @memberof Invoice
     */
    to: User;
    /**
     *
     * @type {Transfer}
     * @memberof Invoice
     */
    transfer: Transfer;
    /**
     *
     * @type {Array<InvoiceEntry>}
     * @memberof Invoice
     */
    invoiceEntries: Array<InvoiceEntry>;
    /**
     *
     * @type {Array<InvoiceStatus>}
     * @memberof Invoice
     */
    invoiceStatus: Array<InvoiceStatus>;
    /**
     * Name of the addressed
     * @type {string}
     * @memberof Invoice
     */
    addressee: string;
    /**
     * The description of the invoice
     * @type {string}
     * @memberof Invoice
     */
    description: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof Invoice
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof Invoice
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof Invoice
     */
    version?: number;
}
/**
 * Check if a given object implements the Invoice interface.
 */
export declare function instanceOfInvoice(value: object): boolean;
export declare function InvoiceFromJSON(json: any): Invoice;
export declare function InvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoice;
export declare function InvoiceToJSON(value?: Invoice | null): any;