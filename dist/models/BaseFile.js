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
exports.BaseFileToJSON = exports.BaseFileFromJSONTyped = exports.BaseFileFromJSON = exports.instanceOfBaseFile = void 0;
const runtime_1 = require("../runtime");
const User_1 = require("./User");
/**
 * Check if a given object implements the BaseFile interface.
 */
function instanceOfBaseFile(value) {
    let isInstance = true;
    isInstance = isInstance && "downloadName" in value;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "createdBy" in value;
    return isInstance;
}
exports.instanceOfBaseFile = instanceOfBaseFile;
function BaseFileFromJSON(json) {
    return BaseFileFromJSONTyped(json, false);
}
exports.BaseFileFromJSON = BaseFileFromJSON;
function BaseFileFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'downloadName': json['downloadName'],
        'location': json['location'],
        'createdBy': (0, User_1.UserFromJSON)(json['createdBy']),
        'createdAt': !(0, runtime_1.exists)(json, 'createdAt') ? undefined : json['createdAt'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updatedAt') ? undefined : json['updatedAt'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
    };
}
exports.BaseFileFromJSONTyped = BaseFileFromJSONTyped;
function BaseFileToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'downloadName': value.downloadName,
        'location': value.location,
        'createdBy': (0, User_1.UserToJSON)(value.createdBy),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
    };
}
exports.BaseFileToJSON = BaseFileToJSON;
//# sourceMappingURL=BaseFile.js.map