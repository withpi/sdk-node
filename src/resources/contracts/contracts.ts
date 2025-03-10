// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CalibrateAPI from './calibrate';
import { Calibrate, CalibrationStrategy, SDKLabeledExample, SDKPreferenceExample, State } from './calibrate';

export class Contracts extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);
}

Contracts.Calibrate = Calibrate;

export declare namespace Contracts {
  export {
    Calibrate as Calibrate,
    type CalibrationStrategy as CalibrationStrategy,
    type SDKLabeledExample as SDKLabeledExample,
    type SDKPreferenceExample as SDKPreferenceExample,
    type State as State,
  };
}
