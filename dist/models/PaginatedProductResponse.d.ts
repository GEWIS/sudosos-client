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
import type { PaginationResult } from './PaginationResult';
import type { ProductResponse } from './ProductResponse';
/**
 *
 * @export
 * @interface PaginatedProductResponse
 */
export interface PaginatedProductResponse {
    /**
     *
     * @type {PaginationResult}
     * @memberof PaginatedProductResponse
     */
    pagination?: PaginationResult;
    /**
     *
     * @type {Array<ProductResponse>}
     * @memberof PaginatedProductResponse
     */
    records?: Array<ProductResponse>;
}
/**
 * Check if a given object implements the PaginatedProductResponse interface.
 */
export declare function instanceOfPaginatedProductResponse(value: object): boolean;
export declare function PaginatedProductResponseFromJSON(json: any): PaginatedProductResponse;
export declare function PaginatedProductResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedProductResponse;
export declare function PaginatedProductResponseToJSON(value?: PaginatedProductResponse | null): any;