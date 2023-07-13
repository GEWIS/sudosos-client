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
import type { Product } from './Product';
/**
 *
 * @export
 * @interface UpdatedProduct
 */
export interface UpdatedProduct {
    /**
     *
     * @type {Product}
     * @memberof UpdatedProduct
     */
    product: Product;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof UpdatedProduct
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof UpdatedProduct
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof UpdatedProduct
     */
    version?: number;
}
/**
 * Check if a given object implements the UpdatedProduct interface.
 */
export declare function instanceOfUpdatedProduct(value: object): boolean;
export declare function UpdatedProductFromJSON(json: any): UpdatedProduct;
export declare function UpdatedProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatedProduct;
export declare function UpdatedProductToJSON(value?: UpdatedProduct | null): any;
