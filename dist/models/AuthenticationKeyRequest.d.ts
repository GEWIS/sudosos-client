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
 * @interface AuthenticationKeyRequest
 */
export interface AuthenticationKeyRequest {
    /**
     *
     * @type {number}
     * @memberof AuthenticationKeyRequest
     */
    userId: number;
    /**
     * The password
     * @type {string}
     * @memberof AuthenticationKeyRequest
     */
    key: string;
}
/**
 * Check if a given object implements the AuthenticationKeyRequest interface.
 */
export declare function instanceOfAuthenticationKeyRequest(value: object): boolean;
export declare function AuthenticationKeyRequestFromJSON(json: any): AuthenticationKeyRequest;
export declare function AuthenticationKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationKeyRequest;
export declare function AuthenticationKeyRequestToJSON(value?: AuthenticationKeyRequest | null): any;
