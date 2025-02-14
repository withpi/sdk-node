// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Grpo extends APIResource {
  /**
   * Get the current status of the RL GRPO job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<RlGrpoStatus> {
    return this._client.get(`/model/rl/grpo/${jobId}`, options);
  }

  /**
   * Initialize the Group Relative Policy Optimization (GRPO) reinforcement learning
   * job.
   */
  startJob(body: GrpoStartJobParams, options?: Core.RequestOptions): Core.APIPromise<RlGrpoStatus> {
    return this._client.post('/model/rl/grpo', { body, ...options });
  }

  /**
   * Streams messages from the RL GRPO job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/rl/grpo/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
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
     * The training step
     */
    step: number;

    /**
     * The SFT model weights in Huggingface
     */
    hf_model_name?: string | null;
  }
}

export type GrpoStreamMessagesResponse = string;

export interface GrpoStartJobParams {
  /**
   * The contract to use in the GRPO tuning process
   */
  contract: Shared.Contract;

  /**
   * Examples to use in the RL tuning process
   */
  examples: Array<GrpoStartJobParams.Example>;

  /**
   * The model to start the RL process
   */
  model: 'LLAMA_3.2_1B';

  /**
   * SFT learning rate
   */
  learning_rate?: number;

  /**
   * SFT number of train epochs
   */
  num_train_epochs?: number;

  /**
   * A custom system prompt to use during the RL tuning process
   */
  system_prompt?: string | null;
}

export namespace GrpoStartJobParams {
  /**
   * An example for RL training
   */
  export interface Example {
    /**
     * The input prompt to LLM for the RL training process
     */
    llm_input: string;
  }
}

export declare namespace Grpo {
  export {
    type RlGrpoStatus as RlGrpoStatus,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
