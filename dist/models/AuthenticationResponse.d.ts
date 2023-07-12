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
import type { UserResponse } from './UserResponse';
/**
 *
 * @export
 * @interface AuthenticationResponse
 */
export interface AuthenticationResponse {
    /**
     *
     * @type {UserResponse}
     * @memberof AuthenticationResponse
     */
    user?: UserResponse;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthenticationResponse
     */
    roles?: Array<string>;
    /**
     *
     * @type {Array<UserResponse>}
     * @memberof AuthenticationResponse
     */
    organs?: Array<UserResponse>;
    /**
     * The JWT token that can be used as Bearer token for authentication.
     * @type {string}
     * @memberof AuthenticationResponse
     */
    token?: string;
    /**
     * Whether the related user has accepted the Terms of Service
 or is not required to.
     * @type {string}
     * @memberof AuthenticationResponse
     */
    acceptedToS?: string;
}
/**
 * Check if a given object implements the AuthenticationResponse interface.
 */
export declare function instanceOfAuthenticationResponse(value: object): boolean;
export declare function AuthenticationResponseFromJSON(json: any): AuthenticationResponse;
export declare function AuthenticationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationResponse;
export declare function AuthenticationResponseToJSON(value?: AuthenticationResponse | null): any;
