// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Data } from './resources/data/data';
import {
  ScoringSystem,
  ScoringSystemImportSpecParams,
  ScoringSystemImportSpecResponse,
  ScoringSystemScoreParams,
  ScoringSystemUploadToHuggingfaceParams,
  ScoringSystemUploadToHuggingfaceResponse,
} from './resources/scoring-system/scoring-system';
import { Search, SearchEmbedDocumentsParams, SearchEmbedDocumentsResponse } from './resources/search/search';

export interface ClientOptions {
  /**
   * Defaults to process.env['WITHPI_API_KEY'].
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
   *
   * @unit milliseconds
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
      baseURLOverridden: baseURL ? baseURL !== 'https://api.withpi.ai/v1' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  data: API.Data = new API.Data(this);
  scoringSystem: API.ScoringSystem = new API.ScoringSystem(this);
  search: API.Search = new API.Search(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.withpi.ai/v1';
  }

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
PiClient.ScoringSystem = ScoringSystem;
PiClient.Search = Search;

export declare namespace PiClient {
  export type RequestOptions = Core.RequestOptions;

  export { Data as Data };

  export {
    ScoringSystem as ScoringSystem,
    type ScoringSystemImportSpecResponse as ScoringSystemImportSpecResponse,
    type ScoringSystemUploadToHuggingfaceResponse as ScoringSystemUploadToHuggingfaceResponse,
    type ScoringSystemImportSpecParams as ScoringSystemImportSpecParams,
    type ScoringSystemScoreParams as ScoringSystemScoreParams,
    type ScoringSystemUploadToHuggingfaceParams as ScoringSystemUploadToHuggingfaceParams,
  };

  export {
    Search as Search,
    type SearchEmbedDocumentsResponse as SearchEmbedDocumentsResponse,
    type SearchEmbedDocumentsParams as SearchEmbedDocumentsParams,
  };

  export type DataGenerationStatus = API.DataGenerationStatus;
  export type Example = API.Example;
  export type ExplorationMode = API.ExplorationMode;
  export type QueryClassifierResult = API.QueryClassifierResult;
  export type Question = API.Question;
  export type ScoringSpecCalibrationStatus = API.ScoringSpecCalibrationStatus;
  export type ScoringSystemMetrics = API.ScoringSystemMetrics;
  export type SyntheticDataStatus = API.SyntheticDataStatus;
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
