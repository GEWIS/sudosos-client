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
 * @interface LocalAuthenticator
 */
export interface LocalAuthenticator {
    /**
     * The Password code of this user (hashed)
     * @type {string}
     * @memberof LocalAuthenticator
     */
    hash: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof LocalAuthenticator
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof LocalAuthenticator
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof LocalAuthenticator
     */
    version?: number;
}
/**
 * Check if a given object implements the LocalAuthenticator interface.
 */
export declare function instanceOfLocalAuthenticator(value: object): boolean;
export declare function LocalAuthenticatorFromJSON(json: any): LocalAuthenticator;
export declare function LocalAuthenticatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalAuthenticator;
export declare function LocalAuthenticatorToJSON(value?: LocalAuthenticator | null): any;