// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CalibrateAPI from './calibrate';
import { Calibrate } from './calibrate';

export class Scorers extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);
}

Scorers.Calibrate = Calibrate;

export declare namespace Scorers {
  export { Calibrate as Calibrate };
}
