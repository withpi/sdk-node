// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CalibrateAPI from '../contracts/calibrate';
import * as ScoringSystemAPI from './scoring-system';

export class Calibrate extends APIResource {
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
    return this._client.get('/scoring_system/calibrate', { query, ...options });
  }

  /**
   * Cancels a Scoring System Calibration job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/scoring_system/calibrate/${jobId}`, options);
  }

  /**
   * Launches a Scoring System Calibration job
   */
  launch(body: CalibrateLaunchParams, options?: Core.RequestOptions): Core.APIPromise<CalibrationStatus> {
    return this._client.post('/scoring_system/calibrate', { body, ...options });
  }

  /**
   * Opens a message stream about a Scoring System Calibration job
   */
  messages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/scoring_system/calibrate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Checks the status of a Scoring System Calibration job
   */
  status(jobId: string, options?: Core.RequestOptions): Core.APIPromise<CalibrationStatus> {
    return this._client.get(`/scoring_system/calibrate/${jobId}`, options);
  }
}

export interface CalibrationStatus {
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
  state: CalibrateAPI.State;

  /**
   * The calibrated scoring system
   */
  calibrated_scoring_system?: ScoringSystemAPI.ScoringSystem | null;
}

export type CalibrateListResponse = Array<CalibrationStatus>;

export type CalibrateCancelResponse = string;

export type CalibrateMessagesResponse = string;

export interface CalibrateListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export interface CalibrateLaunchParams {
  /**
   * The scoring system to calibrate
   */
  scoring_system: ScoringSystemAPI.ScoringSystem;

  /**
   * Rated examples to use when calibrating the scoring system. Must specify either
   * the examples or the preference examples
   */
  examples?: Array<CalibrateAPI.SDKLabeledExample> | null;

  /**
   * Preference examples to use when calibrating the scoring system. Must specify
   * either the examples or preference examples
   */
  preference_examples?: Array<CalibrateAPI.SDKPreferenceExample> | null;

  /**
   * The strategy to use to calibrate the scoring system. FULL would take longer than
   * LITE but may result in better result.
   */
  strategy?: CalibrateAPI.CalibrationStrategy;
}

export declare namespace Calibrate {
  export {
    type CalibrationStatus as CalibrationStatus,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateMessagesResponse as CalibrateMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateLaunchParams as CalibrateLaunchParams,
  };
}
