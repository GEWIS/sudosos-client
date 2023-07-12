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
exports.StripePaymentIntentResponseToJSON = exports.StripePaymentIntentResponseFromJSONTyped = exports.StripePaymentIntentResponseFromJSON = exports.instanceOfStripePaymentIntentResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the StripePaymentIntentResponse interface.
 */
function instanceOfStripePaymentIntentResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "stripeId" in value;
    isInstance = isInstance && "clientSecret" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfStripePaymentIntentResponse = instanceOfStripePaymentIntentResponse;
function StripePaymentIntentResponseFromJSON(json) {
    return StripePaymentIntentResponseFromJSONTyped(json, false);
}
exports.StripePaymentIntentResponseFromJSON = StripePaymentIntentResponseFromJSON;
function StripePaymentIntentResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stripeId': json['stripeId'],
        'clientSecret': json['clientSecret'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.StripePaymentIntentResponseFromJSONTyped = StripePaymentIntentResponseFromJSONTyped;
function StripePaymentIntentResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stripeId': value.stripeId,
        'clientSecret': value.clientSecret,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.StripePaymentIntentResponseToJSON = StripePaymentIntentResponseToJSON;
//# sourceMappingURL=StripePaymentIntentResponse.js.map