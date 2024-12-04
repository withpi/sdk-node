// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Contracts extends APIResource {
  /**
   * Generates dimensions for a contract which will be used to evaluate it
   */
  generateDimensions(
    body: ContractGenerateDimensionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contract> {
    return this._client.post('/contracts/generate_dimensions', { body, ...options });
  }

  /**
   * Scores a contract based on the provided input and output
   */
  score(body: ContractScoreParams, options?: Core.RequestOptions): Core.APIPromise<ContractsScoreMetrics> {
    return this._client.post('/contracts/score', { body, ...options });
  }
}

export interface ContractsScoreMetrics {
  /**
   * The score components for each dimension
   */
  dimension_scores: Record<string, ContractsScoreMetrics.DimensionScores>;

  /**
   * The total score of the contract
   */
  total_score: number;
}

export namespace ContractsScoreMetrics {
  export interface DimensionScores {
    /**
     * The score components for each subdimension
     */
    subdimension_scores: Record<string, number>;

    /**
     * The total score of the dimension
     */
    total_score: number;
  }
}

export interface ContractGenerateDimensionsParams {
  contract: Shared.Contract;
}

export interface ContractScoreParams {
  /**
   * The contract to score
   */
  contract: Shared.Contract;

  /**
   * The input to score
   */
  llm_input: string | Record<string, string>;

  /**
   * The output to score
   */
  llm_output: string;
}

export declare namespace Contracts {
  export {
    type ContractsScoreMetrics as ContractsScoreMetrics,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractScoreParams as ContractScoreParams,
  };
}
