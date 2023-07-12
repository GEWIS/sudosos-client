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
exports.ProductCategoryRequestToJSON = exports.ProductCategoryRequestFromJSONTyped = exports.ProductCategoryRequestFromJSON = exports.instanceOfProductCategoryRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ProductCategoryRequest interface.
 */
function instanceOfProductCategoryRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProductCategoryRequest = instanceOfProductCategoryRequest;
function ProductCategoryRequestFromJSON(json) {
    return ProductCategoryRequestFromJSONTyped(json, false);
}
exports.ProductCategoryRequestFromJSON = ProductCategoryRequestFromJSON;
function ProductCategoryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.ProductCategoryRequestFromJSONTyped = ProductCategoryRequestFromJSONTyped;
function ProductCategoryRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.ProductCategoryRequestToJSON = ProductCategoryRequestToJSON;
//# sourceMappingURL=ProductCategoryRequest.js.map