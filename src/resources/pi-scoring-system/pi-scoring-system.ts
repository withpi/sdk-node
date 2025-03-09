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
  ScoringSystemCalibrationStatus,
} from './calibrate';

export class PiScoringSystem extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);

  /**
   * Generates dimensions for a scoring system which will be used to evaluate it
   */
  generateDimensions(
    body: PiScoringSystemGenerateDimensionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSystem> {
    return this._client.post('/pi_scoring_system/generate_dimensions', { body, ...options });
  }

  /**
   * Read a scoring system from Huggingface dataset
   */
  readFromHf(
    body: PiScoringSystemReadFromHfParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSystem> {
    return this._client.post('/pi_scoring_system/read_from_hf', { body, ...options });
  }

  /**
   * Scores a scoring system based on the provided input and output
   */
  score(
    body: PiScoringSystemScoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSystemMetrics> {
    return this._client.post('/pi_scoring_system/score', { body, ...options });
  }
}

export interface PiScoringSystemGenerateDimensionsParams {
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

export interface PiScoringSystemReadFromHfParams {
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

export interface PiScoringSystemScoreParams {
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
  scoring_system: Shared.ScoringSystem;
}

PiScoringSystem.Calibrate = Calibrate;

export declare namespace PiScoringSystem {
  export {
    type PiScoringSystemGenerateDimensionsParams as PiScoringSystemGenerateDimensionsParams,
    type PiScoringSystemReadFromHfParams as PiScoringSystemReadFromHfParams,
    type PiScoringSystemScoreParams as PiScoringSystemScoreParams,
  };

  export {
    Calibrate as Calibrate,
    type ScoringSystemCalibrationStatus as ScoringSystemCalibrationStatus,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };
}
