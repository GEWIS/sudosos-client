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
import type { BalanceResponse } from '../models';
export interface BalancesAllGetRequest {
    date?: string;
    minBalance?: number;
    maxBalance?: number;
    orderBy?: BalancesAllGetOrderByEnum;
    orderDirection?: BalancesAllGetOrderDirectionEnum;
    take?: number;
    skip?: number;
}
export interface GetBalanceIdRequest {
    id: number;
}
/**
 *
 */
export declare class BalanceApi extends runtime.BaseAPI {
    /**
     *  Get balance of the current user
     */
    balancesAllGetRaw(requestParameters: BalancesAllGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BalanceResponse>>>;
    /**
     *  Get balance of the current user
     */
    balancesAllGet(requestParameters?: BalancesAllGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BalanceResponse>>;
    /**
     *  Get balance of the current user
     */
    getBalanceRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BalanceResponse>>;
    /**
     *  Get balance of the current user
     */
    getBalance(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BalanceResponse>;
    /**
     *  Retrieves the requested balance
     */
    getBalanceIdRaw(requestParameters: GetBalanceIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BalanceResponse>>;
    /**
     *  Retrieves the requested balance
     */
    getBalanceId(requestParameters: GetBalanceIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BalanceResponse>;
}
/**
 * @export
 */
export declare const BalancesAllGetOrderByEnum: {
    readonly Id: "id";
    readonly Amount: "amount";
};
export declare type BalancesAllGetOrderByEnum = typeof BalancesAllGetOrderByEnum[keyof typeof BalancesAllGetOrderByEnum];
/**
 * @export
 */
export declare const BalancesAllGetOrderDirectionEnum: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
export declare type BalancesAllGetOrderDirectionEnum = typeof BalancesAllGetOrderDirectionEnum[keyof typeof BalancesAllGetOrderDirectionEnum];
