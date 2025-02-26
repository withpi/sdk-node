// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GrpoAPI from './grpo';
import {
  Grpo,
  GrpoDownloadParams,
  GrpoDownloadResponse,
  GrpoStartJobParams,
  GrpoStreamMessagesResponse,
  RlGrpoStatus as GrpoAPIRlGrpoStatus,
} from './grpo';

export class Rl extends APIResource {
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
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
     * Whether the model is loaded in the serving system
     */
    is_loaded: boolean;

    /**
     * The serving id of the trained model within this Job
     */
    serving_id: number;

    /**
     * The training step
     */
    step: number;
  }
}

Rl.Grpo = Grpo;

export declare namespace Rl {
  export { type RlGrpoStatus as RlGrpoStatus };

  export {
    Grpo as Grpo,
    type GrpoAPIRlGrpoStatus as RlGrpoStatus,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
