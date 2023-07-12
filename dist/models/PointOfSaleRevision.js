"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointOfSaleRevisionToJSON = exports.PointOfSaleRevisionFromJSONTyped = exports.PointOfSaleRevisionFromJSON = exports.instanceOfPointOfSaleRevision = void 0;
const runtime_1 = require("../runtime");
const ContainerRevision_1 = require("./ContainerRevision");
const PointOfSale_1 = require("./PointOfSale");
/**
 * Check if a given object implements the PointOfSaleRevision interface.
 */
function instanceOfPointOfSaleRevision(value) {
    let isInstance = true;
    isInstance = isInstance && "pointOfSale" in value;
    isInstance = isInstance && "revision" in value;
    isInstance = isInstance && "containers" in value;
    return isInstance;
}
exports.instanceOfPointOfSaleRevision = instanceOfPointOfSaleRevision;
function PointOfSaleRevisionFromJSON(json) {
    return PointOfSaleRevisionFromJSONTyped(json, false);
}
exports.PointOfSaleRevisionFromJSON = PointOfSaleRevisionFromJSON;
function PointOfSaleRevisionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pointOfSale': (0, PointOfSale_1.PointOfSaleFromJSON)(json['pointOfSale']),
        'revision': json['revision'],
        'containers': (json['containers'].map(ContainerRevision_1.ContainerRevisionFromJSON)),
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.PointOfSaleRevisionFromJSONTyped = PointOfSaleRevisionFromJSONTyped;
function PointOfSaleRevisionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pointOfSale': (0, PointOfSale_1.PointOfSaleToJSON)(value.pointOfSale),
        'revision': value.revision,
        'containers': (value.containers.map(ContainerRevision_1.ContainerRevisionToJSON)),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.PointOfSaleRevisionToJSON = PointOfSaleRevisionToJSON;
//# sourceMappingURL=PointOfSaleRevision.js.map