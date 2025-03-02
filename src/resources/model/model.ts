// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SftAPI from './sft';
import {
  Sft,
  SftDownloadParams,
  SftDownloadResponse,
  SftListParams,
  SftListResponse,
  SftStartJobParams,
  SftStatus,
  SftStreamMessagesResponse,
} from './sft';
import * as RlAPI from './rl/rl';
import { Rl, RlGrpoStatus } from './rl/rl';

export class Model extends APIResource {
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  rl: RlAPI.Rl = new RlAPI.Rl(this._client);
}

Model.Sft = Sft;
Model.Rl = Rl;

export declare namespace Model {
  export {
    Sft as Sft,
    type SftStatus as SftStatus,
    type SftListResponse as SftListResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
    type SftStartJobParams as SftStartJobParams,
  };

  export { Rl as Rl, type RlGrpoStatus as RlGrpoStatus };
}
