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
import type { RelationResponse } from './RelationResponse';
/**
 *
 * @export
 * @interface ActionResponse
 */
export interface ActionResponse {
    /**
     * The name of the action performed on the entity.
     * @type {string}
     * @memberof ActionResponse
     */
    action?: string;
    /**
     *
     * @type {Array<RelationResponse>}
     * @memberof ActionResponse
     */
    relations?: Array<RelationResponse>;
}
/**
 * Check if a given object implements the ActionResponse interface.
 */
export declare function instanceOfActionResponse(value: object): boolean;
export declare function ActionResponseFromJSON(json: any): ActionResponse;
export declare function ActionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionResponse;
export declare function ActionResponseToJSON(value?: ActionResponse | null): any;