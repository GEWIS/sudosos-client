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
/**
 *
 * @export
 * @interface UpdateKeyResponse
 */
export interface UpdateKeyResponse {
    /**
     * The key to return
     * @type {string}
     * @memberof UpdateKeyResponse
     */
    key: string;
}
/**
 * Check if a given object implements the UpdateKeyResponse interface.
 */
export declare function instanceOfUpdateKeyResponse(value: object): boolean;
export declare function UpdateKeyResponseFromJSON(json: any): UpdateKeyResponse;
export declare function UpdateKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateKeyResponse;
export declare function UpdateKeyResponseToJSON(value?: UpdateKeyResponse | null): any;
