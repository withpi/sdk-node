// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GrpoAPI from './grpo';
import { Grpo, GrpoStartJobParams, GrpoStreamMessagesResponse, RlGrpoStatus } from './grpo';
import * as PpoAPI from './ppo';
import { Ppo } from './ppo';

export class Rl extends APIResource {
  ppo: PpoAPI.Ppo = new PpoAPI.Ppo(this._client);
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Rl.Ppo = Ppo;
Rl.Grpo = Grpo;

export declare namespace Rl {
  export { Ppo as Ppo };

  export {
    Grpo as Grpo,
    type RlGrpoStatus as RlGrpoStatus,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
