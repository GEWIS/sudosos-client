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
exports.BaseResponseToJSON = exports.BaseResponseFromJSONTyped = exports.BaseResponseFromJSON = exports.instanceOfBaseResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BaseResponse interface.
 */
function instanceOfBaseResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBaseResponse = instanceOfBaseResponse;
function BaseResponseFromJSON(json) {
    return BaseResponseFromJSONTyped(json, false);
}
exports.BaseResponseFromJSON = BaseResponseFromJSON;
function BaseResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BaseResponseFromJSONTyped = BaseResponseFromJSONTyped;
function BaseResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BaseResponseToJSON = BaseResponseToJSON;
//# sourceMappingURL=BaseResponse.js.map