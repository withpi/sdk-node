// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InputsAPI from './inputs/inputs';
import {
  InputClusterParams,
  InputClusterResponse,
  InputEvaluateParams,
  InputGenerateSeedsParams,
  InputTopicCluster,
  Inputs,
} from './inputs/inputs';

export class Data extends APIResource {
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
}

/**
 * DataGenerationStatus is the result of a data generation job.
 */
export interface DataGenerationStatus {
  /**
   * The generated data. Absent unless state is done
   */
  data: Array<string> | null;

  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';
}

export interface InputEvaluationMetrics {
  /**
   * The 0-1 scores mean the probability of being filtered
   */
  filter_scores: Array<number>;
}

Data.Inputs = Inputs;

export declare namespace Data {
  export {
    type DataGenerationStatus as DataGenerationStatus,
    type InputEvaluationMetrics as InputEvaluationMetrics,
  };

  export {
    Inputs as Inputs,
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
    type InputEvaluateParams as InputEvaluateParams,
    type InputGenerateSeedsParams as InputGenerateSeedsParams,
  };
}
