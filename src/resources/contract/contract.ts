// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as DimensionAPI from './dimension';
import { Dimension, DimensionGenerateParams, DimensionScoreParams } from './dimension';

export class Contract extends APIResource {
  dimension: DimensionAPI.Dimension = new DimensionAPI.Dimension(this._client);

  /**
   * Calibrates a contract
   */
  calibrate(body: ContractCalibrateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Contract> {
    return this._client.post('/contracts/calibrate', { body, ...options });
  }

  /**
   * Genrate dimensions for a contract
   */
  generateDimensions(
    body: ContractGenerateDimensionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contract> {
    return this._client.post('/contracts/generate_dimensions', { body, ...options });
  }

  /**
   * Scores a contract
   */
  score(body: ContractScoreParams, options?: Core.RequestOptions): Core.APIPromise<ContractsScoreMetrics> {
    return this._client.post('/contracts/score', { body, ...options });
  }
}

export interface ContractsScoreMetrics {
  /**
   * The score components for each dimension
   */
  scores: Record<string, number>;

  /**
   * The total score of the contract
   */
  total_score: number;

  /**
   * Map of score names to their weights in the overall score
   */
  weights: Record<string, number>;
}

export interface ContractCalibrateParams {
  /**
   * The contract to calibrate
   */
  contract: Shared.Contract;

  /**
   * The feedbacks to use for calibration
   */
  feedbacks: Array<ContractCalibrateParams.Feedback>;
}

export namespace ContractCalibrateParams {
  export interface Feedback {
    /**
     * The labels for each dimension
     */
    labels: Record<string, string>;

    /**
     * The input to evaluate
     */
    llm_input: string | Record<string, string>;

    /**
     * The output to evaluate
     */
    llm_output: string;

    /**
     * The scores for each dimension
     */
    scores: Record<string, number>;
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

Contract.Dimension = Dimension;

export declare namespace Contract {
  export {
    type ContractsScoreMetrics as ContractsScoreMetrics,
    type ContractCalibrateParams as ContractCalibrateParams,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractScoreParams as ContractScoreParams,
  };

  export {
    Dimension as Dimension,
    type DimensionGenerateParams as DimensionGenerateParams,
    type DimensionScoreParams as DimensionScoreParams,
  };
}
