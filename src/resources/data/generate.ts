// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Generate extends APIResource {
  /**
   * Checks the status of a Generation Data job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.DataGenerationStatus> {
    return this._client.get(`/data/generate/${jobId}`, options);
  }

  /**
   * Lists the Generation Data Jobs owned by a user
   */
  list(query?: GenerateListParams, options?: Core.RequestOptions): Core.APIPromise<GenerateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerateListResponse>;
  list(
    query: GenerateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/generate', { query, ...options });
  }

  /**
   * Cancels a Generation Data job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/generate/${jobId}`, options);
  }

  /**
   * Starts a Generation Data job
   */
  startJob(
    body: GenerateStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.DataGenerationStatus> {
    return this._client.post('/data/generate', { body, ...options });
  }

  /**
   * Streams data from the Generation Data job
   */
  streamData(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate/${jobId}/data`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Opens a message stream about a Generation Data job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type GenerateListResponse = Array<Shared.DataGenerationStatus>;

export type GenerateCancelResponse = string;

export type GenerateStreamDataResponse = string;

export type GenerateStreamMessagesResponse = string;

export interface GenerateListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface GenerateStartJobParams {
  /**
   * The application description for which the inputs would be applicable.
   */
  application_description: string;

  /**
   * The number of new LLM inputs to generate
   */
  num_inputs_to_generate: number;

  /**
   * The list of LLM inputs to be used as seeds
   */
  seeds: Array<string>;

  /**
   * Number of inputs to generate in one LLM call. Must be <= 125. Generally it could
   * be same as `num_shots`.
   */
  batch_size?: number;

  /**
   * The exloration mode for input generation. Defaults to `BALANCED`
   */
  exploration_mode?: Shared.ExplorationMode;

  /**
   * Number of inputs to be included in the prompt for generation. Must be <= 50.
   * Generally it could be same as `batch_size`.
   */
  num_shots?: number;
}

export declare namespace Generate {
  export {
    type GenerateListResponse as GenerateListResponse,
    type GenerateCancelResponse as GenerateCancelResponse,
    type GenerateStreamDataResponse as GenerateStreamDataResponse,
    type GenerateStreamMessagesResponse as GenerateStreamMessagesResponse,
    type GenerateListParams as GenerateListParams,
    type GenerateStartJobParams as GenerateStartJobParams,
  };
}
