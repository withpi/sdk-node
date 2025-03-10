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
   * Read a scoring system from Huggingface dataset
   */
  fromHuggingface(
    body: ScoringSystemFromHuggingfaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Scorer> {
    return this._client.post('/scoring_system/from_huggingface', { body, ...options });
  }

  /**
   * Generates a scorer
   */
  generate(body: ScoringSystemGenerateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Scorer> {
    return this._client.post('/scoring_system/generate', { body, ...options });
  }

  /**
   * Scores the provided input and output based on the given scorer
   */
  score(
    body: ScoringSystemScoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSystemMetrics> {
    return this._client.post('/scoring_system/score', { body, ...options });
  }
}

export interface ScoringSystemFromHuggingfaceParams {
  /**
   * Huggingface scoring system name e.g. withpi/my_scoring_system. You need to
   * provide the hf_token if the scoring system dataset is not public or not own by
   * the withpi organization.
   */
  hf_scorer_name: string;

  /**
   * Huggingface token to use if you want to read to your own HF organization
   */
  hf_token?: string | null;
}

export interface ScoringSystemGenerateParams {
  /**
   * The application description to generate a scoring system for.
   */
  application_description: string;

  /**
   * If true, try to generate python code for sub-dimensions in the scoring system.
   */
  try_auto_generating_python_code?: boolean;
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
   * The scoring system to score
   */
  scorer: Shared.Scorer;
}

ScoringSystem.Calibrate = Calibrate;

export declare namespace ScoringSystem {
  export {
    type ScoringSystemFromHuggingfaceParams as ScoringSystemFromHuggingfaceParams,
    type ScoringSystemGenerateParams as ScoringSystemGenerateParams,
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
