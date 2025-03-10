// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClassifierAPI from './classifier';
import { Classifier } from './classifier';
import * as GrpoAPI from './grpo';
import {
  Grpo,
  GrpoCancelResponse,
  GrpoDownloadParams,
  GrpoDownloadResponse,
  GrpoLaunchParams,
  GrpoLaunchResponse,
  GrpoListParams,
  GrpoListResponse,
  GrpoLoadResponse,
  GrpoMessagesResponse,
  GrpoStatusResponse,
} from './grpo';
import * as SftAPI from './sft';
import {
  Sft,
  SftCancelResponse,
  SftDownloadParams,
  SftDownloadResponse,
  SftLaunchParams,
  SftLaunchResponse,
  SftListParams,
  SftListResponse,
  SftLoadResponse,
  SftMessagesResponse,
  SftStatusResponse,
} from './sft';

export class Training extends APIResource {
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Training.Classifier = Classifier;
Training.Sft = Sft;
Training.Grpo = Grpo;

export declare namespace Training {
  export { Classifier as Classifier };

  export {
    Sft as Sft,
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftLaunchResponse as SftLaunchResponse,
    type SftLoadResponse as SftLoadResponse,
    type SftMessagesResponse as SftMessagesResponse,
    type SftStatusResponse as SftStatusResponse,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
    type SftLaunchParams as SftLaunchParams,
  };

  export {
    Grpo as Grpo,
    type GrpoListResponse as GrpoListResponse,
    type GrpoCancelResponse as GrpoCancelResponse,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoLaunchResponse as GrpoLaunchResponse,
    type GrpoLoadResponse as GrpoLoadResponse,
    type GrpoMessagesResponse as GrpoMessagesResponse,
    type GrpoStatusResponse as GrpoStatusResponse,
    type GrpoListParams as GrpoListParams,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoLaunchParams as GrpoLaunchParams,
  };
}
