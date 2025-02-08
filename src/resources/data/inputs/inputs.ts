// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as GenerateFromSeedsAPI from './generate-from-seeds';
import {
  GenerateFromSeedGenerateParams,
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

export interface InputTopicCluster {
  /**
   * The input IDs assigned to this topic
   */
  inputs: Array<string>;

  /**
   * The topic of the input in this cluster
   */
  topic: string;
}

export type InputClusterResponse = Array<InputTopicCluster>;

export type InputClusterParams = Array<InputClusterParams.Input>;

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
  export {
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
  };

  export {
    GenerateFromSeeds as GenerateFromSeeds,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedGenerateParams as GenerateFromSeedGenerateParams,
  };
}
