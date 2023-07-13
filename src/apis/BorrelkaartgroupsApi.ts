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


import * as runtime from '../runtime';
import type {
  BorrelkaartGroupRequest,
  BorrelkaartGroupResponse,
  PaginatedBorrelkaartGroupResponse,
} from '../models';
import {
    BorrelkaartGroupRequestFromJSON,
    BorrelkaartGroupRequestToJSON,
    BorrelkaartGroupResponseFromJSON,
    BorrelkaartGroupResponseToJSON,
    PaginatedBorrelkaartGroupResponseFromJSON,
    PaginatedBorrelkaartGroupResponseToJSON,
} from '../models';

export interface BorrelkaartgroupsGetRequest {
    take?: number;
    skip?: number;
}

export interface BorrelkaartgroupsIdGetRequest {
    id: number;
}

export interface BorrelkaartgroupsIdPatchRequest {
    id: number;
    borrelkaartgroup: BorrelkaartGroupRequest;
}

export interface BorrelkaartgroupsPostRequest {
    borrelkaartgroup: BorrelkaartGroupRequest;
}

/**
 * 
 */
export class BorrelkaartgroupsApi extends runtime.BaseAPI {

    /**
     *  Returns all existing borrelkaart groups
     */
    async borrelkaartgroupsGetRaw(requestParameters: BorrelkaartgroupsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedBorrelkaartGroupResponse>> {
        const queryParameters: any = {};

        if (requestParameters.take !== undefined) {
            queryParameters['take'] = requestParameters.take;
        }

        if (requestParameters.skip !== undefined) {
            queryParameters['skip'] = requestParameters.skip;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/borrelkaartgroups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedBorrelkaartGroupResponseFromJSON(jsonValue));
    }

    /**
     *  Returns all existing borrelkaart groups
     */
    async borrelkaartgroupsGet(requestParameters: BorrelkaartgroupsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedBorrelkaartGroupResponse> {
        const response = await this.borrelkaartgroupsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  Returns the requested borrelkaart group
     */
    async borrelkaartgroupsIdGetRaw(requestParameters: BorrelkaartgroupsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BorrelkaartGroupResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling borrelkaartgroupsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/borrelkaartgroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BorrelkaartGroupResponseFromJSON(jsonValue));
    }

    /**
     *  Returns the requested borrelkaart group
     */
    async borrelkaartgroupsIdGet(requestParameters: BorrelkaartgroupsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BorrelkaartGroupResponse> {
        const response = await this.borrelkaartgroupsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  Updates the requested borrelkaart group
     */
    async borrelkaartgroupsIdPatchRaw(requestParameters: BorrelkaartgroupsIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BorrelkaartGroupResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling borrelkaartgroupsIdPatch.');
        }

        if (requestParameters.borrelkaartgroup === null || requestParameters.borrelkaartgroup === undefined) {
            throw new runtime.RequiredError('borrelkaartgroup','Required parameter requestParameters.borrelkaartgroup was null or undefined when calling borrelkaartgroupsIdPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/borrelkaartgroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BorrelkaartGroupRequestToJSON(requestParameters.borrelkaartgroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BorrelkaartGroupResponseFromJSON(jsonValue));
    }

    /**
     *  Updates the requested borrelkaart group
     */
    async borrelkaartgroupsIdPatch(requestParameters: BorrelkaartgroupsIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BorrelkaartGroupResponse> {
        const response = await this.borrelkaartgroupsIdPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  Creates a new borrelkaart group
     */
    async borrelkaartgroupsPostRaw(requestParameters: BorrelkaartgroupsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BorrelkaartGroupResponse>> {
        if (requestParameters.borrelkaartgroup === null || requestParameters.borrelkaartgroup === undefined) {
            throw new runtime.RequiredError('borrelkaartgroup','Required parameter requestParameters.borrelkaartgroup was null or undefined when calling borrelkaartgroupsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/borrelkaartgroups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BorrelkaartGroupRequestToJSON(requestParameters.borrelkaartgroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BorrelkaartGroupResponseFromJSON(jsonValue));
    }

    /**
     *  Creates a new borrelkaart group
     */
    async borrelkaartgroupsPost(requestParameters: BorrelkaartgroupsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BorrelkaartGroupResponse> {
        const response = await this.borrelkaartgroupsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
