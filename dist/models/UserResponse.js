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
exports.UserResponseToJSON = exports.UserResponseFromJSONTyped = exports.UserResponseFromJSON = exports.instanceOfUserResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UserResponse interface.
 */
function instanceOfUserResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "active" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfUserResponse = instanceOfUserResponse;
function UserResponseFromJSON(json) {
    return UserResponseFromJSONTyped(json, false);
}
exports.UserResponseFromJSON = UserResponseFromJSON;
function UserResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': json['active'],
        'deleted': json['deleted'],
        'type': json['type'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'acceptedToS': !(0, runtime_1.exists)(json, 'acceptedToS') ? undefined : json['acceptedToS'],
        'extensiveDataProcessing': !(0, runtime_1.exists)(json, 'extensiveDataProcessing') ? undefined : json['extensiveDataProcessing'],
        'ofAge': !(0, runtime_1.exists)(json, 'ofAge') ? undefined : json['ofAge'],
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.UserResponseFromJSONTyped = UserResponseFromJSONTyped;
function UserResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
        'deleted': value.deleted,
        'type': value.type,
        'email': value.email,
        'acceptedToS': value.acceptedToS,
        'extensiveDataProcessing': value.extensiveDataProcessing,
        'ofAge': value.ofAge,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.UserResponseToJSON = UserResponseToJSON;
//# sourceMappingURL=UserResponse.js.map