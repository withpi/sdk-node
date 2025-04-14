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

export type ScoringSystemGenerateResponse = Array<Shared.Question>;

export type ScoringSystemImportSpecResponse = Shared.ScoringSpec | Array<Shared.Question>;

export type ScoringSystemUploadToHuggingfaceResponse = string;

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
  scoring_spec: Shared.ScoringSpec | Array<Shared.Question>;
}

export interface ScoringSystemUploadToHuggingfaceParams {
  /**
   * Huggingface scoring spec name e.g. withpi/my_scoring_system. By default we
   * export to the withpi organization. If you want to use your own organization, we
   * provide the hf_token.
   */
  hf_scoring_spec_name: string;

  /**
   * The scoring spec or the list of questions to write to Huggingface
   */
  scoring_spec: Shared.ScoringSpec | Array<Shared.Question>;

  /**
   * Huggingface token to use if you want to write to your own HF organization
   */
  hf_token?: string | null;
}

ScoringSystem.Calibrate = Calibrate;

export declare namespace ScoringSystem {
  export {
    type ScoringSystemGenerateResponse as ScoringSystemGenerateResponse,
    type ScoringSystemImportSpecResponse as ScoringSystemImportSpecResponse,
    type ScoringSystemUploadToHuggingfaceResponse as ScoringSystemUploadToHuggingfaceResponse,
    type ScoringSystemGenerateParams as ScoringSystemGenerateParams,
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
}
