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
import type { DineroObjectRequest } from './DineroObjectRequest';
/**
 *
 * @export
 * @interface InvoiceEntryRequest
 */
export interface InvoiceEntryRequest {
    /**
     * The description of the entry
     * @type {string}
     * @memberof InvoiceEntryRequest
     */
    description: string;
    /**
     * Amount of item sold.
     * @type {number}
     * @memberof InvoiceEntryRequest
     */
    amount: number;
    /**
     *
     * @type {DineroObjectRequest}
     * @memberof InvoiceEntryRequest
     */
    priceInclVat: DineroObjectRequest;
    /**
     * The percentage of VAT applied to this item
     * @type {number}
     * @memberof InvoiceEntryRequest
     */
    vatPercentage: number;
}
/**
 * Check if a given object implements the InvoiceEntryRequest interface.
 */
export declare function instanceOfInvoiceEntryRequest(value: object): boolean;
export declare function InvoiceEntryRequestFromJSON(json: any): InvoiceEntryRequest;
export declare function InvoiceEntryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceEntryRequest;
export declare function InvoiceEntryRequestToJSON(value?: InvoiceEntryRequest | null): any;
