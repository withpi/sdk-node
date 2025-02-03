// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Calibrate extends APIResource {
  /**
   * Checks on a contract calibration job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ContractCalibrationStatus> {
    return this._client.get(`/contracts/calibrate/${jobId}`, options);
  }

  /**
   * Start a contract calibration job
   */
  startJob(
    body: CalibrateStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractCalibrationStatus> {
    return this._client.post('/contracts/calibrate', { body, ...options });
  }

  /**
   * Opens a message stream about a contract calibration job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/contracts/calibrate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface ContractCalibrationStatus {
  /**
   * The calibrated contract
   */
  calibrated_contract: Shared.Contract | null;

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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';
}

export type CalibrateStreamMessagesResponse = string;

export interface CalibrateStartJobParams {
  /**
   * The contract to calibrate
   */
  contract: Shared.Contract;

  /**
   * Rated examples to use when calibrating the contract. Must specify either the
   * examples or the preference examples
   */
  examples?: Array<CalibrateStartJobParams.Example> | null;

  /**
   * Preference examples to use when calibrating the contract. Must specify either
   * the examples or preference examples
   */
  preference_examples?: Array<CalibrateStartJobParams.PreferenceExample> | null;

  /**
   * The strategy to use to calibrate the contract. FULL would take longer than LITE
   * but may result in better result.
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
    type ContractCalibrationStatus as ContractCalibrationStatus,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };
}
