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
exports.AuthenticateApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class AuthenticateApi extends runtime.BaseAPI {
    /**
     *  Key login and hand out token.
     */
    authenticationKeyPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling authenticationKeyPost.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/key`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationKeyRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Key login and hand out token.
     */
    authenticationKeyPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.authenticationKeyPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  NFC login and hand out token
     */
    authenticationNfcPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling authenticationNfcPost.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/nfc`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationNfcRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  NFC login and hand out token
     */
    authenticationNfcPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.authenticationNfcPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  EAN login and hand out token
     */
    eanAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling eanAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/ean`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationEanRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  EAN login and hand out token
     */
    eanAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.eanAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  LDAP login and hand out token    If user has never signed in before this also creates an GEWIS account.
     */
    gewisLDAPAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling gewisLDAPAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/GEWIS/LDAP`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationLDAPRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  LDAP login and hand out token    If user has never signed in before this also creates an GEWIS account.
     */
    gewisLDAPAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gewisLDAPAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  PIN login and hand out token.
     */
    gewisPinAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling gewisPinAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/GEWIS/pin`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.GEWISAuthenticationPinRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  PIN login and hand out token.
     */
    gewisPinAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gewisPinAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  GEWIS login verification based on gewisweb JWT tokens. This method verifies the validity of the gewisweb JWT token, and returns a SudoSOS token if the GEWIS token is valid.
     */
    gewisWebAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling gewisWebAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/gewisweb`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.GewiswebAuthenticationRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  GEWIS login verification based on gewisweb JWT tokens. This method verifies the validity of the gewisweb JWT token, and returns a SudoSOS token if the GEWIS token is valid.
     */
    gewisWebAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gewisWebAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  LDAP login and hand out token If user has never signed in before this also creates an account.
     */
    ldapAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling ldapAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/LDAP`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationLDAPRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  LDAP login and hand out token If user has never signed in before this also creates an account.
     */
    ldapAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ldapAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Local login and hand out token
     */
    localAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling localAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/local`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationLocalRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Local login and hand out token
     */
    localAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.localAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Mock login and hand out token.
     */
    mockAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling mockAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/mock`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationMockRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Mock login and hand out token.
     */
    mockAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.mockAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  PIN login and hand out token
     */
    pinAuthenticationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling pinAuthentication.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/pin`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationPinRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  PIN login and hand out token
     */
    pinAuthentication(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.pinAuthenticationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Get a new JWT token, lesser if the existing token is also lesser
     */
    refreshTokenRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/authentication/refreshToken`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AuthenticationResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Get a new JWT token, lesser if the existing token is also lesser
     */
    refreshToken(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.refreshTokenRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Creates a reset token for the local authentication
     */
    resetLocalRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling resetLocal.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/local/reset`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.ResetLocalRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     *  Creates a reset token for the local authentication
     */
    resetLocal(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.resetLocalRaw(requestParameters, initOverrides);
        });
    }
    /**
     *  Reset local authentication using the provided token
     */
    resetLocalWithTokenRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.req === null || requestParameters.req === undefined) {
                throw new runtime.RequiredError('req', 'Required parameter requestParameters.req was null or undefined when calling resetLocalWithToken.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/authentication/local`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AuthenticationResetTokenRequestToJSON)(requestParameters.req),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     *  Reset local authentication using the provided token
     */
    resetLocalWithToken(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.resetLocalWithTokenRaw(requestParameters, initOverrides);
        });
    }
}
exports.AuthenticateApi = AuthenticateApi;
//# sourceMappingURL=AuthenticateApi.js.map