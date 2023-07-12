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
 * @interface SimpleFileRequest
 */
export interface SimpleFileRequest {
    /**
     * Name of the file
     * @type {string}
     * @memberof SimpleFileRequest
     */
    name?: string;
}
/**
 * Check if a given object implements the SimpleFileRequest interface.
 */
export declare function instanceOfSimpleFileRequest(value: object): boolean;
export declare function SimpleFileRequestFromJSON(json: any): SimpleFileRequest;
export declare function SimpleFileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleFileRequest;
export declare function SimpleFileRequestToJSON(value?: SimpleFileRequest | null): any;