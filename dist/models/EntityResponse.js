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
exports.EntityResponseToJSON = exports.EntityResponseFromJSONTyped = exports.EntityResponseFromJSON = exports.instanceOfEntityResponse = void 0;
const runtime_1 = require("../runtime");
const ActionResponse_1 = require("./ActionResponse");
/**
 * Check if a given object implements the EntityResponse interface.
 */
function instanceOfEntityResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEntityResponse = instanceOfEntityResponse;
function EntityResponseFromJSON(json) {
    return EntityResponseFromJSONTyped(json, false);
}
exports.EntityResponseFromJSON = EntityResponseFromJSON;
function EntityResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entity': !(0, runtime_1.exists)(json, 'entity') ? undefined : json['entity'],
        'actions': !(0, runtime_1.exists)(json, 'actions') ? undefined : (json['actions'].map(ActionResponse_1.ActionResponseFromJSON)),
    };
}
exports.EntityResponseFromJSONTyped = EntityResponseFromJSONTyped;
function EntityResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'entity': value.entity,
        'actions': value.actions === undefined ? undefined : (value.actions.map(ActionResponse_1.ActionResponseToJSON)),
    };
}
exports.EntityResponseToJSON = EntityResponseToJSON;
//# sourceMappingURL=EntityResponse.js.map