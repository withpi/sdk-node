// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CalibrateAPI from './calibrate';
import { Calibrate, ScoringSystemCalibrationStatus } from './calibrate';

export class PiScoringSystem extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);
}

PiScoringSystem.Calibrate = Calibrate;

export declare namespace PiScoringSystem {
  export { Calibrate as Calibrate, type ScoringSystemCalibrationStatus as ScoringSystemCalibrationStatus };
}
