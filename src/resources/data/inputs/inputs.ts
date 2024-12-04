// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as DataAPI from '../data';
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

  /**
   * Evaluates an input against a contract
   */
  evaluate(
    body: InputEvaluateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAPI.InputEvaluationMetrics> {
    return this._client.post('/data/input/evaluate', { body, ...options });
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

export type InputClusterParams = Array<InputClusterParams.Body>;

export namespace InputClusterParams {
  export interface Body {
    /**
     * The identifier of the input
     */
    identifier: string;

    /**
     * The input to evaluate
     */
    llm_input: string | Record<string, string>;
  }
}

export interface InputEvaluateParams {
  /**
   * The contract the input is intended to drive
   */
  contract: Shared.Contract;

  /**
   * The input to evaluate
   */
  llm_input: string | Record<string, string>;
}

Inputs.GenerateFromSeeds = GenerateFromSeeds;

export declare namespace Inputs {
  export {
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
    type InputEvaluateParams as InputEvaluateParams,
  };

  export {
    GenerateFromSeeds as GenerateFromSeeds,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedGenerateParams as GenerateFromSeedGenerateParams,
  };
}
