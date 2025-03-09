// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClassifierAPI from './classifier';
import {
  ClassificationStatus,
  Classifier,
  ClassifierCancelResponse,
  ClassifierCreateParams,
  ClassifierDownloadParams,
  ClassifierDownloadResponse,
  ClassifierListParams,
  ClassifierListResponse,
  ClassifierMessagesResponse,
  TrainedModel,
} from './classifier';
import * as SftAPI from './sft';
import {
  Sft,
  SftCancelResponse,
  SftCreateParams,
  SftDownloadParams,
  SftDownloadResponse,
  SftListParams,
  SftListResponse,
  SftMessagesResponse,
  SftStatus,
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
    type ClassifierMessagesResponse as ClassifierMessagesResponse,
    type ClassifierCreateParams as ClassifierCreateParams,
    type ClassifierListParams as ClassifierListParams,
    type ClassifierDownloadParams as ClassifierDownloadParams,
  };

  export { Rl as Rl };

  export {
    Sft as Sft,
    type SftStatus as SftStatus,
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftMessagesResponse as SftMessagesResponse,
    type SftCreateParams as SftCreateParams,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
  };
}
