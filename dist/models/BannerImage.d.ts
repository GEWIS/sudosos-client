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
 * @interface BannerImage
 */
export interface BannerImage {
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof BannerImage
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof BannerImage
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof BannerImage
     */
    version?: number;
}
/**
 * Check if a given object implements the BannerImage interface.
 */
export declare function instanceOfBannerImage(value: object): boolean;
export declare function BannerImageFromJSON(json: any): BannerImage;
export declare function BannerImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): BannerImage;
export declare function BannerImageToJSON(value?: BannerImage | null): any;
