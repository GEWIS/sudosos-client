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
import type { BaseUserResponse } from './BaseUserResponse';
import type { DineroObjectResponse } from './DineroObjectResponse';
/**
 *
 * @export
 * @interface BoilerPayoutRequestResponse
 */
export interface BoilerPayoutRequestResponse {
    /**
     *
     * @type {BaseUserResponse}
     * @memberof BoilerPayoutRequestResponse
     */
    requestedBy: BaseUserResponse;
    /**
     *
     * @type {BaseUserResponse}
     * @memberof BoilerPayoutRequestResponse
     */
    approvedBy?: BaseUserResponse;
    /**
     *
     * @type {DineroObjectResponse}
     * @memberof BoilerPayoutRequestResponse
     */
    amount: DineroObjectResponse;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof BoilerPayoutRequestResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof BoilerPayoutRequestResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof BoilerPayoutRequestResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof BoilerPayoutRequestResponse
     */
    version?: number;
}
/**
 * Check if a given object implements the BoilerPayoutRequestResponse interface.
 */
export declare function instanceOfBoilerPayoutRequestResponse(value: object): boolean;
export declare function BoilerPayoutRequestResponseFromJSON(json: any): BoilerPayoutRequestResponse;
export declare function BoilerPayoutRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BoilerPayoutRequestResponse;
export declare function BoilerPayoutRequestResponseToJSON(value?: BoilerPayoutRequestResponse | null): any;
