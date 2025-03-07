// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClassifierAPI from './classifier';
import {
  Classifier,
  ClassifierCancelResponse,
  ClassifierCreateParams,
  ClassifierCreateResponse,
  ClassifierDownloadParams,
  ClassifierDownloadResponse,
  ClassifierListParams,
  ClassifierListResponse,
  ClassifierMessagesResponse,
  ClassifierRetrieveResponse,
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
  SftStreamMessagesResponse,
} from './sft';
import * as RlAPI from './rl/rl';
import { Rl } from './rl/rl';

export class Model extends APIResource {
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  rl: RlAPI.Rl = new RlAPI.Rl(this._client);
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
}

Model.Sft = Sft;
Model.Rl = Rl;
Model.Classifier = Classifier;

export declare namespace Model {
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

  export { Rl as Rl };

  export {
    Classifier as Classifier,
    type ClassifierCreateResponse as ClassifierCreateResponse,
    type ClassifierRetrieveResponse as ClassifierRetrieveResponse,
    type ClassifierListResponse as ClassifierListResponse,
    type ClassifierCancelResponse as ClassifierCancelResponse,
    type ClassifierDownloadResponse as ClassifierDownloadResponse,
    type ClassifierMessagesResponse as ClassifierMessagesResponse,
    type ClassifierCreateParams as ClassifierCreateParams,
    type ClassifierListParams as ClassifierListParams,
    type ClassifierDownloadParams as ClassifierDownloadParams,
  };
}
