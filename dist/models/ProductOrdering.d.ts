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
import type { PointOfSale } from './PointOfSale';
import type { Product } from './Product';
/**
 *
 * @export
 * @interface ProductOrdering
 */
export interface ProductOrdering {
    /**
     *
     * @type {PointOfSale}
     * @memberof ProductOrdering
     */
    pos: PointOfSale;
    /**
     *
     * @type {Product}
     * @memberof ProductOrdering
     */
    product: Product;
    /**
     * The order number of the product in the pointOfSale.
     * @type {number}
     * @memberof ProductOrdering
     */
    order: number;
}
/**
 * Check if a given object implements the ProductOrdering interface.
 */
export declare function instanceOfProductOrdering(value: object): boolean;
export declare function ProductOrderingFromJSON(json: any): ProductOrdering;
export declare function ProductOrderingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOrdering;
export declare function ProductOrderingToJSON(value?: ProductOrdering | null): any;
