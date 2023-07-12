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
/**
 *
 * @export
 * @interface PaginationResult
 */
export interface PaginationResult {
    /**
     * Number of records queried
     * @type {number}
     * @memberof PaginationResult
     */
    take?: number;
    /**
     * Number of skipped records
     * @type {number}
     * @memberof PaginationResult
     */
    skip?: number;
    /**
     * Total number of resulting records
     * @type {number}
     * @memberof PaginationResult
     */
    count?: number;
}
/**
 * Check if a given object implements the PaginationResult interface.
 */
export declare function instanceOfPaginationResult(value: object): boolean;
export declare function PaginationResultFromJSON(json: any): PaginationResult;
export declare function PaginationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationResult;
export declare function PaginationResultToJSON(value?: PaginationResult | null): any;
