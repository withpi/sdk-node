// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class ModelRlGrpo extends APIResource {}

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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';

  /**
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<RlGrpoStatus.TrainedModel> | null;
}

export namespace RlGrpoStatus {
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
     * Firework's hosted model id
     */
    firework_hosted_model_id: string;

    /**
     * The training step
     */
    step: number;

    /**
     * The SFT model weights in Huggingface
     */
    hf_model_name?: string | null;
  }
}

export declare namespace ModelRlGrpo {
  export { type RlGrpoStatus as RlGrpoStatus };
}
