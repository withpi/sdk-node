// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GrpoAPI from './grpo';
import {
  Grpo,
  GrpoCancelResponse,
  GrpoDownloadParams,
  GrpoDownloadResponse,
  GrpoListParams,
  GrpoListResponse,
  GrpoLoadResponse,
  GrpoRetrieveResponse,
  GrpoStartJobParams,
  GrpoStartJobResponse,
  GrpoStreamMessagesResponse,
} from './grpo';
import * as SftAPI from './sft';
import {
  Sft,
  SftCancelResponse,
  SftDownloadParams,
  SftDownloadResponse,
  SftListParams,
  SftListResponse,
  SftStartJobParams,
  SftStreamMessagesResponse,
} from './sft';

export class Training extends APIResource {
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Training.Sft = Sft;
Training.Grpo = Grpo;

export declare namespace Training {
  export {
    Sft as Sft,
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
    type SftStartJobParams as SftStartJobParams,
  };

  export {
    Grpo as Grpo,
    type GrpoRetrieveResponse as GrpoRetrieveResponse,
    type GrpoListResponse as GrpoListResponse,
    type GrpoCancelResponse as GrpoCancelResponse,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoLoadResponse as GrpoLoadResponse,
    type GrpoStartJobResponse as GrpoStartJobResponse,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoListParams as GrpoListParams,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
