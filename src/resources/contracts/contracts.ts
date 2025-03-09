// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CalibrateAPI from './calibrate';
import {
  Calibrate,
  CalibrateCancelResponse,
  CalibrateLaunchParams,
  CalibrateListParams,
  CalibrateListResponse,
  CalibrateMessagesResponse,
  CalibrationStrategy,
  ContractCalibrationStatus,
  SDKLabeledExample,
  SDKPreferenceExample,
  State,
} from './calibrate';

export class Contracts extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);

  /**
   * Generates dimensions for a contract which will be used to evaluate it
   */
  generateDimensions(
    body: ContractGenerateDimensionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SDKContract> {
    return this._client.post('/contracts/generate_dimensions', { body, ...options });
  }

  /**
   * Read a scoring system from Huggingface dataset
   */
  readFromHf(body: ContractReadFromHfParams, options?: Core.RequestOptions): Core.APIPromise<SDKContract> {
    return this._client.post('/contracts/read_from_hf', { body, ...options });
  }

  /**
   * Scores a contract based on the provided input and output
   */
  score(body: ContractScoreParams, options?: Core.RequestOptions): Core.APIPromise<ScoringSystemMetrics> {
    return this._client.post('/contracts/score', { body, ...options });
  }
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
  dimensions?: Array<SDKDimension>;
  [k: string]: unknown;
}

export interface SDKDimension {
  /**
   * The description of the dimension
   */
  description: string;

  /**
   * The label of the dimension
   */
  label: string;

  /**
   * The sub dimensions of the dimension
   */
  sub_dimensions: Array<SDKDimension.SubDimension>;

  /**
   * The learned parameters for the scoring method. This represents piecewise linear
   * interpolation between [0, 1].
   */
  parameters?: Array<number> | null;

  /**
   * The weight of the dimension The sum of dimension weights will be normalized to
   * one internally. A higher weight counts for more when aggregating this dimension
   * is aggregated into the final score.
   */
  weight?: number | null;
  [k: string]: unknown;
}

export namespace SDKDimension {
  export interface SubDimension {
    /**
     * The description of the dimension
     */
    description: string;

    /**
     * The label of the dimension
     */
    label: string;

    /**
     * The type of scoring performed for this dimension
     */
    scoring_type: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

    /**
     * The ID of the custom model to use for scoring. Only relevant for scoring_type of
     * CUSTOM_MODEL_SCORER
     */
    custom_model_id?: string | null;

    /**
     * The learned parameters for the scoring method. This represents piecewise linear
     * interpolation between [0, 1].
     */
    parameters?: Array<number> | null;

    /**
     * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
     */
    python_code?: string | null;

    /**
     * The weight of the subdimension. The sum of subdimension weights will be
     * normalized to one internally. A higher weight counts for more when aggregating
     * this subdimension into the parent dimension.
     */
    weight?: number | null;
    [k: string]: unknown;
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
  scoring_system: SDKContract;
}

Contracts.Calibrate = Calibrate;

export declare namespace Contracts {
  export {
    type ScoringSystemMetrics as ScoringSystemMetrics,
    type SDKContract as SDKContract,
    type SDKDimension as SDKDimension,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractReadFromHfParams as ContractReadFromHfParams,
    type ContractScoreParams as ContractScoreParams,
  };

  export {
    Calibrate as Calibrate,
    type CalibrationStrategy as CalibrationStrategy,
    type ContractCalibrationStatus as ContractCalibrationStatus,
    type SDKLabeledExample as SDKLabeledExample,
    type SDKPreferenceExample as SDKPreferenceExample,
    type State as State,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateMessagesResponse as CalibrateMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateLaunchParams as CalibrateLaunchParams,
  };
}
