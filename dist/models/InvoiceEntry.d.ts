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
import type { Dinero } from './Dinero';
import type { Invoice } from './Invoice';
/**
 *
 * @export
 * @interface InvoiceEntry
 */
export interface InvoiceEntry {
    /**
     *
     * @type {Invoice}
     * @memberof InvoiceEntry
     */
    invoice: Invoice;
    /**
     *
     * @type {Dinero}
     * @memberof InvoiceEntry
     */
    priceInclVat: Dinero;
    /**
     * The amount of items in the invoice entry.
     * @type {number}
     * @memberof InvoiceEntry
     */
    amount: number;
    /**
     * The description of the invoice entry item.
     * @type {string}
     * @memberof InvoiceEntry
     */
    description: string;
    /**
     * The percentage of vat applied to this item.
     * @type {number}
     * @memberof InvoiceEntry
     */
    vatPercentage: number;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof InvoiceEntry
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof InvoiceEntry
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof InvoiceEntry
     */
    version?: number;
}
/**
 * Check if a given object implements the InvoiceEntry interface.
 */
export declare function instanceOfInvoiceEntry(value: object): boolean;
export declare function InvoiceEntryFromJSON(json: any): InvoiceEntry;
export declare function InvoiceEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceEntry;
export declare function InvoiceEntryToJSON(value?: InvoiceEntry | null): any;
