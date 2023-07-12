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
exports.InvoiceEntryToJSON = exports.InvoiceEntryFromJSONTyped = exports.InvoiceEntryFromJSON = exports.instanceOfInvoiceEntry = void 0;
const runtime_1 = require("../runtime");
const Dinero_1 = require("./Dinero");
const Invoice_1 = require("./Invoice");
/**
 * Check if a given object implements the InvoiceEntry interface.
 */
function instanceOfInvoiceEntry(value) {
    let isInstance = true;
    isInstance = isInstance && "invoice" in value;
    isInstance = isInstance && "priceInclVat" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "vatPercentage" in value;
    return isInstance;
}
exports.instanceOfInvoiceEntry = instanceOfInvoiceEntry;
function InvoiceEntryFromJSON(json) {
    return InvoiceEntryFromJSONTyped(json, false);
}
exports.InvoiceEntryFromJSON = InvoiceEntryFromJSON;
function InvoiceEntryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'invoice': (0, Invoice_1.InvoiceFromJSON)(json['invoice']),
        'priceInclVat': (0, Dinero_1.DineroFromJSON)(json['priceInclVat']),
        'amount': json['amount'],
        'description': json['description'],
        'vatPercentage': json['vatPercentage'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.InvoiceEntryFromJSONTyped = InvoiceEntryFromJSONTyped;
function InvoiceEntryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'invoice': (0, Invoice_1.InvoiceToJSON)(value.invoice),
        'priceInclVat': (0, Dinero_1.DineroToJSON)(value.priceInclVat),
        'amount': value.amount,
        'description': value.description,
        'vatPercentage': value.vatPercentage,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.InvoiceEntryToJSON = InvoiceEntryToJSON;
//# sourceMappingURL=InvoiceEntry.js.map