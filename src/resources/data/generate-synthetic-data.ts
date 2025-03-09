// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CalibrateAPI from '../contracts/calibrate';

export class GenerateSyntheticData extends APIResource {
  /**
   * Launches a Synthetic Data Generation job
   */
  create(
    body: GenerateSyntheticDataCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SyntheticDataStatus> {
    return this._client.post('/data/generate_synthetic_data', { body, ...options });
  }

  /**
   * Checks the status of a Synthetic Data Generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<SyntheticDataStatus> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}`, options);
  }

  /**
   * Lists the Synthetic Data Generation Jobs owned by a user
   */
  list(
    query?: GenerateSyntheticDataListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerateSyntheticDataListResponse>;
  list(
    query: GenerateSyntheticDataListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/generate_synthetic_data', { query, ...options });
  }

  /**
   * Cancels a Synthetic Data Generation job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/generate_synthetic_data/${jobId}`, options);
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

/**
 * An example for training or evaluation
 */
export interface SDKExample {
  /**
   * The input to LLM
   */
  llm_input: string;

  /**
   * The output to evaluate
   */
  llm_output: string;
}

export type SDKExplorationMode = 'CONSERVATIVE' | 'BALANCED' | 'CREATIVE' | 'ADVENTUROUS';

/**
 * SyntheticDataStatus is the result of a synthetic data generation job.
 */
export interface SyntheticDataStatus {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: CalibrateAPI.State;

  /**
   * The generated synthetic data. Can be present even if the state is not done/error
   * as it is streamed.
   */
  data?: Array<SDKExample> | null;
}

export type GenerateSyntheticDataListResponse = Array<SyntheticDataStatus>;

export type GenerateSyntheticDataCancelResponse = string;

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
  seeds: Array<SDKExample>;

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
  exploration_mode?: SDKExplorationMode;

  /**
   * Number of examples to be included in the prompt for generation
   */
  num_shots?: number;

  /**
   * The system prompt to generate the responses for the application's inputs
   */
  system_prompt?: string | null;
}

export interface GenerateSyntheticDataListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export declare namespace GenerateSyntheticData {
  export {
    type SDKExample as SDKExample,
    type SDKExplorationMode as SDKExplorationMode,
    type SyntheticDataStatus as SyntheticDataStatus,
    type GenerateSyntheticDataListResponse as GenerateSyntheticDataListResponse,
    type GenerateSyntheticDataCancelResponse as GenerateSyntheticDataCancelResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataCreateParams as GenerateSyntheticDataCreateParams,
    type GenerateSyntheticDataListParams as GenerateSyntheticDataListParams,
  };
}
