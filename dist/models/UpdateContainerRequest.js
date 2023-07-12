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
exports.UpdateContainerRequestToJSON = exports.UpdateContainerRequestFromJSONTyped = exports.UpdateContainerRequestFromJSON = exports.instanceOfUpdateContainerRequest = void 0;
/**
 * Check if a given object implements the UpdateContainerRequest interface.
 */
function instanceOfUpdateContainerRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "products" in value;
    isInstance = isInstance && "_public" in value;
    return isInstance;
}
exports.instanceOfUpdateContainerRequest = instanceOfUpdateContainerRequest;
function UpdateContainerRequestFromJSON(json) {
    return UpdateContainerRequestFromJSONTyped(json, false);
}
exports.UpdateContainerRequestFromJSON = UpdateContainerRequestFromJSON;
function UpdateContainerRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'products': json['products'],
        '_public': json['public'],
    };
}
exports.UpdateContainerRequestFromJSONTyped = UpdateContainerRequestFromJSONTyped;
function UpdateContainerRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'products': value.products,
        'public': value._public,
    };
}
exports.UpdateContainerRequestToJSON = UpdateContainerRequestToJSON;
//# sourceMappingURL=UpdateContainerRequest.js.map