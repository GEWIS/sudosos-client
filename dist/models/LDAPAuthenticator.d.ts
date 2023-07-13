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
 * @interface LDAPAuthenticator
 */
export interface LDAPAuthenticator {
    /**
     * The associated AD account name
     * @type {string}
     * @memberof LDAPAuthenticator
     */
    accountName: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof LDAPAuthenticator
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof LDAPAuthenticator
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof LDAPAuthenticator
     */
    version?: number;
}
/**
 * Check if a given object implements the LDAPAuthenticator interface.
 */
export declare function instanceOfLDAPAuthenticator(value: object): boolean;
export declare function LDAPAuthenticatorFromJSON(json: any): LDAPAuthenticator;
export declare function LDAPAuthenticatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): LDAPAuthenticator;
export declare function LDAPAuthenticatorToJSON(value?: LDAPAuthenticator | null): any;
