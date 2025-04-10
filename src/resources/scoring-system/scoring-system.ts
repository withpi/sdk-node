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
  CalibrateRetrieveResponse,
  CalibrateStartJobParams,
  CalibrateStartJobResponse,
  CalibrateStreamMessagesResponse,
} from './calibrate';

export class ScoringSystem extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);

  /**
   * Generates a scoring spec
   */
  generate(
    body: ScoringSystemGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSpec> {
    return this._client.post('/scoring_system/generate', { body, ...options });
  }

  /**
   * Generates a scoring spec v2
   */
  generateV2(
    body: ScoringSystemGenerateV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScoringSystemGenerateV2Response> {
    return this._client.post('/scoring_system/generate_v2', { body, ...options });
  }

  /**
   * Import a scoring spec from various sources
   */
  importSpec(
    body: ScoringSystemImportSpecParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSpec> {
    return this._client.post('/scoring_system/import_spec', { body, ...options });
  }

  /**
   * Scores the provided input and output based on the given scoring spec
   */
  score(
    body: ScoringSystemScoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSystemMetrics> {
    return this._client.post('/scoring_system/score', { body, ...options });
  }

  /**
   * Scores the provided input and output based on the given scoring spec
   */
  scoreV2(
    body: ScoringSystemScoreV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScoringSystemScoreV2Response> {
    return this._client.post('/scoring_system/score_v2', { body, ...options });
  }
}

export interface ScoringSystemGenerateV2Response {
  /**
   * The dimensions of the scoring spec
   */
  dimensions: Array<ScoringSystemGenerateV2Response.Dimension>;
}

export namespace ScoringSystemGenerateV2Response {
  export interface Dimension {
    /**
     * The description of the dimension
     */
    question: string;

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
     * The type of scoring performed for this dimension
     */
    scoring_type?: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER' | null;

    /**
     * The weight of the dimension. The sum of subdimension weights will be normalized
     * to one internally. A higher weight counts for more when aggregating this
     * subdimension into the parent dimension.
     */
    weight?: number | null;
  }
}

export interface ScoringSystemScoreV2Response {
  /**
   * The score components for each dimension
   */
  dimension_scores: Record<string, number>;

  /**
   * The total score of the scoring spec
   */
  total_score: number;
}

export interface ScoringSystemGenerateParams {
  /**
   * The application description to generate a scoring spec for.
   */
  application_description: string;

  /**
   * If true, try to generate python code for sub-dimensions in the scoring spec.
   */
  try_auto_generating_python_code?: boolean;
}

export interface ScoringSystemGenerateV2Params {
  /**
   * The application description to generate a scoring spec for.
   */
  application_description: string;

  /**
   * If true, try to generate python code for sub-dimensions in the scoring spec.
   */
  try_auto_generating_python_code?: boolean;
}

export interface ScoringSystemImportSpecParams {
  /**
   * Huggingface dataset e.g. withpi/my_scoring_system containing the Scoring spec.
   * This is only needed for the source=HUGGINGFACE.
   */
  hf_scoring_spec_name: string;

  /**
   * Huggingface token to use if you want to read to your own HF organization. This
   * is only needed for the source=HUGGINGFACE.
   */
  hf_token?: string | null;

  /**
   * Source of where to get the Scoring spec
   */
  source?: 'HUGGINGFACE';
}

export interface ScoringSystemScoreParams {
  /**
   * The input to score
   */
  llm_input: string;

  /**
   * The output to score
   */
  llm_output: string;

  /**
   * The scoring spec to score
   */
  scoring_spec: Shared.ScoringSpec;
}

export interface ScoringSystemScoreV2Params {
  /**
   * The input to score
   */
  llm_input: string;

  /**
   * The output to score
   */
  llm_output: string;

  /**
   * The scoring spec to score
   */
  scoring_spec: ScoringSystemScoreV2Params.ScoringSpec;
}

export namespace ScoringSystemScoreV2Params {
  /**
   * The scoring spec to score
   */
  export interface ScoringSpec {
    /**
     * The dimensions of the scoring spec
     */
    dimensions: Array<ScoringSpec.Dimension>;
  }

  export namespace ScoringSpec {
    export interface Dimension {
      /**
       * The description of the dimension
       */
      question: string;

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
       * The type of scoring performed for this dimension
       */
      scoring_type?: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER' | null;

      /**
       * The weight of the dimension. The sum of subdimension weights will be normalized
       * to one internally. A higher weight counts for more when aggregating this
       * subdimension into the parent dimension.
       */
      weight?: number | null;
    }
  }
}

ScoringSystem.Calibrate = Calibrate;

export declare namespace ScoringSystem {
  export {
    type ScoringSystemGenerateV2Response as ScoringSystemGenerateV2Response,
    type ScoringSystemScoreV2Response as ScoringSystemScoreV2Response,
    type ScoringSystemGenerateParams as ScoringSystemGenerateParams,
    type ScoringSystemGenerateV2Params as ScoringSystemGenerateV2Params,
    type ScoringSystemImportSpecParams as ScoringSystemImportSpecParams,
    type ScoringSystemScoreParams as ScoringSystemScoreParams,
    type ScoringSystemScoreV2Params as ScoringSystemScoreV2Params,
  };

  export {
    Calibrate as Calibrate,
    type CalibrateRetrieveResponse as CalibrateRetrieveResponse,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateStartJobResponse as CalibrateStartJobResponse,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };
}
