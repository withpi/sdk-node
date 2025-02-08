// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PpoAPI from './ppo/ppo';
import { Ppo, PpoStartJobParams, RlPpoStatus } from './ppo/ppo';

export class Rl extends APIResource {
  ppo: PpoAPI.Ppo = new PpoAPI.Ppo(this._client);
}

Rl.Ppo = Ppo;

export declare namespace Rl {
  export { Ppo as Ppo, type RlPpoStatus as RlPpoStatus, type PpoStartJobParams as PpoStartJobParams };
}
