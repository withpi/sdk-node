// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DataAPI from '../data';

export class GenerateFromSeeds extends APIResource {
  /**
   * Gets the current status of a data generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<DataAPI.DataGenerationStatus> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}`, options);
  }

  /**
   * Generates input data from a list of seeds
   */
  generate(
    body: GenerateFromSeedGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAPI.DataGenerationStatus> {
    return this._client.post('/data/input/generate_from_seeds', { body, ...options });
  }

  /**
   * Streams Data from the data generation job
   */
  streamData(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}/data`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Streams messages from the data generation job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type GenerateFromSeedStreamDataResponse = string;

export type GenerateFromSeedStreamMessagesResponse = string;

export interface GenerateFromSeedGenerateParams {
  /**
   * The application description to generate contract for.
   */
  application_description: string;

  /**
   * The number of LLM inputs to generate
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
  exploration_mode?: 'CONSERVATIVE' | 'BALANCED' | 'CREATIVE' | 'ADVENTUROUS';

  /**
   * Number of inputs to be included in the prompt for generation. Generally it could
   * be same as `batch_size`.
   */
  num_shots?: number;
}

export declare namespace GenerateFromSeeds {
  export {
    type GenerateFromSeedStreamDataResponse as GenerateFromSeedStreamDataResponse,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedGenerateParams as GenerateFromSeedGenerateParams,
  };
}
