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
exports.ProductCategoryToJSON = exports.ProductCategoryFromJSONTyped = exports.ProductCategoryFromJSON = exports.instanceOfProductCategory = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ProductCategory interface.
 */
function instanceOfProductCategory(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfProductCategory = instanceOfProductCategory;
function ProductCategoryFromJSON(json) {
    return ProductCategoryFromJSONTyped(json, false);
}
exports.ProductCategoryFromJSON = ProductCategoryFromJSON;
function ProductCategoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.ProductCategoryFromJSONTyped = ProductCategoryFromJSONTyped;
function ProductCategoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.ProductCategoryToJSON = ProductCategoryToJSON;
//# sourceMappingURL=ProductCategory.js.map