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
  ): Core.APIPromise<ScoringSystemGenerateResponse> {
    return this._client.post('/scoring_system/generate', { body, ...options });
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
   * Scores the provided input and output based on the given scoring spec or a list
   * of questions
   */
  score(
    body: ScoringSystemScoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSystemMetrics> {
    return this._client.post('/scoring_system/score', { body, ...options });
  }
}

export type ScoringSystemGenerateResponse =
  Array<ScoringSystemGenerateResponse.ScoringSystemGenerateResponseItem>;

export namespace ScoringSystemGenerateResponse {
  export interface ScoringSystemGenerateResponseItem {
    /**
     * The description of the dimension
     */
    question: string;

    /**
     * The tag or the group to which
     */
    tag: string | null;

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
   * Either a scoring spec or a list of questions to score
   */
  scoring_input: Shared.ScoringSpec | Array<ScoringSystemScoreParams.UnionMember1>;
}

export namespace ScoringSystemScoreParams {
  export interface UnionMember1 {
    /**
     * The description of the dimension
     */
    question: string;

    /**
     * The tag or the group to which
     */
    tag: string | null;

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

ScoringSystem.Calibrate = Calibrate;

export declare namespace ScoringSystem {
  export {
    type ScoringSystemGenerateResponse as ScoringSystemGenerateResponse,
    type ScoringSystemGenerateParams as ScoringSystemGenerateParams,
    type ScoringSystemImportSpecParams as ScoringSystemImportSpecParams,
    type ScoringSystemScoreParams as ScoringSystemScoreParams,
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
