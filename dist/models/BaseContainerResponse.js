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
exports.BaseContainerResponseToJSON = exports.BaseContainerResponseFromJSONTyped = exports.BaseContainerResponseFromJSON = exports.instanceOfBaseContainerResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BaseContainerResponse interface.
 */
function instanceOfBaseContainerResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "_public" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBaseContainerResponse = instanceOfBaseContainerResponse;
function BaseContainerResponseFromJSON(json) {
    return BaseContainerResponseFromJSONTyped(json, false);
}
exports.BaseContainerResponseFromJSON = BaseContainerResponseFromJSON;
function BaseContainerResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        '_public': json['public'],
        'revision': !(0, runtime_1.exists)(json, 'revision') ? undefined : json['revision'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BaseContainerResponseFromJSONTyped = BaseContainerResponseFromJSONTyped;
function BaseContainerResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'public': value._public,
        'revision': value.revision,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BaseContainerResponseToJSON = BaseContainerResponseToJSON;
//# sourceMappingURL=BaseContainerResponse.js.map