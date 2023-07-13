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
exports.DineroToJSON = exports.DineroFromJSONTyped = exports.DineroFromJSON = exports.instanceOfDinero = void 0;
/**
 * Check if a given object implements the Dinero interface.
 */
function instanceOfDinero(value) {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "precision" in value;
    isInstance = isInstance && "currency" in value;
    return isInstance;
}
exports.instanceOfDinero = instanceOfDinero;
function DineroFromJSON(json) {
    return DineroFromJSONTyped(json, false);
}
exports.DineroFromJSON = DineroFromJSON;
function DineroFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'precision': json['precision'],
        'currency': json['currency'],
    };
}
exports.DineroFromJSONTyped = DineroFromJSONTyped;
function DineroToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'precision': value.precision,
        'currency': value.currency,
    };
}
exports.DineroToJSON = DineroToJSON;
//# sourceMappingURL=Dinero.js.map