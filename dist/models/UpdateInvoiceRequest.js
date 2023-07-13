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
exports.UpdateInvoiceRequestToJSON = exports.UpdateInvoiceRequestFromJSONTyped = exports.UpdateInvoiceRequestFromJSON = exports.instanceOfUpdateInvoiceRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UpdateInvoiceRequest interface.
 */
function instanceOfUpdateInvoiceRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "addressee" in value;
    isInstance = isInstance && "description" in value;
    return isInstance;
}
exports.instanceOfUpdateInvoiceRequest = instanceOfUpdateInvoiceRequest;
function UpdateInvoiceRequestFromJSON(json) {
    return UpdateInvoiceRequestFromJSONTyped(json, false);
}
exports.UpdateInvoiceRequestFromJSON = UpdateInvoiceRequestFromJSON;
function UpdateInvoiceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'byId': !(0, runtime_1.exists)(json, 'byId') ? undefined : json['byId'],
        'addressee': json['addressee'],
        'description': json['description'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
    };
}
exports.UpdateInvoiceRequestFromJSONTyped = UpdateInvoiceRequestFromJSONTyped;
function UpdateInvoiceRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'byId': value.byId,
        'addressee': value.addressee,
        'description': value.description,
        'state': value.state,
    };
}
exports.UpdateInvoiceRequestToJSON = UpdateInvoiceRequestToJSON;
//# sourceMappingURL=UpdateInvoiceRequest.js.map