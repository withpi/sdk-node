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
} from './classifier';
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
import * as RlAPI from './rl/rl';
import { Rl } from './rl/rl';

export class Model extends APIResource {
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
  rl: RlAPI.Rl = new RlAPI.Rl(this._client);
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
}

export interface TrainedModel {
  /**
   * The PI contract score of the eval set what isn't used in training
   */
  contract_score: number;

  /**
   * The training epoch
   */
  epoch: number;

  /**
   * The evaluation loss
   */
  eval_loss: number;

  /**
   * The serving id of the trained model within this Job
   */
  serving_id: number;

  /**
   * State of the model in the serving system
   */
  serving_state: 'UNLOADED' | 'LOADING' | 'SERVING';

  /**
   * The training step
   */
  step: number;
}

Model.Classifier = Classifier;
Model.Rl = Rl;
Model.Sft = Sft;

export declare namespace Model {
  export { type TrainedModel as TrainedModel };

  export {
    Classifier as Classifier,
    type ClassificationStatus as ClassificationStatus,
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
}
