// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class GenerateFromSeeds extends APIResource {
  /**
   * Gets the current status of a data generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<GenerateFromSeedRetrieveResponse> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}`, options);
  }

  /**
   * Generates input data from a list of seeds
   */
  generate(
    body: GenerateFromSeedGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateFromSeedGenerateResponse> {
    return this._client.post('/data/input/generate_from_seeds', { body, ...options });
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

/**
 * DataGenerationResult is the result of a data generation job.
 */
export interface GenerateFromSeedRetrieveResponse {
  /**
   * The generated data. Absent unless state is done
   */
  data: Array<string> | null;

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
}

/**
 * DataGenerationResult is the result of a data generation job.
 */
export interface GenerateFromSeedGenerateResponse {
  /**
   * The generated data. Absent unless state is done
   */
  data: Array<string> | null;

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
}

export type GenerateFromSeedStreamMessagesResponse = string;

export type GenerateFromSeedGenerateParams = GenerateFromSeedGenerateParams.Seeds;

export namespace GenerateFromSeedGenerateParams {
  export interface Seeds {
    /**
     * The application description to generate contract for.
     */
    contract_description: string;

    /**
     * The number of LLM inputs to generate
     */
    num_inputs: number;

    /**
     * The list of LLM inputs to be used as seeds
     */
    seeds: Array<string>;
  }
}

export declare namespace GenerateFromSeeds {
  export {
    type GenerateFromSeedRetrieveResponse as GenerateFromSeedRetrieveResponse,
    type GenerateFromSeedGenerateResponse as GenerateFromSeedGenerateResponse,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedGenerateParams as GenerateFromSeedGenerateParams,
  };
}
