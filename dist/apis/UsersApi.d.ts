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
import type { AcceptTosRequest, AuthenticationResponse, CreateUserRequest, PaginatedBaseTransactionResponse, PaginatedContainerResponse, PaginatedFinancialMutationResponse, PaginatedPointOfSaleResponse, PaginatedProductResponse, PaginatedTransferResponse, PaginatedUpdatedPointOfSaleResponse, PaginatedUserResponse, RoleResponse, TransactionReportResponse, UpdateKeyResponse, UpdateLocalRequest, UpdateNfcRequest, UpdatePinRequest, UpdateUserRequest, User, UserResponse } from '../models';
export interface AcceptTosOperationRequest {
    params: AcceptTosRequest;
}
export interface AuthenticateAsRequest {
    id: number;
}
export interface CreateUserOperationRequest {
    user: CreateUserRequest;
}
export interface DeleteUserRequest {
    id: number;
}
export interface DeleteUserKeyRequest {
    id: number;
}
export interface DeleteUserNfcRequest {
    id: number;
}
export interface GetAllUsersRequest {
    take?: number;
    skip?: number;
    search?: string;
    active?: boolean;
    ofAge?: boolean;
    id?: number;
    type?: number;
}
export interface GetAllUsersOfUserTypeRequest {
    userType: string;
    take?: number;
    skip?: number;
}
export interface GetIndividualUserRequest {
    id: number;
}
export interface GetOrganMembersRequest {
    id: number;
}
export interface GetUserAuthenticatableRequest {
    id: number;
}
export interface GetUserRolesRequest {
    id: number;
}
export interface GetUsersContainersRequest {
    id: number;
    take?: number;
    skip?: number;
}
export interface GetUsersFinancialMutationsRequest {
    id: number;
    take?: number;
    skip?: number;
}
export interface GetUsersPointsOfSaleRequest {
    id: number;
    take?: number;
    skip?: number;
}
export interface GetUsersProcessingDepositsRequest {
    id: number;
}
export interface GetUsersProductsRequest {
    id: number;
    take?: number;
    skip?: number;
}
export interface GetUsersTransactionsRequest {
    id: number;
    fromId?: number;
    createdById?: number;
    toId?: number;
    productId?: number;
    productRevision?: number;
    fromDate?: string;
    tillDate?: string;
    take?: number;
    skip?: number;
}
export interface GetUsersTransfersRequest {
    id: number;
    take?: number;
    skip?: number;
    fromId?: number;
    toId?: number;
    id2?: number;
}
export interface GetUsersUpdatedContainersRequest {
    id: number;
    take?: number;
    skip?: number;
}
export interface GetUsersUpdatedPointsOfSaleRequest {
    id: number;
    take?: number;
    skip?: number;
}
export interface GetUsersUpdatedProductsRequest {
    id: number;
    take?: number;
    skip?: number;
}
export interface UpdateUserOperationRequest {
    id: number;
    user: UpdateUserRequest;
}
export interface UpdateUserKeyRequest {
    id: number;
}
export interface UpdateUserLocalPasswordRequest {
    id: number;
    update: UpdateLocalRequest;
}
export interface UpdateUserNfcRequest {
    id: number;
    update: UpdateNfcRequest;
}
export interface UpdateUserPinRequest {
    id: number;
    update: UpdatePinRequest;
}
export interface UsersIdTransactionsReportGetRequest {
    id: number;
    fromDate?: string;
    tillDate?: string;
    fromId?: number;
    toId?: number;
}
/**
 *
 */
export declare class UsersApi extends runtime.BaseAPI {
    /**
     *  Accept the Terms of Service if you have not accepted it yet
     */
    acceptTosRaw(requestParameters: AcceptTosOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  Accept the Terms of Service if you have not accepted it yet
     */
    acceptTos(requestParameters: AcceptTosOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  Authenticate as another user
     */
    authenticateAsRaw(requestParameters: AuthenticateAsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthenticationResponse>>;
    /**
     *  Authenticate as another user
     */
    authenticateAs(requestParameters: AuthenticateAsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthenticationResponse>;
    /**
     *  Create a new user
     */
    createUserRaw(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     *  Create a new user
     */
    createUser(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     *  Delete a single user
     */
    deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  Delete a single user
     */
    deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  Delete a users key code
     */
    deleteUserKeyRaw(requestParameters: DeleteUserKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  Delete a users key code
     */
    deleteUserKey(requestParameters: DeleteUserKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  Delete a nfc code
     */
    deleteUserNfcRaw(requestParameters: DeleteUserNfcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  Delete a nfc code
     */
    deleteUserNfc(requestParameters: DeleteUserNfcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  Get a list of all users
     */
    getAllUsersRaw(requestParameters: GetAllUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedUserResponse>>;
    /**
     *  Get a list of all users
     */
    getAllUsers(requestParameters?: GetAllUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedUserResponse>;
    /**
     *  Get all users of user type
     */
    getAllUsersOfUserTypeRaw(requestParameters: GetAllUsersOfUserTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedUserResponse>>;
    /**
     *  Get all users of user type
     */
    getAllUsersOfUserType(requestParameters: GetAllUsersOfUserTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedUserResponse>;
    /**
     *  Get an individual user
     */
    getIndividualUserRaw(requestParameters: GetIndividualUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     *  Get an individual user
     */
    getIndividualUser(requestParameters: GetIndividualUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     *  Get an organs members
     */
    getOrganMembersRaw(requestParameters: GetOrganMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedUserResponse>>;
    /**
     *  Get an organs members
     */
    getOrganMembers(requestParameters: GetOrganMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedUserResponse>;
    /**
     *  Get all users that the user can authenticate as
     */
    getUserAuthenticatableRaw(requestParameters: GetUserAuthenticatableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserResponse>>>;
    /**
     *  Get all users that the user can authenticate as
     */
    getUserAuthenticatable(requestParameters: GetUserAuthenticatableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserResponse>>;
    /**
     *  Get all roles assigned to the user.
     */
    getUserRolesRaw(requestParameters: GetUserRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RoleResponse>>>;
    /**
     *  Get all roles assigned to the user.
     */
    getUserRoles(requestParameters: GetUserRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RoleResponse>>;
    /**
     *  Returns the user\'s containers
     */
    getUsersContainersRaw(requestParameters: GetUsersContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedContainerResponse>>;
    /**
     *  Returns the user\'s containers
     */
    getUsersContainers(requestParameters: GetUsersContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedContainerResponse>;
    /**
     *  Get all financial mutations of a user.
     */
    getUsersFinancialMutationsRaw(requestParameters: GetUsersFinancialMutationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedFinancialMutationResponse>>;
    /**
     *  Get all financial mutations of a user.
     */
    getUsersFinancialMutations(requestParameters: GetUsersFinancialMutationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedFinancialMutationResponse>;
    /**
     *  Returns the user\'s Points of Sale
     */
    getUsersPointsOfSaleRaw(requestParameters: GetUsersPointsOfSaleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedPointOfSaleResponse>>;
    /**
     *  Returns the user\'s Points of Sale
     */
    getUsersPointsOfSale(requestParameters: GetUsersPointsOfSaleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedPointOfSaleResponse>;
    /**
     *  Get all deposits of a user that are still being processed by Stripe
     */
    getUsersProcessingDepositsRaw(requestParameters: GetUsersProcessingDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RoleResponse>>>;
    /**
     *  Get all deposits of a user that are still being processed by Stripe
     */
    getUsersProcessingDeposits(requestParameters: GetUsersProcessingDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RoleResponse>>;
    /**
     *  Get an user\'s products
     */
    getUsersProductsRaw(requestParameters: GetUsersProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedProductResponse>>;
    /**
     *  Get an user\'s products
     */
    getUsersProducts(requestParameters: GetUsersProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedProductResponse>;
    /**
     *  Get an user\'s transactions (from, to or created)
     */
    getUsersTransactionsRaw(requestParameters: GetUsersTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedBaseTransactionResponse>>;
    /**
     *  Get an user\'s transactions (from, to or created)
     */
    getUsersTransactions(requestParameters: GetUsersTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedBaseTransactionResponse>;
    /**
     *  Get an user\'s transfers
     */
    getUsersTransfersRaw(requestParameters: GetUsersTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedTransferResponse>>;
    /**
     *  Get an user\'s transfers
     */
    getUsersTransfers(requestParameters: GetUsersTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedTransferResponse>;
    /**
     *  Returns the user\'s updated containers
     */
    getUsersUpdatedContainersRaw(requestParameters: GetUsersUpdatedContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedContainerResponse>>;
    /**
     *  Returns the user\'s updated containers
     */
    getUsersUpdatedContainers(requestParameters: GetUsersUpdatedContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedContainerResponse>;
    /**
     *  Returns the user\'s updated Points of Sale
     */
    getUsersUpdatedPointsOfSaleRaw(requestParameters: GetUsersUpdatedPointsOfSaleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedUpdatedPointOfSaleResponse>>;
    /**
     *  Returns the user\'s updated Points of Sale
     */
    getUsersUpdatedPointsOfSale(requestParameters: GetUsersUpdatedPointsOfSaleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedUpdatedPointOfSaleResponse>;
    /**
     *  Get an user\'s updated products
     */
    getUsersUpdatedProductsRaw(requestParameters: GetUsersUpdatedProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedProductResponse>>;
    /**
     *  Get an user\'s updated products
     */
    getUsersUpdatedProducts(requestParameters: GetUsersUpdatedProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedProductResponse>;
    /**
     *  Update a user
     */
    updateUserRaw(requestParameters: UpdateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateUserRequest>>;
    /**
     *  Update a user
     */
    updateUser(requestParameters: UpdateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateUserRequest>;
    /**
     *  POST an users update to new key code
     */
    updateUserKeyRaw(requestParameters: UpdateUserKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateKeyResponse>>;
    /**
     *  POST an users update to new key code
     */
    updateUserKey(requestParameters: UpdateUserKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateKeyResponse>;
    /**
     *  Put a user\'s local password
     */
    updateUserLocalPasswordRaw(requestParameters: UpdateUserLocalPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  Put a user\'s local password
     */
    updateUserLocalPassword(requestParameters: UpdateUserLocalPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  Put a users NFC code
     */
    updateUserNfcRaw(requestParameters: UpdateUserNfcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  Put a users NFC code
     */
    updateUserNfc(requestParameters: UpdateUserNfcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  Put an users pin code
     */
    updateUserPinRaw(requestParameters: UpdateUserPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  Put an users pin code
     */
    updateUserPin(requestParameters: UpdateUserPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  Get transaction report for the given user
     */
    usersIdTransactionsReportGetRaw(requestParameters: UsersIdTransactionsReportGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionReportResponse>>>;
    /**
     *  Get transaction report for the given user
     */
    usersIdTransactionsReportGet(requestParameters: UsersIdTransactionsReportGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionReportResponse>>;
}
