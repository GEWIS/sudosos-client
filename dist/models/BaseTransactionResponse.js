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
exports.BaseTransactionResponseToJSON = exports.BaseTransactionResponseFromJSONTyped = exports.BaseTransactionResponseFromJSON = exports.instanceOfBaseTransactionResponse = void 0;
const runtime_1 = require("../runtime");
const BasePointOfSaleResponse_1 = require("./BasePointOfSaleResponse");
const Dinero_1 = require("./Dinero");
const UserResponse_1 = require("./UserResponse");
/**
 * Check if a given object implements the BaseTransactionResponse interface.
 */
function instanceOfBaseTransactionResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBaseTransactionResponse = instanceOfBaseTransactionResponse;
function BaseTransactionResponseFromJSON(json) {
    return BaseTransactionResponseFromJSONTyped(json, false);
}
exports.BaseTransactionResponseFromJSON = BaseTransactionResponseFromJSON;
function BaseTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'from': (0, UserResponse_1.UserResponseFromJSON)(json['from']),
        'createdBy': !(0, runtime_1.exists)(json, 'createdBy') ? undefined : (0, UserResponse_1.UserResponseFromJSON)(json['createdBy']),
        'pointOfSale': !(0, runtime_1.exists)(json, 'pointOfSale') ? undefined : (0, BasePointOfSaleResponse_1.BasePointOfSaleResponseFromJSON)(json['pointOfSale']),
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : (0, Dinero_1.DineroFromJSON)(json['value']),
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BaseTransactionResponseFromJSONTyped = BaseTransactionResponseFromJSONTyped;
function BaseTransactionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'from': (0, UserResponse_1.UserResponseToJSON)(value.from),
        'createdBy': (0, UserResponse_1.UserResponseToJSON)(value.createdBy),
        'pointOfSale': (0, BasePointOfSaleResponse_1.BasePointOfSaleResponseToJSON)(value.pointOfSale),
        'value': (0, Dinero_1.DineroToJSON)(value.value),
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BaseTransactionResponseToJSON = BaseTransactionResponseToJSON;
//# sourceMappingURL=BaseTransactionResponse.js.map