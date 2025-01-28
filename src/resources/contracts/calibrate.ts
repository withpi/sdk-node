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
   * Opens a message stream about a contract calibration job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/contracts/calibrate/${jobId}/messages`, options);
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

export type CalibrateStreamMessagesResponse = unknown;

export declare namespace Calibrate {
  export {
    type ContractCalibrationStatus as ContractCalibrationStatus,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
  };
}
