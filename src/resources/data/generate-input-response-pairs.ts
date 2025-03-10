// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class GenerateInputResponsePairs extends APIResource {
  /**
   * Launches a Generation Input-Response Pairs job
   */
  create(
    body: GenerateInputResponsePairCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SyntheticDataStatus> {
    return this._client.post('/data/generate_input_response_pairs', { body, ...options });
  }

  /**
   * Checks the status of a Generation Input-Response Pairs job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SyntheticDataStatus> {
    return this._client.get(`/data/generate_input_response_pairs/${jobId}`, options);
  }

  /**
   * Lists the Generation Input-Response Pairs Jobs owned by a user
   */
  list(
    query?: GenerateInputResponsePairListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateInputResponsePairListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerateInputResponsePairListResponse>;
  list(
    query: GenerateInputResponsePairListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateInputResponsePairListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/generate_input_response_pairs', { query, ...options });
  }

  /**
   * Cancels a Generation Input-Response Pairs job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/generate_input_response_pairs/${jobId}`, options);
  }

  /**
   * Streams data from the Generation Input-Response Pairs job
   */
  streamData(
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateInputResponsePairStreamDataResponse> {
    return this._client.get(`/data/generate_input_response_pairs/${jobId}/data`, options);
  }

  /**
   * Opens a message stream about a Generation Input-Response Pairs job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate_input_response_pairs/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type GenerateInputResponsePairListResponse = Array<Shared.SyntheticDataStatus>;

export type GenerateInputResponsePairCancelResponse = string;

export type GenerateInputResponsePairStreamDataResponse =
  Array<GenerateInputResponsePairStreamDataResponse.GenerateInputResponsePairStreamDataResponseItem>;

export namespace GenerateInputResponsePairStreamDataResponse {
  export interface GenerateInputResponsePairStreamDataResponseItem {
    llm_input: string;

    llm_output: string;
  }
}

export type GenerateInputResponsePairStreamMessagesResponse = string;

export interface GenerateInputResponsePairCreateParams {
  /**
   * The number of new LLM examples to generate
   */
  num_examples_to_generate: number;

  /**
   * The list of LLM examples (inputs + outputs) to be used as seeds
   */
  seeds: Array<GenerateInputResponsePairCreateParams.Seed>;

  /**
   * The application description for which the synthetic data would be applicable.
   */
  application_description?: string | null;

  /**
   * Number of examples to generate in one LLM call. Must be <=10. Generally it could
   * be same as `num_shots`.
   */
  batch_size?: number;

  /**
   * The exploration mode for examples generation. Defaults to `BALANCED`
   */
  exploration_mode?: Shared.ExplorationMode;

  /**
   * Number of examples to be included in the prompt for generation
   */
  num_shots?: number;

  /**
   * The system prompt to generate the responses for the application's inputs
   */
  system_prompt?: string | null;
}

export namespace GenerateInputResponsePairCreateParams {
  /**
   * An example for training or evaluation
   */
  export interface Seed {
    /**
     * The input to LLM
     */
    llm_input: string;

    /**
     * The output to evaluate
     */
    llm_output: string;
  }
}

export interface GenerateInputResponsePairListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export declare namespace GenerateInputResponsePairs {
  export {
    type GenerateInputResponsePairListResponse as GenerateInputResponsePairListResponse,
    type GenerateInputResponsePairCancelResponse as GenerateInputResponsePairCancelResponse,
    type GenerateInputResponsePairStreamDataResponse as GenerateInputResponsePairStreamDataResponse,
    type GenerateInputResponsePairStreamMessagesResponse as GenerateInputResponsePairStreamMessagesResponse,
    type GenerateInputResponsePairCreateParams as GenerateInputResponsePairCreateParams,
    type GenerateInputResponsePairListParams as GenerateInputResponsePairListParams,
  };
}
