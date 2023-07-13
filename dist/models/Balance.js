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
exports.BalanceToJSON = exports.BalanceFromJSONTyped = exports.BalanceFromJSON = exports.instanceOfBalance = void 0;
const runtime_1 = require("../runtime");
const Dinero_1 = require("./Dinero");
const Transaction_1 = require("./Transaction");
const Transfer_1 = require("./Transfer");
const User_1 = require("./User");
/**
 * Check if a given object implements the Balance interface.
 */
function instanceOfBalance(value) {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
exports.instanceOfBalance = instanceOfBalance;
function BalanceFromJSON(json) {
    return BalanceFromJSONTyped(json, false);
}
exports.BalanceFromJSON = BalanceFromJSON;
function BalanceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'user': (0, User_1.UserFromJSON)(json['user']),
        'amount': (0, Dinero_1.DineroFromJSON)(json['amount']),
        'lastTransaction': !(0, runtime_1.exists)(json, 'lastTransaction') ? undefined : (0, Transaction_1.TransactionFromJSON)(json['lastTransaction']),
        'lastTransfer': !(0, runtime_1.exists)(json, 'lastTransfer') ? undefined : (0, Transfer_1.TransferFromJSON)(json['lastTransfer']),
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BalanceFromJSONTyped = BalanceFromJSONTyped;
function BalanceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'user': (0, User_1.UserToJSON)(value.user),
        'amount': (0, Dinero_1.DineroToJSON)(value.amount),
        'lastTransaction': (0, Transaction_1.TransactionToJSON)(value.lastTransaction),
        'lastTransfer': (0, Transfer_1.TransferToJSON)(value.lastTransfer),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BalanceToJSON = BalanceToJSON;
//# sourceMappingURL=Balance.js.map