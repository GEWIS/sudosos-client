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
  TransferRequest,
  TransferResponse,
} from '../models';
import {
    TransferRequestFromJSON,
    TransferRequestToJSON,
    TransferResponseFromJSON,
    TransferResponseToJSON,
} from '../models';

export interface CreateTransferRequest {
    transfer: TransferRequest;
}

export interface GetAllTransfersRequest {
    take?: number;
    skip?: number;
}

export interface GetSingleTransferRequest {
    id: number;
}

/**
 * 
 */
export class TransfersApi extends runtime.BaseAPI {

    /**
     *  Post a new transfer.
     */
    async createTransferRaw(requestParameters: CreateTransferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransferResponse>> {
        if (requestParameters.transfer === null || requestParameters.transfer === undefined) {
            throw new runtime.RequiredError('transfer','Required parameter requestParameters.transfer was null or undefined when calling createTransfer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/transfers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransferRequestToJSON(requestParameters.transfer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransferResponseFromJSON(jsonValue));
    }

    /**
     *  Post a new transfer.
     */
    async createTransfer(requestParameters: CreateTransferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransferResponse> {
        const response = await this.createTransferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  Returns all existing transfers
     */
    async getAllTransfersRaw(requestParameters: GetAllTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransferResponse>>> {
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
            path: `/transfers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransferResponseFromJSON));
    }

    /**
     *  Returns all existing transfers
     */
    async getAllTransfers(requestParameters: GetAllTransfersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransferResponse>> {
        const response = await this.getAllTransfersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  Returns the requested transfer
     */
    async getSingleTransferRaw(requestParameters: GetSingleTransferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransferResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSingleTransfer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/transfers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransferResponseFromJSON(jsonValue));
    }

    /**
     *  Returns the requested transfer
     */
    async getSingleTransfer(requestParameters: GetSingleTransferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransferResponse> {
        const response = await this.getSingleTransferRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
