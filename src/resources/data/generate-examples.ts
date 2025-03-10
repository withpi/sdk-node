// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class GenerateExamples extends APIResource {
  /**
   * Launches a Synthetic Data Generation job
   */
  create(
    body: GenerateExampleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SyntheticDataStatus> {
    return this._client.post('/data/generate_examples', { body, ...options });
  }

  /**
   * Checks the status of a Synthetic Data Generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SyntheticDataStatus> {
    return this._client.get(`/data/generate_examples/${jobId}`, options);
  }

  /**
   * Lists the Synthetic Data Generation Jobs owned by a user
   */
  list(
    query?: GenerateExampleListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateExampleListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerateExampleListResponse>;
  list(
    query: GenerateExampleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateExampleListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/generate_examples', { query, ...options });
  }

  /**
   * Cancels a Synthetic Data Generation job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/generate_examples/${jobId}`, options);
  }

  /**
   * Streams data from the Synthetic Data Generation job
   */
  streamData(
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateExampleStreamDataResponse> {
    return this._client.get(`/data/generate_examples/${jobId}/data`, options);
  }

  /**
   * Opens a message stream about a Synthetic Data Generation job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate_examples/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type GenerateExampleListResponse = Array<Shared.SyntheticDataStatus>;

export type GenerateExampleCancelResponse = string;

export type GenerateExampleStreamDataResponse =
  Array<GenerateExampleStreamDataResponse.GenerateExampleStreamDataResponseItem>;

export namespace GenerateExampleStreamDataResponse {
  export interface GenerateExampleStreamDataResponseItem {
    llm_input: string;

    llm_output: string;
  }
}

export type GenerateExampleStreamMessagesResponse = string;

export interface GenerateExampleCreateParams {
  /**
   * The number of new LLM examples to generate
   */
  num_examples_to_generate: number;

  /**
   * The list of LLM examples (inputs + outputs) to be used as seeds
   */
  seeds: Array<GenerateExampleCreateParams.Seed>;

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

export namespace GenerateExampleCreateParams {
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

export interface GenerateExampleListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export declare namespace GenerateExamples {
  export {
    type GenerateExampleListResponse as GenerateExampleListResponse,
    type GenerateExampleCancelResponse as GenerateExampleCancelResponse,
    type GenerateExampleStreamDataResponse as GenerateExampleStreamDataResponse,
    type GenerateExampleStreamMessagesResponse as GenerateExampleStreamMessagesResponse,
    type GenerateExampleCreateParams as GenerateExampleCreateParams,
    type GenerateExampleListParams as GenerateExampleListParams,
  };
}
