// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InputsAPI from './inputs/inputs';
import {
  InputClusterParams,
  InputClusterResponse,
  InputEvaluateParams,
  InputGenerateSeedsParams,
  InputGenerateSeedsResponse,
  InputTopicCluster,
  Inputs,
} from './inputs/inputs';

export class Data extends APIResource {
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
}

export interface InputEvaluationMetrics {
  /**
   * The 0-1 scores mean the probability of being filtered
   */
  filter_scores: Array<number>;
}

Data.Inputs = Inputs;

export declare namespace Data {
  export { type InputEvaluationMetrics as InputEvaluationMetrics };

  export {
    Inputs as Inputs,
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputGenerateSeedsResponse as InputGenerateSeedsResponse,
    type InputClusterParams as InputClusterParams,
    type InputEvaluateParams as InputEvaluateParams,
    type InputGenerateSeedsParams as InputGenerateSeedsParams,
  };
}
