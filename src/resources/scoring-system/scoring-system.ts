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
   * Import a scoring spec from various sources
   */
  importSpec(
    body: ScoringSystemImportSpecParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScoringSystemImportSpecResponse> {
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

  /**
   * Write a scoring spec to Huggingface dataset
   */
  uploadToHuggingface(
    body: ScoringSystemUploadToHuggingfaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/scoring_system/to_huggingface', { body, ...options });
  }
}

export type ScoringSystemImportSpecResponse = Array<Shared.Question>;

export type ScoringSystemUploadToHuggingfaceResponse = string;

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

export interface ScoringSystemUploadToHuggingfaceParams {
  /**
   * Huggingface scoring spec name e.g. withpi/my_scoring_system. By default we
   * export to the withpi organization. If you want to use your own organization, we
   * provide the hf_token.
   */
  hf_scoring_spec_name: string;

  /**
   * The list of questions or the scoring spec to write to Huggingface
   */
  scoring_spec: Array<Shared.Question>;

  /**
   * Huggingface token to use if you want to write to your own HF organization
   */
  hf_token?: string | null;
}

ScoringSystem.Calibrate = Calibrate;
ScoringSystem.Generate = Generate;

export declare namespace ScoringSystem {
  export {
    type ScoringSystemImportSpecResponse as ScoringSystemImportSpecResponse,
    type ScoringSystemUploadToHuggingfaceResponse as ScoringSystemUploadToHuggingfaceResponse,
    type ScoringSystemImportSpecParams as ScoringSystemImportSpecParams,
    type ScoringSystemScoreParams as ScoringSystemScoreParams,
    type ScoringSystemUploadToHuggingfaceParams as ScoringSystemUploadToHuggingfaceParams,
  };

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
