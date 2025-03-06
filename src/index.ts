// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Prompt,
  PromptCancelOptimizationJobResponse,
  PromptListOptimizationJobsParams,
  PromptListOptimizationJobsResponse,
  PromptOptimizeParams,
  PromptStreamMessagesResponse,
} from './resources/prompt';
import {
  Queries,
  QueryClassifyParams,
  QueryGenerateFanoutsParams,
  QueryGenerateFanoutsResponse,
} from './resources/queries';
import {
  ContractGenerateDimensionsParams,
  ContractReadFromHfParams,
  ContractScoreParams,
  Contracts,
  ContractsScoreMetrics,
} from './resources/contracts/contracts';
import { Data } from './resources/data/data';
import { Model } from './resources/model/model';

export interface ClientOptions {
  /**
   * The API key required for authentication
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['PI_CLIENT_BASE_URL'].
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
 * API Client for interfacing with the Pi Client API.
 */
export class PiClient extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Pi Client API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['WITHPI_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['PI_CLIENT_BASE_URL'] ?? https://api.withpi.ai/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('PI_CLIENT_BASE_URL'),
    apiKey = Core.readEnv('WITHPI_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.PiClientError(
        "The WITHPI_API_KEY environment variable is missing or empty; either provide it, or instantiate the PiClient client with an apiKey option, like new PiClient({ apiKey: 'My API Key' }).",
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

  data: API.Data = new API.Data(this);
  prompt: API.Prompt = new API.Prompt(this);
  model: API.Model = new API.Model(this);
  contracts: API.Contracts = new API.Contracts(this);
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

  static PiClient = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static PiClientError = Errors.PiClientError;
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

PiClient.Data = Data;
PiClient.Prompt = Prompt;
PiClient.Model = Model;
PiClient.Contracts = Contracts;
PiClient.Queries = Queries;
export declare namespace PiClient {
  export type RequestOptions = Core.RequestOptions;

  export { Data as Data };

  export {
    Prompt as Prompt,
    type PromptCancelOptimizationJobResponse as PromptCancelOptimizationJobResponse,
    type PromptListOptimizationJobsResponse as PromptListOptimizationJobsResponse,
    type PromptStreamMessagesResponse as PromptStreamMessagesResponse,
    type PromptListOptimizationJobsParams as PromptListOptimizationJobsParams,
    type PromptOptimizeParams as PromptOptimizeParams,
  };

  export { Model as Model };

  export {
    Contracts as Contracts,
    type ContractsScoreMetrics as ContractsScoreMetrics,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractReadFromHfParams as ContractReadFromHfParams,
    type ContractScoreParams as ContractScoreParams,
  };

  export {
    Queries as Queries,
    type QueryGenerateFanoutsResponse as QueryGenerateFanoutsResponse,
    type QueryClassifyParams as QueryClassifyParams,
    type QueryGenerateFanoutsParams as QueryGenerateFanoutsParams,
  };

  export type Contract = API.Contract;
  export type ContractCalibrationStatus = API.ContractCalibrationStatus;
  export type DataGenerationStatus = API.DataGenerationStatus;
  export type Dimension = API.Dimension;
  export type DimensionScoringType = API.DimensionScoringType;
  export type Example = API.Example;
  export type ExplorationMode = API.ExplorationMode;
  export type FinetuningBaseModel = API.FinetuningBaseModel;
  export type LoraConfig = API.LoraConfig;
  export type PromptOptimizationStatus = API.PromptOptimizationStatus;
  export type QueryClassificationResponse = API.QueryClassificationResponse;
  export type QueryFanoutExample = API.QueryFanoutExample;
  export type RlGrpoStatus = API.RlGrpoStatus;
  export type SftStatus = API.SftStatus;
  export type State = API.State;
  export type SubDimension = API.SubDimension;
  export type SyntheticDataStatus = API.SyntheticDataStatus;
  export type TrainedModel = API.TrainedModel;
}

export { toFile, fileFromPath } from './uploads';
export {
  PiClientError,
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

export default PiClient;
