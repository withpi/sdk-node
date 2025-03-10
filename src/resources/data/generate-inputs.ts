// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class GenerateInputs extends APIResource {
  /**
   * Checks the status of a Data Generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.DataGenerationStatus> {
    return this._client.get(`/data/generate_inputs/${jobId}`, options);
  }

  /**
   * Lists the Data Generation Jobs owned by a user
   */
  list(
    query?: GenerateInputListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateInputListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerateInputListResponse>;
  list(
    query: GenerateInputListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateInputListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/generate_inputs', { query, ...options });
  }

  /**
   * Cancels a Data Generation job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/generate_inputs/${jobId}`, options);
  }

  /**
   * Launches a Data Generation job
   */
  startJob(
    body: GenerateInputStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.DataGenerationStatus> {
    return this._client.post('/data/generate_inputs', { body, ...options });
  }

  /**
   * Streams data from the Data Generation job
   */
  streamData(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate_inputs/${jobId}/data`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Opens a message stream about a Data Generation job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate_inputs/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type GenerateInputListResponse = Array<Shared.DataGenerationStatus>;

export type GenerateInputCancelResponse = string;

export type GenerateInputStreamDataResponse = string;

export type GenerateInputStreamMessagesResponse = string;

export interface GenerateInputListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface GenerateInputStartJobParams {
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
   * Number of inputs to generate in one LLM call. Must be <= 10. Generally it could
   * be same as `num_shots`.
   */
  batch_size?: number;

  /**
   * The exloration mode for input generation. Defaults to `BALANCED`
   */
  exploration_mode?: Shared.ExplorationMode;

  /**
   * Number of inputs to be included in the prompt for generation. Must be <= 10.
   * Generally it could be same as `batch_size`.
   */
  num_shots?: number;
}

export declare namespace GenerateInputs {
  export {
    type GenerateInputListResponse as GenerateInputListResponse,
    type GenerateInputCancelResponse as GenerateInputCancelResponse,
    type GenerateInputStreamDataResponse as GenerateInputStreamDataResponse,
    type GenerateInputStreamMessagesResponse as GenerateInputStreamMessagesResponse,
    type GenerateInputListParams as GenerateInputListParams,
    type GenerateInputStartJobParams as GenerateInputStartJobParams,
  };
}
