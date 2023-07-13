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
import type { BaseUserResponse } from './BaseUserResponse';
/**
 *
 * @export
 * @interface ContainerResponse
 */
export interface ContainerResponse {
    /**
     *
     * @type {BaseUserResponse}
     * @memberof ContainerResponse
     */
    owner: BaseUserResponse;
    /**
     * The unique id of the entity.
     * @type {number}
     * @memberof ContainerResponse
     */
    id: number;
    /**
     * The creation Date of the entity.
     * @type {string}
     * @memberof ContainerResponse
     */
    createdAt?: string;
    /**
     * The last update Date of the entity.
     * @type {string}
     * @memberof ContainerResponse
     */
    updatedAt?: string;
    /**
     * The version of the entity.
     * @type {number}
     * @memberof ContainerResponse
     */
    version?: number;
}
/**
 * Check if a given object implements the ContainerResponse interface.
 */
export declare function instanceOfContainerResponse(value: object): boolean;
export declare function ContainerResponseFromJSON(json: any): ContainerResponse;
export declare function ContainerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerResponse;
export declare function ContainerResponseToJSON(value?: ContainerResponse | null): any;
