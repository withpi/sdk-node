// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as ContractsAPI from './contracts/contracts';

export interface ScoringSystem {
  /**
   * The application description
   */
  description: string;

  /**
   * The name of the scoring system
   */
  name: string;

  /**
   * The dimensions of the scoring system
   */
  dimensions?: Array<ContractsAPI.SDKDimension>;
  [k: string]: unknown;
}

export interface ScoringSystemMetrics {
  /**
   * The score components for each dimension
   */
  dimension_scores: Record<string, ScoringSystemMetrics.DimensionScores>;

  /**
   * The total score of the scoring system
   */
  total_score: number;
}

export namespace ScoringSystemMetrics {
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

export interface SDKContract {
  /**
   * The description of the contract
   */
  description: string;

  /**
   * The name of the contract
   */
  name: string;

  /**
   * The dimensions of the contract
   */
  dimensions?: Array<ContractsAPI.SDKDimension>;
  [k: string]: unknown;
}
