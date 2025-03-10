// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ModelAPI from '../model';

export class Grpo extends APIResource {}

export interface LoraConfig {
  /**
   * The number of dimensions in the low-rank decomposition of the weight updates.
   */
  lora_rank?: 'R_16' | 'R_32' | 'R_64';
}

/**
 * RlGrpoStatus is the status of a RL PPO job.
 */
export interface RlGrpoStatus {
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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<ModelAPI.TrainedModel> | null;
}

export type TextGenerationBaseModel = 'LLAMA_3.2_3B' | 'LLAMA_3.1_8B';

export declare namespace Grpo {
  export {
    type LoraConfig as LoraConfig,
    type RlGrpoStatus as RlGrpoStatus,
    type TextGenerationBaseModel as TextGenerationBaseModel,
  };
}
