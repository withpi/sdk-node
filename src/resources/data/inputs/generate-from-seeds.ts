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
    params: GenerateFromSeedGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAPI.DataGenerationStatus> {
    const { num_inputs, seeds } = params;
    return this._client.post('/data/input/generate_from_seeds', {
      query: { num_inputs },
      body: seeds,
      ...options,
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

export type GenerateFromSeedStreamMessagesResponse = string;

export interface GenerateFromSeedGenerateParams {
  /**
   * Query param:
   */
  num_inputs: number;

  /**
   * Body param:
   */
  seeds: Array<string>;
}

export declare namespace GenerateFromSeeds {
  export {
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedGenerateParams as GenerateFromSeedGenerateParams,
  };
}
