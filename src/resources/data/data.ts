// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InputsAPI from './inputs';
import { InputEvaluateParams, InputGenerateParams, Inputs } from './inputs';

export class Data extends APIResource {
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
}

export interface DataGenerationStatus {
  /**
   * The generated data. Absent unless state is done
   */
  data: Array<string> | null;

  /**
   * The job id
   */
  job_id: number;

  /**
   * Current state of the job
   */
  state: 'running' | 'done' | 'error';
}

export interface InputEvaluationMetrics {
  /**
   * The 0-1 score with 1 meaning filter
   */
  filter_score: number;

  /**
   * The score components for each dimension
   */
  scores: Record<string, number>;

  /**
   * Map of score names to their weights in the overall score
   */
  weights: Record<string, number>;
}

Data.Inputs = Inputs;

export declare namespace Data {
  export {
    type DataGenerationStatus as DataGenerationStatus,
    type InputEvaluationMetrics as InputEvaluationMetrics,
  };

  export {
    Inputs as Inputs,
    type InputEvaluateParams as InputEvaluateParams,
    type InputGenerateParams as InputGenerateParams,
  };
}
