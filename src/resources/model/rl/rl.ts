// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GrpoAPI from './grpo';
import {
  Grpo,
  GrpoCheckResponse,
  GrpoLoadResponse,
  GrpoStartJobParams,
  GrpoStreamMessagesResponse,
  RlGrpoStatus,
} from './grpo';

export class Rl extends APIResource {
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Rl.Grpo = Grpo;

export declare namespace Rl {
  export {
    Grpo as Grpo,
    type RlGrpoStatus as RlGrpoStatus,
    type GrpoCheckResponse as GrpoCheckResponse,
    type GrpoLoadResponse as GrpoLoadResponse,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
