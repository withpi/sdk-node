// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as CalibrateAPI from './calibrate';
import {
  Calibrate,
  CalibrateCancelResponse,
  CalibrateListParams,
  CalibrateListResponse,
  CalibrateStartJobParams,
  CalibrateStreamMessagesResponse,
} from './calibrate';

export class Contracts extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);

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
   * Read a scoring system from Huggingface dataset
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
  /**
   * The application description to generate a scoring system for.
   */
  application_description: string;

  /**
   * If true, try to generate python code for sub-dimensions with structured
   * evaluation
   */
  try_auto_generating_python_code?: boolean;
}

export interface ContractReadFromHfParams {
  /**
   * Huggingface scoring system name e.g. withpi/my_scoring_system. You need to
   * provide the hf_token if the scoring system dataset is not public or not own by
   * the withpi organization.
   */
  hf_scoring_system_name: string;

  /**
   * Huggingface token to use if you want to read to your own HF organization
   */
  hf_token?: string | null;
}

export interface ContractScoreParams {
  /**
   * The input to score
   */
  llm_input: string;

  /**
   * The output to score
   */
  llm_output: string;

  /**
   * The scoring system to score
   */
  scoring_system: Shared.Contract;
}

Contracts.Calibrate = Calibrate;

export declare namespace Contracts {
  export {
    type ContractsScoreMetrics as ContractsScoreMetrics,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractReadFromHfParams as ContractReadFromHfParams,
    type ContractScoreParams as ContractScoreParams,
  };

  export {
    Calibrate as Calibrate,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };
}
