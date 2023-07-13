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
import type { BaseUserResponse } from './BaseUserResponse';
import type { InvoiceStatusResponse } from './InvoiceStatusResponse';
import type { TransferResponse } from './TransferResponse';
/**
 *
 * @export
 * @interface BaseInvoiceResponse
 */
export interface BaseInvoiceResponse {
    /**
     *
     * @type {BaseUserResponse}
     * @memberof BaseInvoiceResponse
     */
    to: BaseUserResponse;
    /**
     * Name of the addressed.
     * @type {string}
     * @memberof BaseInvoiceResponse
     */
    addressee: string;
    /**
     * Description of the invoice.
     * @type {string}
     * @memberof BaseInvoiceResponse
     */
    description: string;
    /**
     *
     * @type {InvoiceStatusResponse}
     * @memberof BaseInvoiceResponse
     */
    currentState: InvoiceStatusResponse;
    /**
     *
     * @type {TransferResponse}
     * @memberof BaseInvoiceResponse
     */
    transfer?: TransferResponse;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof BaseInvoiceResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof BaseInvoiceResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof BaseInvoiceResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof BaseInvoiceResponse
     */
    version?: number;
}
/**
 * Check if a given object implements the BaseInvoiceResponse interface.
 */
export declare function instanceOfBaseInvoiceResponse(value: object): boolean;
export declare function BaseInvoiceResponseFromJSON(json: any): BaseInvoiceResponse;
export declare function BaseInvoiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseInvoiceResponse;
export declare function BaseInvoiceResponseToJSON(value?: BaseInvoiceResponse | null): any;
