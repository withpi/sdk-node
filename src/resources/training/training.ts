// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClassifierAPI from './classifier';
import {
  Classifier,
  ClassifierCancelResponse,
  ClassifierCreateParams,
  ClassifierDownloadParams,
  ClassifierDownloadResponse,
  ClassifierListParams,
  ClassifierListResponse,
  ClassifierMessagesResponse,
} from './classifier';
import * as GrpoAPI from './grpo';
import {
  Grpo,
  GrpoCancelResponse,
  GrpoCreateParams,
  GrpoCreateResponse,
  GrpoDownloadParams,
  GrpoDownloadResponse,
  GrpoListParams,
  GrpoListResponse,
  GrpoLoadResponse,
  GrpoMessagesResponse,
  GrpoRetrieveResponse,
} from './grpo';
import * as SftAPI from './sft';
import {
  Sft,
  SftCancelResponse,
  SftCreateParams,
  SftCreateResponse,
  SftDownloadParams,
  SftDownloadResponse,
  SftListParams,
  SftListResponse,
  SftLoadResponse,
  SftMessagesResponse,
  SftRetrieveResponse,
} from './sft';

export class Training extends APIResource {
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
}

Training.Classifier = Classifier;
Training.Grpo = Grpo;
Training.Sft = Sft;

export declare namespace Training {
  export {
    Classifier as Classifier,
    type ClassifierListResponse as ClassifierListResponse,
    type ClassifierCancelResponse as ClassifierCancelResponse,
    type ClassifierDownloadResponse as ClassifierDownloadResponse,
    type ClassifierMessagesResponse as ClassifierMessagesResponse,
    type ClassifierCreateParams as ClassifierCreateParams,
    type ClassifierListParams as ClassifierListParams,
    type ClassifierDownloadParams as ClassifierDownloadParams,
  };

  export {
    Grpo as Grpo,
    type GrpoCreateResponse as GrpoCreateResponse,
    type GrpoRetrieveResponse as GrpoRetrieveResponse,
    type GrpoListResponse as GrpoListResponse,
    type GrpoCancelResponse as GrpoCancelResponse,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoLoadResponse as GrpoLoadResponse,
    type GrpoMessagesResponse as GrpoMessagesResponse,
    type GrpoCreateParams as GrpoCreateParams,
    type GrpoListParams as GrpoListParams,
    type GrpoDownloadParams as GrpoDownloadParams,
  };

  export {
    Sft as Sft,
    type SftCreateResponse as SftCreateResponse,
    type SftRetrieveResponse as SftRetrieveResponse,
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftLoadResponse as SftLoadResponse,
    type SftMessagesResponse as SftMessagesResponse,
    type SftCreateParams as SftCreateParams,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
  };
}
