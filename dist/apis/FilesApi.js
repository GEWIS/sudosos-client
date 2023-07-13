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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class FilesApi extends runtime.BaseAPI {
    /**
     *  Upload a file with the given name.
     */
    createFileRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const consumes = [
                { contentType: 'multipart/form-data' },
            ];
            // @ts-ignore: canConsumeForm may be unused
            const canConsumeForm = runtime.canConsumeForm(consumes);
            let formParams;
            let useForm = false;
            // use FormData to transmit files using content-type "multipart/form-data"
            useForm = canConsumeForm;
            if (useForm) {
                formParams = new FormData();
            }
            else {
                formParams = new URLSearchParams();
            }
            if (requestParameters.file !== undefined) {
                formParams.append('file', requestParameters.file);
            }
            if (requestParameters.name !== undefined) {
                formParams.append('name', requestParameters.name);
            }
            const response = yield this.request({
                path: `/files`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SimpleFileResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Upload a file with the given name.
     */
    createFile(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createFileRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Delete the file with the given id.
     */
    deleteFileRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling deleteFile.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/files/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     *  Delete the file with the given id.
     */
    deleteFile(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteFileRaw(requestParameters, initOverrides);
        });
    }
    /**
     *  Download a file with the given id.
     */
    getFileRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getFile.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/files/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     *  Download a file with the given id.
     */
    getFile(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFileRaw(requestParameters, initOverrides);
        });
    }
}
exports.FilesApi = FilesApi;
//# sourceMappingURL=FilesApi.js.map