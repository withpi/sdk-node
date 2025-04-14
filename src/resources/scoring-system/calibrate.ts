// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Calibrate extends APIResource {
  /**
   * Checks the status of a Scoring Spec Calibration job
   */
  retrieve(
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSpecCalibrationStatus> {
    return this._client.get(`/scoring_system/calibrate/${jobId}`, options);
  }

  /**
   * Lists the Scoring Spec Calibration Jobs owned by a user
   */
  list(query?: CalibrateListParams, options?: Core.RequestOptions): Core.APIPromise<CalibrateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CalibrateListResponse>;
  list(
    query: CalibrateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CalibrateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/scoring_system/calibrate', { query, ...options });
  }

  /**
   * Cancels a Scoring Spec Calibration job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/scoring_system/calibrate/${jobId}`, options);
  }

  /**
   * Starts a Scoring Spec Calibration job
   */
  startJob(
    body: CalibrateStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ScoringSpecCalibrationStatus> {
    return this._client.post('/scoring_system/calibrate', { body, ...options });
  }

  /**
   * Opens a message stream about a Scoring Spec Calibration job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/scoring_system/calibrate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type CalibrateListResponse = Array<Shared.ScoringSpecCalibrationStatus>;

export type CalibrateCancelResponse = string;

export type CalibrateStreamMessagesResponse = string;

export interface CalibrateListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface CalibrateStartJobParams {
  /**
   * The scoring spec to calibrate
   */
  scoring_spec: Shared.ScoringSpec;

  /**
   * Rated examples to use when calibrating the scoring spec. Must specify either the
   * examples or the preference examples
   */
  examples?: Array<CalibrateStartJobParams.Example> | null;

  /**
   * Preference examples to use when calibrating the scoring spec. Must specify
   * either the examples or preference examples
   */
  preference_examples?: Array<CalibrateStartJobParams.PreferenceExample> | null;

  /**
   * The strategy to use to calibrate the scoring spec. FULL would take longer than
   * LITE but may result in better result.
   */
  strategy?: 'LITE' | 'FULL';
}

export namespace CalibrateStartJobParams {
  /**
   * An labeled example for training or evaluation
   */
  export interface Example {
    /**
     * The input to LLM
     */
    llm_input: string;

    /**
     * The output to evaluate
     */
    llm_output: string;

    /**
     * The rating of the llm_output given the llm_input
     */
    rating: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree';
  }

  /**
   * An preference example for training or evaluation
   */
  export interface PreferenceExample {
    /**
     * The chosen output in corresponding to the llm_input.
     */
    chosen: string;

    /**
     * The input to LLM
     */
    llm_input: string;

    /**
     * The rejected output in corresponding to the llm_input.
     */
    rejected: string;
  }
}

export declare namespace Calibrate {
  export {
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };
}
