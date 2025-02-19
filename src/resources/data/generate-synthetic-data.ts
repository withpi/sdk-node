// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class GenerateSyntheticData extends APIResource {
  /**
   * Generates synthetic data from a list of seeds
   */
  create(
    body: GenerateSyntheticDataCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataCreateResponse> {
    return this._client.post('/data/generate_synthetic_data', { body, ...options });
  }

  /**
   * Gets the current status of a synthetic data generation job
   */
  retrieve(
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataRetrieveResponse> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}`, options);
  }

  /**
   * Streams SDKExample objects from the synthetic data generation job
   */
  streamData(
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateSyntheticDataStreamDataResponse> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}/data`, options);
  }

  /**
   * Streams messages from the synthetic data generation job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * SyntheticDataStatus is the result of a synthetic data generation job.
 */
export interface GenerateSyntheticDataCreateResponse {
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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';

  /**
   * The generated synthetic data. Can be present even if the state is not done/error
   * as it is streamed.
   */
  data?: Array<GenerateSyntheticDataCreateResponse.Data> | null;
}

export namespace GenerateSyntheticDataCreateResponse {
  /**
   * An example for training or evaluation
   */
  export interface Data {
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

/**
 * SyntheticDataStatus is the result of a synthetic data generation job.
 */
export interface GenerateSyntheticDataRetrieveResponse {
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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';

  /**
   * The generated synthetic data. Can be present even if the state is not done/error
   * as it is streamed.
   */
  data?: Array<GenerateSyntheticDataRetrieveResponse.Data> | null;
}

export namespace GenerateSyntheticDataRetrieveResponse {
  /**
   * An example for training or evaluation
   */
  export interface Data {
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
   * The application description for which the synthetic data would be applicable.
   */
  application_description: string;

  /**
   * The number of new LLM examples to generate
   */
  num_examples_to_generate: number;

  /**
   * The list of LLM examples (inputs + outputs) to be used as seeds
   */
  seeds: Array<GenerateSyntheticDataCreateParams.Seed>;

  /**
   * Number of examples to generate in one LLM call. Must be <=10. Generally it could
   * be same as `num_shots`.
   */
  batch_size?: number;

  /**
   * The exloration mode for examples generation. Defaults to `BALANCED`
   */
  exploration_mode?: 'CONSERVATIVE' | 'BALANCED' | 'CREATIVE' | 'ADVENTUROUS';

  /**
   * Number of examples to be included in the prompt for generation. Generally it
   * could be same as `batch_size`.
   */
  num_shots?: number;
}

export namespace GenerateSyntheticDataCreateParams {
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

export declare namespace GenerateSyntheticData {
  export {
    type GenerateSyntheticDataCreateResponse as GenerateSyntheticDataCreateResponse,
    type GenerateSyntheticDataRetrieveResponse as GenerateSyntheticDataRetrieveResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataCreateParams as GenerateSyntheticDataCreateParams,
  };
}
