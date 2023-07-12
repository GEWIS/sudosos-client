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
exports.StripeApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class StripeApi extends runtime.BaseAPI {
    /**
     *  Start the stripe deposit flow
     */
    depositRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.stripe === null || requestParameters.stripe === undefined) {
                throw new runtime.RequiredError('stripe', 'Required parameter requestParameters.stripe was null or undefined when calling deposit.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
            }
            const response = yield this.request({
                path: `/stripe/deposit`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.StripeRequestToJSON)(requestParameters.stripe),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.StripePaymentIntentResponseFromJSON)(jsonValue));
        });
    }
    /**
     *  Start the stripe deposit flow
     */
    deposit(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.depositRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  Webhook for Stripe event updates
     */
    webhookRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/stripe/webhook`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     *  Webhook for Stripe event updates
     */
    webhook(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webhookRaw(initOverrides);
        });
    }
}
exports.StripeApi = StripeApi;
//# sourceMappingURL=StripeApi.js.map