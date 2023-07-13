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
 * @interface NfcAuthenticator
 */
export interface NfcAuthenticator {
    /**
     * The UID of the NFC chip
     * @type {string}
     * @memberof NfcAuthenticator
     */
    nfcCode: string;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof NfcAuthenticator
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof NfcAuthenticator
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof NfcAuthenticator
     */
    version?: number;
}
/**
 * Check if a given object implements the NfcAuthenticator interface.
 */
export declare function instanceOfNfcAuthenticator(value: object): boolean;
export declare function NfcAuthenticatorFromJSON(json: any): NfcAuthenticator;
export declare function NfcAuthenticatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): NfcAuthenticator;
export declare function NfcAuthenticatorToJSON(value?: NfcAuthenticator | null): any;
