// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Calibrate extends APIResource {
  /**
   * Launches a Scoring System Calibration job
   */
  create(
    body: CalibrateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CalibrateCreateResponse> {
    return this._client.post('/scorer/calibrate', { body, ...options });
  }

  /**
   * Checks the status of a Scoring System Calibration job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<CalibrateRetrieveResponse> {
    return this._client.get(`/scorer/calibrate/${jobId}`, options);
  }

  /**
   * Lists the Scoring System Calibration Jobs owned by a user
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
    return this._client.get('/scorer/calibrate', { query, ...options });
  }

  /**
   * Cancels a Scoring System Calibration job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/scorer/calibrate/${jobId}`, options);
  }

  /**
   * Opens a message stream about a Scoring System Calibration job
   */
  messages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/scorer/calibrate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface CalibrateCreateResponse {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * The calibrated scoring system
   */
  calibrated_scoring_system?: Shared.Scorer | null;
}

export interface CalibrateRetrieveResponse {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * The calibrated scoring system
   */
  calibrated_scoring_system?: Shared.Scorer | null;
}

export type CalibrateListResponse = Array<CalibrateListResponse.CalibrateListResponseItem>;

export namespace CalibrateListResponse {
  export interface CalibrateListResponseItem {
    /**
     * Detailed status of the job
     */
    detailed_status: Array<string>;

    /**
     * The job id
     */
    job_id: string;

    /**
     * Current state of the job
     */
    state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

    /**
     * The calibrated scoring system
     */
    calibrated_scoring_system?: Shared.Scorer | null;
  }
}

export type CalibrateCancelResponse = string;

export type CalibrateMessagesResponse = string;

export interface CalibrateCreateParams {
  /**
   * The scoring system to calibrate
   */
  scorer: Shared.Scorer;

  /**
   * Rated examples to use when calibrating the scoring system. Must specify either
   * the examples or the preference examples
   */
  examples?: Array<CalibrateCreateParams.Example> | null;

  /**
   * Preference examples to use when calibrating the scoring system. Must specify
   * either the examples or preference examples
   */
  preference_examples?: Array<CalibrateCreateParams.PreferenceExample> | null;

  /**
   * The strategy to use to calibrate the scoring system. FULL would take longer than
   * LITE but may result in better result.
   */
  strategy?: 'LITE' | 'FULL';
}

export namespace CalibrateCreateParams {
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

export interface CalibrateListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export declare namespace Calibrate {
  export {
    type CalibrateCreateResponse as CalibrateCreateResponse,
    type CalibrateRetrieveResponse as CalibrateRetrieveResponse,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateMessagesResponse as CalibrateMessagesResponse,
    type CalibrateCreateParams as CalibrateCreateParams,
    type CalibrateListParams as CalibrateListParams,
  };
}
