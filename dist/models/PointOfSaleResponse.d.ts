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
import type { BaseUserResponse } from './BaseUserResponse';
/**
 *
 * @export
 * @interface PointOfSaleResponse
 */
export interface PointOfSaleResponse {
    /**
     *
     * @type {BaseUserResponse}
     * @memberof PointOfSaleResponse
     */
    owner?: BaseUserResponse;
    /**
     * Revision of the POS
     * @type {number}
     * @memberof PointOfSaleResponse
     */
    revision: number;
    /**
     * Whether this POS requires users to
authenticate themselves before making a transaction
     * @type {boolean}
     * @memberof PointOfSaleResponse
     */
    useAuthentication: boolean;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof PointOfSaleResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof PointOfSaleResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof PointOfSaleResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof PointOfSaleResponse
     */
    version?: number;
}
/**
 * Check if a given object implements the PointOfSaleResponse interface.
 */
export declare function instanceOfPointOfSaleResponse(value: object): boolean;
export declare function PointOfSaleResponseFromJSON(json: any): PointOfSaleResponse;
export declare function PointOfSaleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointOfSaleResponse;
export declare function PointOfSaleResponseToJSON(value?: PointOfSaleResponse | null): any;