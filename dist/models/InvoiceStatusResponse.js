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
exports.InvoiceStatusResponseToJSON = exports.InvoiceStatusResponseFromJSONTyped = exports.InvoiceStatusResponseFromJSON = exports.instanceOfInvoiceStatusResponse = void 0;
const BaseUserResponse_1 = require("./BaseUserResponse");
/**
 * Check if a given object implements the InvoiceStatusResponse interface.
 */
function instanceOfInvoiceStatusResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "changedBy" in value;
    isInstance = isInstance && "state" in value;
    return isInstance;
}
exports.instanceOfInvoiceStatusResponse = instanceOfInvoiceStatusResponse;
function InvoiceStatusResponseFromJSON(json) {
    return InvoiceStatusResponseFromJSONTyped(json, false);
}
exports.InvoiceStatusResponseFromJSON = InvoiceStatusResponseFromJSON;
function InvoiceStatusResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'changedBy': (0, BaseUserResponse_1.BaseUserResponseFromJSON)(json['changedBy']),
        'state': json['state'],
    };
}
exports.InvoiceStatusResponseFromJSONTyped = InvoiceStatusResponseFromJSONTyped;
function InvoiceStatusResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'changedBy': (0, BaseUserResponse_1.BaseUserResponseToJSON)(value.changedBy),
        'state': value.state,
    };
}
exports.InvoiceStatusResponseToJSON = InvoiceStatusResponseToJSON;
//# sourceMappingURL=InvoiceStatusResponse.js.map