"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointOfSaleResponseToJSON = exports.PointOfSaleResponseFromJSONTyped = exports.PointOfSaleResponseFromJSON = exports.instanceOfPointOfSaleResponse = void 0;
const runtime_1 = require("../runtime");
const BaseUserResponse_1 = require("./BaseUserResponse");
/**
 * Check if a given object implements the PointOfSaleResponse interface.
 */
function instanceOfPointOfSaleResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "revision" in value;
    isInstance = isInstance && "useAuthentication" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfPointOfSaleResponse = instanceOfPointOfSaleResponse;
function PointOfSaleResponseFromJSON(json) {
    return PointOfSaleResponseFromJSONTyped(json, false);
}
exports.PointOfSaleResponseFromJSON = PointOfSaleResponseFromJSON;
function PointOfSaleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : (0, BaseUserResponse_1.BaseUserResponseFromJSON)(json['owner']),
        'revision': json['revision'],
        'useAuthentication': json['useAuthentication'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.PointOfSaleResponseFromJSONTyped = PointOfSaleResponseFromJSONTyped;
function PointOfSaleResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'owner': (0, BaseUserResponse_1.BaseUserResponseToJSON)(value.owner),
        'revision': value.revision,
        'useAuthentication': value.useAuthentication,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.PointOfSaleResponseToJSON = PointOfSaleResponseToJSON;
//# sourceMappingURL=PointOfSaleResponse.js.map