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
 * @interface UpdateNfcRequest
 */
export interface UpdateNfcRequest {
    /**
     * The NFC code to set
     * @type {string}
     * @memberof UpdateNfcRequest
     */
    nfcCode: string;
}
/**
 * Check if a given object implements the UpdateNfcRequest interface.
 */
export declare function instanceOfUpdateNfcRequest(value: object): boolean;
export declare function UpdateNfcRequestFromJSON(json: any): UpdateNfcRequest;
export declare function UpdateNfcRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNfcRequest;
export declare function UpdateNfcRequestToJSON(value?: UpdateNfcRequest | null): any;