// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Queries,
  QueryClassifyParams,
  QueryClassifyResponse,
  QueryFanoutExample,
  QueryGenerateFanoutsParams,
  QueryGenerateFanoutsResponse,
} from './resources/queries';
import {
  ContractGenerateDimensionsParams,
  ContractReadFromHfParams,
  ContractScoreParams,
  Contracts,
  SDKDimension,
} from './resources/contracts/contracts';
import { Data } from './resources/data/data';
import { Model } from './resources/model/model';
import {
  PiScoringSystem,
  PiScoringSystemGenerateDimensionsParams,
  PiScoringSystemReadFromHfParams,
  PiScoringSystemScoreParams,
} from './resources/pi-scoring-system/pi-scoring-system';
import { Prompt } from './resources/prompt/prompt';

export interface ClientOptions {
  /**
   * Defaults to process.env['WITHPI_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['WITHPI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Withpi API.
 */
export class Withpi extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Withpi API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['WITHPI_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['WITHPI_BASE_URL'] ?? https://api.withpi.ai/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('WITHPI_BASE_URL'),
    apiKey = Core.readEnv('WITHPI_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.WithpiError(
        "The WITHPI_API_KEY environment variable is missing or empty; either provide it, or instantiate the Withpi client with an apiKey option, like new Withpi({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.withpi.ai/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  contracts: API.Contracts = new API.Contracts(this);
  data: API.Data = new API.Data(this);
  model: API.Model = new API.Model(this);
  piScoringSystem: API.PiScoringSystem = new API.PiScoringSystem(this);
  prompt: API.Prompt = new API.Prompt(this);
  queries: API.Queries = new API.Queries(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'x-api-key': this.apiKey };
  }

  static Withpi = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static WithpiError = Errors.WithpiError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Withpi.Contracts = Contracts;
Withpi.Data = Data;
Withpi.Model = Model;
Withpi.PiScoringSystem = PiScoringSystem;
Withpi.Prompt = Prompt;
Withpi.Queries = Queries;
export declare namespace Withpi {
  export type RequestOptions = Core.RequestOptions;

  export {
    Contracts as Contracts,
    type SDKDimension as SDKDimension,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractReadFromHfParams as ContractReadFromHfParams,
    type ContractScoreParams as ContractScoreParams,
  };

  export { Data as Data };

  export { Model as Model };

  export {
    PiScoringSystem as PiScoringSystem,
    type PiScoringSystemGenerateDimensionsParams as PiScoringSystemGenerateDimensionsParams,
    type PiScoringSystemReadFromHfParams as PiScoringSystemReadFromHfParams,
    type PiScoringSystemScoreParams as PiScoringSystemScoreParams,
  };

  export { Prompt as Prompt };

  export {
    Queries as Queries,
    type QueryFanoutExample as QueryFanoutExample,
    type QueryClassifyResponse as QueryClassifyResponse,
    type QueryGenerateFanoutsResponse as QueryGenerateFanoutsResponse,
    type QueryClassifyParams as QueryClassifyParams,
    type QueryGenerateFanoutsParams as QueryGenerateFanoutsParams,
  };

  export type ScoringSystem = API.ScoringSystem;
  export type ScoringSystemMetrics = API.ScoringSystemMetrics;
  export type SDKContract = API.SDKContract;
}

export { toFile, fileFromPath } from './uploads';
export {
  WithpiError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Withpi;
