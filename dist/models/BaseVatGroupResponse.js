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
exports.BaseVatGroupResponseToJSON = exports.BaseVatGroupResponseFromJSONTyped = exports.BaseVatGroupResponseFromJSON = exports.instanceOfBaseVatGroupResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BaseVatGroupResponse interface.
 */
function instanceOfBaseVatGroupResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "percentage" in value;
    isInstance = isInstance && "hidden" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBaseVatGroupResponse = instanceOfBaseVatGroupResponse;
function BaseVatGroupResponseFromJSON(json) {
    return BaseVatGroupResponseFromJSONTyped(json, false);
}
exports.BaseVatGroupResponseFromJSON = BaseVatGroupResponseFromJSON;
function BaseVatGroupResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'percentage': json['percentage'],
        'hidden': json['hidden'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BaseVatGroupResponseFromJSONTyped = BaseVatGroupResponseFromJSONTyped;
function BaseVatGroupResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'percentage': value.percentage,
        'hidden': value.hidden,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BaseVatGroupResponseToJSON = BaseVatGroupResponseToJSON;
//# sourceMappingURL=BaseVatGroupResponse.js.map