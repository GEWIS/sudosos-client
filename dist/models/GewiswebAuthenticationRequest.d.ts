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
 * @interface GewiswebAuthenticationRequest
 */
export interface GewiswebAuthenticationRequest {
    /**
     * The gewisweb JWT token.
     * @type {string}
     * @memberof GewiswebAuthenticationRequest
     */
    token: string;
    /**
     * The nonce used in the newly signed JWT token.
     * @type {string}
     * @memberof GewiswebAuthenticationRequest
     */
    nonce: string;
}
/**
 * Check if a given object implements the GewiswebAuthenticationRequest interface.
 */
export declare function instanceOfGewiswebAuthenticationRequest(value: object): boolean;
export declare function GewiswebAuthenticationRequestFromJSON(json: any): GewiswebAuthenticationRequest;
export declare function GewiswebAuthenticationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GewiswebAuthenticationRequest;
export declare function GewiswebAuthenticationRequestToJSON(value?: GewiswebAuthenticationRequest | null): any;
