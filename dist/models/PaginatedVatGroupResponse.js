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
exports.PaginatedVatGroupResponseToJSON = exports.PaginatedVatGroupResponseFromJSONTyped = exports.PaginatedVatGroupResponseFromJSON = exports.instanceOfPaginatedVatGroupResponse = void 0;
const PaginationResult_1 = require("./PaginationResult");
const VatGroup_1 = require("./VatGroup");
/**
 * Check if a given object implements the PaginatedVatGroupResponse interface.
 */
function instanceOfPaginatedVatGroupResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "pagination" in value;
    isInstance = isInstance && "records" in value;
    return isInstance;
}
exports.instanceOfPaginatedVatGroupResponse = instanceOfPaginatedVatGroupResponse;
function PaginatedVatGroupResponseFromJSON(json) {
    return PaginatedVatGroupResponseFromJSONTyped(json, false);
}
exports.PaginatedVatGroupResponseFromJSON = PaginatedVatGroupResponseFromJSON;
function PaginatedVatGroupResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pagination': (0, PaginationResult_1.PaginationResultFromJSON)(json['_pagination']),
        'records': (json['records'].map(VatGroup_1.VatGroupFromJSON)),
    };
}
exports.PaginatedVatGroupResponseFromJSONTyped = PaginatedVatGroupResponseFromJSONTyped;
function PaginatedVatGroupResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '_pagination': (0, PaginationResult_1.PaginationResultToJSON)(value.pagination),
        'records': (value.records.map(VatGroup_1.VatGroupToJSON)),
    };
}
exports.PaginatedVatGroupResponseToJSON = PaginatedVatGroupResponseToJSON;
//# sourceMappingURL=PaginatedVatGroupResponse.js.map