// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Contracts extends APIResource {
  /**
   * Calibrate the contract scoring dimension
   */
  calibrate(body: ContractCalibrateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Contract> {
    return this._client.post('/contracts/calibrate', { body, ...options });
  }

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

export interface ContractCalibrateParams {
  /**
   * The contract to calibrate
   */
  contract: Shared.Contract;

  /**
   * Rated examples to use when calibrating the contract
   */
  examples: Array<ContractCalibrateParams.Example>;
}

export namespace ContractCalibrateParams {
  /**
   * An example for training or evaluation
   */
  export interface Example {
    /**
     * The input to evaluate
     */
    llm_input: string | Record<string, string>;

    /**
     * The output to evaluate
     */
    llm_output: string;

    /**
     * The rating of the llm_output given the llm_input
     */
    rating?: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree' | null;
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
    type ContractCalibrateParams as ContractCalibrateParams,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractScoreParams as ContractScoreParams,
  };
}
