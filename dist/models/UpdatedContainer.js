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
exports.UpdatedContainerToJSON = exports.UpdatedContainerFromJSONTyped = exports.UpdatedContainerFromJSON = exports.instanceOfUpdatedContainer = void 0;
const runtime_1 = require("../runtime");
const Container_1 = require("./Container");
const Product_1 = require("./Product");
/**
 * Check if a given object implements the UpdatedContainer interface.
 */
function instanceOfUpdatedContainer(value) {
    let isInstance = true;
    isInstance = isInstance && "container" in value;
    isInstance = isInstance && "products" in value;
    return isInstance;
}
exports.instanceOfUpdatedContainer = instanceOfUpdatedContainer;
function UpdatedContainerFromJSON(json) {
    return UpdatedContainerFromJSONTyped(json, false);
}
exports.UpdatedContainerFromJSON = UpdatedContainerFromJSON;
function UpdatedContainerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'container': (0, Container_1.ContainerFromJSON)(json['container']),
        'products': (json['products'].map(Product_1.ProductFromJSON)),
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.UpdatedContainerFromJSONTyped = UpdatedContainerFromJSONTyped;
function UpdatedContainerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'container': (0, Container_1.ContainerToJSON)(value.container),
        'products': (value.products.map(Product_1.ProductToJSON)),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.UpdatedContainerToJSON = UpdatedContainerToJSON;
//# sourceMappingURL=UpdatedContainer.js.map