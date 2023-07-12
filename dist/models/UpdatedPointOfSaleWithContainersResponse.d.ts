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
import type { ContainerWithProductsResponse } from './ContainerWithProductsResponse';
/**
 *
 * @export
 * @interface UpdatedPointOfSaleWithContainersResponse
 */
export interface UpdatedPointOfSaleWithContainersResponse {
    /**
     *
     * @type {Array<ContainerWithProductsResponse>}
     * @memberof UpdatedPointOfSaleWithContainersResponse
     */
    containers: Array<ContainerWithProductsResponse>;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof UpdatedPointOfSaleWithContainersResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof UpdatedPointOfSaleWithContainersResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof UpdatedPointOfSaleWithContainersResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof UpdatedPointOfSaleWithContainersResponse
     */
    version?: number;
}
/**
 * Check if a given object implements the UpdatedPointOfSaleWithContainersResponse interface.
 */
export declare function instanceOfUpdatedPointOfSaleWithContainersResponse(value: object): boolean;
export declare function UpdatedPointOfSaleWithContainersResponseFromJSON(json: any): UpdatedPointOfSaleWithContainersResponse;
export declare function UpdatedPointOfSaleWithContainersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatedPointOfSaleWithContainersResponse;
export declare function UpdatedPointOfSaleWithContainersResponseToJSON(value?: UpdatedPointOfSaleWithContainersResponse | null): any;
