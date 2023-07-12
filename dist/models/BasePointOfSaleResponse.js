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
exports.BasePointOfSaleResponseToJSON = exports.BasePointOfSaleResponseFromJSONTyped = exports.BasePointOfSaleResponseFromJSON = exports.instanceOfBasePointOfSaleResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BasePointOfSaleResponse interface.
 */
function instanceOfBasePointOfSaleResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBasePointOfSaleResponse = instanceOfBasePointOfSaleResponse;
function BasePointOfSaleResponseFromJSON(json) {
    return BasePointOfSaleResponseFromJSONTyped(json, false);
}
exports.BasePointOfSaleResponseFromJSON = BasePointOfSaleResponseFromJSON;
function BasePointOfSaleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BasePointOfSaleResponseFromJSONTyped = BasePointOfSaleResponseFromJSONTyped;
function BasePointOfSaleResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BasePointOfSaleResponseToJSON = BasePointOfSaleResponseToJSON;
//# sourceMappingURL=BasePointOfSaleResponse.js.map