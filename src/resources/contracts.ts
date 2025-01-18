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
   * Read a contract from Huggingface dataset
   */
  readFromHf(
    body: ContractReadFromHfParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contract> {
    return this._client.post('/contracts/read_from_hf', { body, ...options });
  }

  /**
   * Scores a contract based on the provided input and output
   */
  score(body: ContractScoreParams, options?: Core.RequestOptions): Core.APIPromise<ContractsScoreMetrics> {
    return this._client.post('/contracts/score', { body, ...options });
  }

  /**
   * Write a contract to Huggingface dataset
   */
  writeToHf(body: ContractWriteToHfParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/contracts/write_to_hf', { body, ...options });
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
  dimensions?: Array<Shared.Dimension>;
}

export type ContractWriteToHfResponse = unknown;

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
   * An labeled example for training or evaluation
   */
  export interface Example {
    /**
     * The input to LLM
     */
    llm_input: string;

    /**
     * The output to evaluate
     */
    llm_output: string;

    /**
     * The rating of the llm_output given the llm_input
     */
    rating: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree';
  }
}

export interface ContractGenerateDimensionsParams {
  contract: Shared.Contract;
}

export interface ContractReadFromHfParams {
  /**
   * Huggingface contract name e.g. 2pir/my_contract. You need to provide the
   * hf_token if the contract dataset is not public or not own by the 2pir
   * organization.
   */
  hf_contract_name: string;

  /**
   * Huggingface token to read the contract dataset
   */
  hf_token?: string | null;
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

export interface ContractWriteToHfParams {
  /**
   * The contract to write to Huggingface
   */
  contract: Shared.Contract;

  /**
   * Huggingface contract name e.g. 2pir/my_contract. By default we export to the
   * 2pir organization. If you want to use your own organization, we provide the
   * hf_token.
   */
  hf_contract_name: string;

  /**
   * Huggingface token to use if you want to write to your own HF organization
   */
  hf_token?: string | null;
}

export declare namespace Contracts {
  export {
    type ContractsScoreMetrics as ContractsScoreMetrics,
    type SDKContract as SDKContract,
    type ContractWriteToHfResponse as ContractWriteToHfResponse,
    type ContractCalibrateParams as ContractCalibrateParams,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractReadFromHfParams as ContractReadFromHfParams,
    type ContractScoreParams as ContractScoreParams,
    type ContractWriteToHfParams as ContractWriteToHfParams,
  };
}
