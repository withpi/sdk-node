// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GrpoAPI from './grpo';
import {
  Grpo,
  GrpoCancelResponse,
  GrpoDownloadParams,
  GrpoDownloadResponse,
  GrpoListParams,
  GrpoListResponse,
  GrpoStartJobParams,
  GrpoStreamMessagesResponse,
} from './grpo';

export class Rl extends APIResource {
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Rl.Grpo = Grpo;

export declare namespace Rl {
  export {
    Grpo as Grpo,
    type GrpoListResponse as GrpoListResponse,
    type GrpoCancelResponse as GrpoCancelResponse,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoListParams as GrpoListParams,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
