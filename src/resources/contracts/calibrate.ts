// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Calibrate extends APIResource {
  /**
   * Lists the Contract Calibration Jobs owned by a user
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
    return this._client.get('/contracts/calibrate', { query, ...options });
  }

  /**
   * Cancels a Contract Calibration job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/contracts/calibrate/${jobId}`, options);
  }

  /**
   * Launches a Contract Calibration job
   */
  launch(
    body: CalibrateLaunchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractCalibrationStatus> {
    return this._client.post('/contracts/calibrate', { body, ...options });
  }

  /**
   * Opens a message stream about a Contract Calibration job
   */
  messages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/contracts/calibrate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Checks the status of a Contract Calibration job
   */
  status(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ContractCalibrationStatus> {
    return this._client.get(`/contracts/calibrate/${jobId}`, options);
  }
}

export type CalibrationStrategy = 'LITE' | 'FULL';

export interface ContractCalibrationStatus {
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
  state: State;

  /**
   * The calibrated contract
   */
  calibrated_contract?: Shared.SDKContract | null;
}

/**
 * An labeled example for training or evaluation
 */
export interface SDKLabeledExample {
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
export interface SDKPreferenceExample {
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

export type State = 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

export type CalibrateListResponse = Array<ContractCalibrationStatus>;

export type CalibrateCancelResponse = string;

export type CalibrateMessagesResponse = string;

export interface CalibrateListParams {
  /**
   * Filter jobs by state
   */
  state?: State | null;
}

export interface CalibrateLaunchParams {
  /**
   * The scoring system to calibrate
   */
  scoring_system: Shared.SDKContract;

  /**
   * Rated examples to use when calibrating the scoring system. Must specify either
   * the examples or the preference examples
   */
  examples?: Array<SDKLabeledExample> | null;

  /**
   * Preference examples to use when calibrating the scoring system. Must specify
   * either the examples or preference examples
   */
  preference_examples?: Array<SDKPreferenceExample> | null;

  /**
   * The strategy to use to calibrate the scoring system. FULL would take longer than
   * LITE but may result in better result.
   */
  strategy?: CalibrationStrategy;
}

export declare namespace Calibrate {
  export {
    type CalibrationStrategy as CalibrationStrategy,
    type ContractCalibrationStatus as ContractCalibrationStatus,
    type SDKLabeledExample as SDKLabeledExample,
    type SDKPreferenceExample as SDKPreferenceExample,
    type State as State,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateMessagesResponse as CalibrateMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateLaunchParams as CalibrateLaunchParams,
  };
}
