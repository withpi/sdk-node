// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as GenerateFromSeedsAPI from './generate-from-seeds';
import {
  GenerateFromSeedCancelResponse,
  GenerateFromSeedListParams,
  GenerateFromSeedListResponse,
  GenerateFromSeedStartJobParams,
  GenerateFromSeedStreamDataResponse,
  GenerateFromSeedStreamMessagesResponse,
  GenerateFromSeeds,
} from './generate-from-seeds';

export class Inputs extends APIResource {
  generateFromSeeds: GenerateFromSeedsAPI.GenerateFromSeeds = new GenerateFromSeedsAPI.GenerateFromSeeds(
    this._client,
  );

  /**
   * Clusters inputs into groups with counts
   */
  cluster(body: InputClusterParams, options?: Core.RequestOptions): Core.APIPromise<InputClusterResponse> {
    return this._client.post('/data/input/cluster', { body, ...options });
  }
}

export type InputClusterResponse = Array<InputClusterResponse.InputClusterResponseItem>;

export namespace InputClusterResponse {
  export interface InputClusterResponseItem {
    /**
     * The input IDs assigned to this topic
     */
    inputs: Array<string>;

    /**
     * The topic of the input in this cluster
     */
    topic: string;
  }
}

export interface InputClusterParams {
  /**
   * The data to create clusters from.
   */
  inputs: Array<InputClusterParams.Input>;

  /**
   * The number of clusters to form. If none, the api chooses a number automatically.
   */
  num_clusters?: number | null;
}

export namespace InputClusterParams {
  export interface Input {
    /**
     * The identifier of the input
     */
    identifier: string;

    /**
     * The input to LLM
     */
    llm_input: string;
  }
}

Inputs.GenerateFromSeeds = GenerateFromSeeds;

export declare namespace Inputs {
  export { type InputClusterResponse as InputClusterResponse, type InputClusterParams as InputClusterParams };

  export {
    GenerateFromSeeds as GenerateFromSeeds,
    type GenerateFromSeedListResponse as GenerateFromSeedListResponse,
    type GenerateFromSeedCancelResponse as GenerateFromSeedCancelResponse,
    type GenerateFromSeedStreamDataResponse as GenerateFromSeedStreamDataResponse,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedListParams as GenerateFromSeedListParams,
    type GenerateFromSeedStartJobParams as GenerateFromSeedStartJobParams,
  };
}
