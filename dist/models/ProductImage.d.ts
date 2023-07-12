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
 * @interface ProductImage
 */
export interface ProductImage {
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof ProductImage
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof ProductImage
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof ProductImage
     */
    version?: number;
}
/**
 * Check if a given object implements the ProductImage interface.
 */
export declare function instanceOfProductImage(value: object): boolean;
export declare function ProductImageFromJSON(json: any): ProductImage;
export declare function ProductImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductImage;
export declare function ProductImageToJSON(value?: ProductImage | null): any;