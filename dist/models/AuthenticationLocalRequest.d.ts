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
 * @interface AuthenticationLocalRequest
 */
export interface AuthenticationLocalRequest {
    /**
     * The users mail to authenticate
     * @type {string}
     * @memberof AuthenticationLocalRequest
     */
    accountMail: string;
    /**
     * The password
     * @type {string}
     * @memberof AuthenticationLocalRequest
     */
    password: string;
}
/**
 * Check if a given object implements the AuthenticationLocalRequest interface.
 */
export declare function instanceOfAuthenticationLocalRequest(value: object): boolean;
export declare function AuthenticationLocalRequestFromJSON(json: any): AuthenticationLocalRequest;
export declare function AuthenticationLocalRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationLocalRequest;
export declare function AuthenticationLocalRequestToJSON(value?: AuthenticationLocalRequest | null): any;
