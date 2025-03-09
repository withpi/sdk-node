// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CalibrateAPI from '../contracts/calibrate';
import * as PiScoringSystemAPI from '../pi-scoring-system/pi-scoring-system';

export class Calibrate extends APIResource {}

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
  calibrated_scoring_system?: PiScoringSystemAPI.ScoringSystem | null;
}

export declare namespace Calibrate {
  export { type CalibrationStatus as CalibrationStatus };
}
