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
import * as GenerateAPI from './generate';
import {
  Generate,
  GenerateCancelResponse,
  GenerateListParams,
  GenerateListResponse,
  GenerateRetrieveResponse,
  GenerateStartJobParams,
  GenerateStartJobResponse,
  GenerateStreamMessagesResponse,
} from './generate';

export class ScoringSystem extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);
  generate: GenerateAPI.Generate = new GenerateAPI.Generate(this._client);

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
  scoring_spec: Array<Shared.Question>;

  /**
   * The strategy to combine the individual question scores to get the total score.
   * Defaults to HARMONIC_MEAN.
   */
  aggregation_method?: 'ARITHMETIC_MEAN' | 'GEOMETRIC_MEAN' | 'HARMONIC_MEAN';

  /**
   * Optional additional parameters (keyword arguments)
   */
  kwargs?: unknown;
}

ScoringSystem.Calibrate = Calibrate;
ScoringSystem.Generate = Generate;

export declare namespace ScoringSystem {
  export { type ScoringSystemScoreParams as ScoringSystemScoreParams };

  export {
    Calibrate as Calibrate,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };

  export {
    Generate as Generate,
    type GenerateRetrieveResponse as GenerateRetrieveResponse,
    type GenerateListResponse as GenerateListResponse,
    type GenerateCancelResponse as GenerateCancelResponse,
    type GenerateStartJobResponse as GenerateStartJobResponse,
    type GenerateStreamMessagesResponse as GenerateStreamMessagesResponse,
    type GenerateListParams as GenerateListParams,
    type GenerateStartJobParams as GenerateStartJobParams,
  };
}
