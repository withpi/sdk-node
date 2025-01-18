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
   * Evaluates inputs against a contract description
   */
  evaluate(
    body: InputEvaluateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAPI.InputEvaluationMetrics> {
    return this._client.post('/data/input/evaluate', { body, ...options });
  }

  /**
   * Generates seed messages for input data.
   */
  generateSeeds(
    body: InputGenerateSeedsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAPI.DataGenerationStatus> {
    return this._client.post('/data/input/generate_seeds', { body, ...options });
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
   * The inputs to evaluate
   */
  llm_inputs: Array<string>;
}

export interface InputGenerateSeedsParams {
  /**
   * The contract to generate input seeds for.
   */
  contract: Shared.Contract;

  /**
   * Number of input seeds to generate.
   */
  num_inputs: number;

  /**
   * The types of context to generate for the input prompts if specified. Otherwise
   * the context_types will be inferred.
   */
  context_types?: Array<
    | 'none'
    | 'article'
    | 'conversation'
    | 'debate'
    | 'webpage'
    | 'passage'
    | 'chat history'
    | 'email thread'
    | 'text messages'
    | 'financial document'
    | 'scientific paper'
    | 'slide presentation description'
  > | null;
}

Inputs.GenerateFromSeeds = GenerateFromSeeds;

export declare namespace Inputs {
  export {
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
    type InputEvaluateParams as InputEvaluateParams,
    type InputGenerateSeedsParams as InputGenerateSeedsParams,
  };

  export {
    GenerateFromSeeds as GenerateFromSeeds,
    type GenerateFromSeedStreamMessagesResponse as GenerateFromSeedStreamMessagesResponse,
    type GenerateFromSeedGenerateParams as GenerateFromSeedGenerateParams,
  };
}
