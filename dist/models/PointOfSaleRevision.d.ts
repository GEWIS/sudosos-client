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
import type { ContainerRevision } from './ContainerRevision';
import type { PointOfSale } from './PointOfSale';
/**
 *
 * @export
 * @interface PointOfSaleRevision
 */
export interface PointOfSaleRevision {
    /**
     *
     * @type {PointOfSale}
     * @memberof PointOfSaleRevision
     */
    pointOfSale: PointOfSale;
    /**
     * The revision number of this revision.
     * @type {number}
     * @memberof PointOfSaleRevision
     */
    revision: number;
    /**
     *
     * @type {Array<ContainerRevision>}
     * @memberof PointOfSaleRevision
     */
    containers: Array<ContainerRevision>;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof PointOfSaleRevision
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof PointOfSaleRevision
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof PointOfSaleRevision
     */
    version?: number;
}
/**
 * Check if a given object implements the PointOfSaleRevision interface.
 */
export declare function instanceOfPointOfSaleRevision(value: object): boolean;
export declare function PointOfSaleRevisionFromJSON(json: any): PointOfSaleRevision;
export declare function PointOfSaleRevisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointOfSaleRevision;
export declare function PointOfSaleRevisionToJSON(value?: PointOfSaleRevision | null): any;
