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

import { exists, mapValues } from '../runtime';
import type { Dinero } from './Dinero';
import {
    DineroFromJSON,
    DineroFromJSONTyped,
    DineroToJSON,
} from './Dinero';
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';
import type { Transfer } from './Transfer';
import {
    TransferFromJSON,
    TransferFromJSONTyped,
    TransferToJSON,
} from './Transfer';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Balance
 */
export interface Balance {
    /**
     * 
     * @type {User}
     * @memberof Balance
     */
    user: User;
    /**
     * 
     * @type {Dinero}
     * @memberof Balance
     */
    amount: Dinero;
    /**
     * 
     * @type {Transaction}
     * @memberof Balance
     */
    lastTransaction?: Transaction;
    /**
     * 
     * @type {Transfer}
     * @memberof Balance
     */
    lastTransfer?: Transfer;
    /**
     * The creation date of the object.
     * @type {string}
     * @memberof Balance
     */
    createdAt?: string;
    /**
     * The last update date of the object.
     * @type {string}
     * @memberof Balance
     */
    updatedAt?: string;
    /**
     * The current version of the object.
     * @type {number}
     * @memberof Balance
     */
    version?: number;
}

/**
 * Check if a given object implements the Balance interface.
 */
export function instanceOfBalance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function BalanceFromJSON(json: any): Balance {
    return BalanceFromJSONTyped(json, false);
}

export function BalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Balance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserFromJSON(json['user']),
        'amount': DineroFromJSON(json['amount']),
        'lastTransaction': !exists(json, 'lastTransaction') ? undefined : TransactionFromJSON(json['lastTransaction']),
        'lastTransfer': !exists(json, 'lastTransfer') ? undefined : TransferFromJSON(json['lastTransfer']),
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function BalanceToJSON(value?: Balance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserToJSON(value.user),
        'amount': DineroToJSON(value.amount),
        'lastTransaction': TransactionToJSON(value.lastTransaction),
        'lastTransfer': TransferToJSON(value.lastTransfer),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}

