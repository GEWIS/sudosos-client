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
 * @interface AuthenticationNfcRequest
 */
export interface AuthenticationNfcRequest {
    /**
     *
     * @type {string}
     * @memberof AuthenticationNfcRequest
     */
    nfcCode: string;
}
/**
 * Check if a given object implements the AuthenticationNfcRequest interface.
 */
export declare function instanceOfAuthenticationNfcRequest(value: object): boolean;
export declare function AuthenticationNfcRequestFromJSON(json: any): AuthenticationNfcRequest;
export declare function AuthenticationNfcRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationNfcRequest;
export declare function AuthenticationNfcRequestToJSON(value?: AuthenticationNfcRequest | null): any;