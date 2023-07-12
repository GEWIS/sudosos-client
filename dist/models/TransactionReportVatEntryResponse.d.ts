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
import type { BaseVatGroupResponse } from './BaseVatGroupResponse';
import type { DineroObjectResponse } from './DineroObjectResponse';
/**
 *
 * @export
 * @interface TransactionReportVatEntryResponse
 */
export interface TransactionReportVatEntryResponse {
    /**
     *
     * @type {BaseVatGroupResponse}
     * @memberof TransactionReportVatEntryResponse
     */
    vat: BaseVatGroupResponse;
    /**
     *
     * @type {DineroObjectResponse}
     * @memberof TransactionReportVatEntryResponse
     */
    totalInclVat: DineroObjectResponse;
    /**
     *
     * @type {DineroObjectResponse}
     * @memberof TransactionReportVatEntryResponse
     */
    totalExclVat: DineroObjectResponse;
}
/**
 * Check if a given object implements the TransactionReportVatEntryResponse interface.
 */
export declare function instanceOfTransactionReportVatEntryResponse(value: object): boolean;
export declare function TransactionReportVatEntryResponseFromJSON(json: any): TransactionReportVatEntryResponse;
export declare function TransactionReportVatEntryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionReportVatEntryResponse;
export declare function TransactionReportVatEntryResponseToJSON(value?: TransactionReportVatEntryResponse | null): any;
