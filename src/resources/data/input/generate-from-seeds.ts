// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CalibrateAPI from '../../contracts/calibrate';
import * as GenerateSyntheticDataAPI from '../generate-synthetic-data';

export class GenerateFromSeeds extends APIResource {
  /**
   * Launches a Data Generation job
   */
  create(
    body: GenerateFromSeedCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataGenerationStatus> {
    return this._client.post('/data/input/generate_from_seeds', { body, ...options });
  }

  /**
   * Checks the status of a Data Generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<DataGenerationStatus> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}`, options);
  }

  /**
   * Lists the Data Generation Jobs owned by a user
   */
  list(
    query?: GenerateFromSeedListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateFromSeedListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerateFromSeedListResponse>;
  list(
    query: GenerateFromSeedListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateFromSeedListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/input/generate_from_seeds', { query, ...options });
  }

  /**
   * Cancels a Data Generation job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/input/generate_from_seeds/${jobId}`, options);
  }

  /**
   * Streams data from the Data Generation job
   */
  streamData(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}/data`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Opens a message stream about a Data Generation job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * DataGenerationStatus is the result of a data generation job.
 */
export interface DataGenerationStatus {
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
   * The generated data. Can be present even if the state is not done/error as it is
   * streamed.
   */
  data?: Array<string> | null;
}

export type GenerateFromSeedListResponse = Array<DataGenerationStatus>;

export type GenerateFromSeedCancelResponse = string;

export type GenerateFromSeedStreamDataResponse = string;

export type GenerateFromSeedStreamMessagesResponse = string;

export interface GenerateFromSeedCreateParams {
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
   * Number of inputs to generate in one LLM call. Must be <=10. Generally it could
   * be same as `num_shots`.
   */
  batch_size?: number;

  /**
   * The exloration mode for input generation. Defaults to `BALANCED`
   */
  exploration_mode?: GenerateSyntheticDataAPI.SDKExplorationMode;

  /**
   * Number of inputs to be included in the prompt for generation. Generally it could
   * be same as `batch_size`.
   */
  num_shots?: number;
}

export interface GenerateFromSeedListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export declare namespace GenerateFromSeeds {
  export {
    type DataGenerationStatus as DataGenerationStatus,
    type GenerateFromSeedListResponse as GenerateFromSeedListResponse,
    type GenerateFromSeedCancelResponse as GenerateFromSeedCancelResponse,
    type GenerateFromSeedStreamDataResponse as GenerateFromSeedStreamDataResponse,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedCreateParams as GenerateFromSeedCreateParams,
    type GenerateFromSeedListParams as GenerateFromSeedListParams,
  };
}
