// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClassifierAPI from './classifier';
import {
  Classifier,
  ClassifierCancelResponse,
  ClassifierDownloadParams,
  ClassifierDownloadResponse,
  ClassifierListParams,
  ClassifierListResponse,
  ClassifierStartJobParams,
  ClassifierStreamMessagesResponse,
} from './classifier';
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
  SftListParams,
  SftListResponse,
  SftLoadResponse,
  SftRetrieveResponse,
  SftStartJobParams,
  SftStartJobResponse,
  SftStreamMessagesResponse,
} from './sft';

export class Model extends APIResource {
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Model.Classifier = Classifier;
Model.Sft = Sft;
Model.Grpo = Grpo;

export declare namespace Model {
  export {
    Classifier as Classifier,
    type ClassifierListResponse as ClassifierListResponse,
    type ClassifierCancelResponse as ClassifierCancelResponse,
    type ClassifierDownloadResponse as ClassifierDownloadResponse,
    type ClassifierStreamMessagesResponse as ClassifierStreamMessagesResponse,
    type ClassifierListParams as ClassifierListParams,
    type ClassifierDownloadParams as ClassifierDownloadParams,
    type ClassifierStartJobParams as ClassifierStartJobParams,
  };

  export {
    Sft as Sft,
    type SftRetrieveResponse as SftRetrieveResponse,
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftLoadResponse as SftLoadResponse,
    type SftStartJobResponse as SftStartJobResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
    type SftStartJobParams as SftStartJobParams,
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
