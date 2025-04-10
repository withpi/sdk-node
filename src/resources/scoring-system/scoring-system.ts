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
   * The scoring spec to score
   */
  scoring_spec: Shared.ScoringSpec;
}

ScoringSystem.Calibrate = Calibrate;

export declare namespace ScoringSystem {
  export {
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
