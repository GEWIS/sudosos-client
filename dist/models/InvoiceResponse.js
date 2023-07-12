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
exports.InvoiceResponseToJSON = exports.InvoiceResponseFromJSONTyped = exports.InvoiceResponseFromJSON = exports.instanceOfInvoiceResponse = void 0;
const runtime_1 = require("../runtime");
const InvoiceEntryResponse_1 = require("./InvoiceEntryResponse");
/**
 * Check if a given object implements the InvoiceResponse interface.
 */
function instanceOfInvoiceResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfInvoiceResponse = instanceOfInvoiceResponse;
function InvoiceResponseFromJSON(json) {
    return InvoiceResponseFromJSONTyped(json, false);
}
exports.InvoiceResponseFromJSON = InvoiceResponseFromJSON;
function InvoiceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'invoiceEntries': !(0, runtime_1.exists)(json, 'invoiceEntries') ? undefined : (json['invoiceEntries'].map(InvoiceEntryResponse_1.InvoiceEntryResponseFromJSON)),
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.InvoiceResponseFromJSONTyped = InvoiceResponseFromJSONTyped;
function InvoiceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'invoiceEntries': value.invoiceEntries === undefined ? undefined : (value.invoiceEntries.map(InvoiceEntryResponse_1.InvoiceEntryResponseToJSON)),
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.InvoiceResponseToJSON = InvoiceResponseToJSON;
//# sourceMappingURL=InvoiceResponse.js.map