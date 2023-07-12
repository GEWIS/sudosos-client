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
exports.VatGroupRequestToJSON = exports.VatGroupRequestFromJSONTyped = exports.VatGroupRequestFromJSON = exports.instanceOfVatGroupRequest = void 0;
/**
 * Check if a given object implements the VatGroupRequest interface.
 */
function instanceOfVatGroupRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "percentage" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "hidden" in value;
    return isInstance;
}
exports.instanceOfVatGroupRequest = instanceOfVatGroupRequest;
function VatGroupRequestFromJSON(json) {
    return VatGroupRequestFromJSONTyped(json, false);
}
exports.VatGroupRequestFromJSON = VatGroupRequestFromJSON;
function VatGroupRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'percentage': json['percentage'],
        'name': json['name'],
        'deleted': json['deleted'],
        'hidden': json['hidden'],
    };
}
exports.VatGroupRequestFromJSONTyped = VatGroupRequestFromJSONTyped;
function VatGroupRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'percentage': value.percentage,
        'name': value.name,
        'deleted': value.deleted,
        'hidden': value.hidden,
    };
}
exports.VatGroupRequestToJSON = VatGroupRequestToJSON;
//# sourceMappingURL=VatGroupRequest.js.map