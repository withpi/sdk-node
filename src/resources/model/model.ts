// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClassifierAPI from './classifier';
import {
  ClassificationStatus,
  Classifier,
  ClassifierCancelResponse,
  ClassifierDownloadParams,
  ClassifierDownloadResponse,
  ClassifierListParams,
  ClassifierListResponse,
  ClassifierStartJobParams,
  ClassifierStreamMessagesResponse,
  TrainedModel,
} from './classifier';
import * as SftAPI from './sft';
import {
  Sft,
  SftCancelResponse,
  SftDownloadParams,
  SftDownloadResponse,
  SftListParams,
  SftListResponse,
  SftStartJobParams,
  SftStatus,
  SftStreamMessagesResponse,
} from './sft';
import * as RlAPI from './rl/rl';
import { Rl } from './rl/rl';

export class Model extends APIResource {
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
  rl: RlAPI.Rl = new RlAPI.Rl(this._client);
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
}

Model.Classifier = Classifier;
Model.Rl = Rl;
Model.Sft = Sft;

export declare namespace Model {
  export {
    Classifier as Classifier,
    type ClassificationStatus as ClassificationStatus,
    type TrainedModel as TrainedModel,
    type ClassifierListResponse as ClassifierListResponse,
    type ClassifierCancelResponse as ClassifierCancelResponse,
    type ClassifierDownloadResponse as ClassifierDownloadResponse,
    type ClassifierStreamMessagesResponse as ClassifierStreamMessagesResponse,
    type ClassifierListParams as ClassifierListParams,
    type ClassifierDownloadParams as ClassifierDownloadParams,
    type ClassifierStartJobParams as ClassifierStartJobParams,
  };

  export { Rl as Rl };

  export {
    Sft as Sft,
    type SftStatus as SftStatus,
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
    type SftStartJobParams as SftStartJobParams,
  };
}
