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
 * @interface AuthenticationMockRequest
 */
export interface AuthenticationMockRequest {
    /**
     *
     * @type {number}
     * @memberof AuthenticationMockRequest
     */
    userId: number;
    /**
     *
     * @type {string}
     * @memberof AuthenticationMockRequest
     */
    nonce: string;
}
/**
 * Check if a given object implements the AuthenticationMockRequest interface.
 */
export declare function instanceOfAuthenticationMockRequest(value: object): boolean;
export declare function AuthenticationMockRequestFromJSON(json: any): AuthenticationMockRequest;
export declare function AuthenticationMockRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationMockRequest;
export declare function AuthenticationMockRequestToJSON(value?: AuthenticationMockRequest | null): any;
