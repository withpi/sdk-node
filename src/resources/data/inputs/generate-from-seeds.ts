// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class GenerateFromSeeds extends APIResource {
  /**
   * Checks the status of a Data Generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.DataGenerationStatus> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}`, options);
  }

  /**
   * Cancels a Data Generation job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/data/input/generate_from_seeds/${jobId}`, options);
  }

  /**
   * Launches a Data Generation job
   */
  generate(
    body: GenerateFromSeedGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.DataGenerationStatus> {
    return this._client.post('/data/input/generate_from_seeds', { body, ...options });
  }

  /**
   * Lists the Data Generation Jobs owned by a user
   */
  listJobs(
    query?: GenerateFromSeedListJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateFromSeedListJobsResponse>;
  listJobs(options?: Core.RequestOptions): Core.APIPromise<GenerateFromSeedListJobsResponse>;
  listJobs(
    query: GenerateFromSeedListJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateFromSeedListJobsResponse> {
    if (isRequestOptions(query)) {
      return this.listJobs({}, query);
    }
    return this._client.get('/data/input/generate_from_seeds', { query, ...options });
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

export type GenerateFromSeedCancelResponse = string;

export type GenerateFromSeedListJobsResponse = Array<Shared.DataGenerationStatus>;

export type GenerateFromSeedStreamDataResponse = string;

export type GenerateFromSeedStreamMessagesResponse = string;

export interface GenerateFromSeedGenerateParams {
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
  exploration_mode?: Shared.ExplorationMode;

  /**
   * Number of inputs to be included in the prompt for generation. Generally it could
   * be same as `batch_size`.
   */
  num_shots?: number;
}

export interface GenerateFromSeedListJobsParams {
  /**
   * Filter jobs by state
   */
  state?: Shared.State | null;
}

export declare namespace GenerateFromSeeds {
  export {
    type GenerateFromSeedCancelResponse as GenerateFromSeedCancelResponse,
    type GenerateFromSeedListJobsResponse as GenerateFromSeedListJobsResponse,
    type GenerateFromSeedStreamDataResponse as GenerateFromSeedStreamDataResponse,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedGenerateParams as GenerateFromSeedGenerateParams,
    type GenerateFromSeedListJobsParams as GenerateFromSeedListJobsParams,
  };
}
