// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class GenerateSyntheticData extends APIResource {
  /**
   * Launches a Synthetic Data Generation job
   */
  create(
    body: GenerateSyntheticDataCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SyntheticDataStatus> {
    return this._client.post('/data/generate_synthetic_data', { body, ...options });
  }

  /**
   * Checks the status of a Synthetic Data Generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SyntheticDataStatus> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}`, options);
  }

  /**
   * Cancels a Synthetic Data Generation job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/generate_synthetic_data/${jobId}`, options);
  }

  /**
   * Lists the Synthetic Data Generation Jobs owned by a user
   */
  listJobs(
    query?: GenerateSyntheticDataListJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataListJobsResponse>;
  listJobs(options?: Core.RequestOptions): Core.APIPromise<GenerateSyntheticDataListJobsResponse>;
  listJobs(
    query: GenerateSyntheticDataListJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataListJobsResponse> {
    if (isRequestOptions(query)) {
      return this.listJobs({}, query);
    }
    return this._client.get('/data/generate_synthetic_data', { query, ...options });
  }

  /**
   * Streams data from the Synthetic Data Generation job
   */
  streamData(
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataStreamDataResponse> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}/data`, options);
  }

  /**
   * Opens a message stream about a Synthetic Data Generation job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type GenerateSyntheticDataCancelResponse = string;

export type GenerateSyntheticDataListJobsResponse = Array<Shared.SyntheticDataStatus>;

export type GenerateSyntheticDataStreamDataResponse =
  Array<GenerateSyntheticDataStreamDataResponse.GenerateSyntheticDataStreamDataResponseItem>;

export namespace GenerateSyntheticDataStreamDataResponse {
  export interface GenerateSyntheticDataStreamDataResponseItem {
    llm_input: string;

    llm_output: string;
  }
}

export type GenerateSyntheticDataStreamMessagesResponse = string;

export interface GenerateSyntheticDataCreateParams {
  /**
   * The number of new LLM examples to generate
   */
  num_examples_to_generate: number;

  /**
   * The list of LLM examples (inputs + outputs) to be used as seeds
   */
  seeds: Array<Shared.Example>;

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

export interface GenerateSyntheticDataListJobsParams {
  /**
   * Filter jobs by state
   */
  state?: Shared.State | null;
}

export declare namespace GenerateSyntheticData {
  export {
    type GenerateSyntheticDataCancelResponse as GenerateSyntheticDataCancelResponse,
    type GenerateSyntheticDataListJobsResponse as GenerateSyntheticDataListJobsResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataCreateParams as GenerateSyntheticDataCreateParams,
    type GenerateSyntheticDataListJobsParams as GenerateSyntheticDataListJobsParams,
  };
}
