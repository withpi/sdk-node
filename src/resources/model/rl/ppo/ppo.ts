// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';
import * as MessagesAPI from './messages';
import { MessageStreamResponse, Messages } from './messages';

export class Ppo extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Get the current status of the RL PPO job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<RlPpoStatus> {
    return this._client.get(`/model/rl/ppo/${jobId}`, options);
  }

  /**
   * Initialize the Proximal Policy Optimization (PPO) reinforcement learning job. We
   * implement Low-Rank Adaptation (LoRA) for the reinforcement learning process,
   * with a fixed rank of 16.
   */
  startJob(body: PpoStartJobParams, options?: Core.RequestOptions): Core.APIPromise<RlPpoStatus> {
    return this._client.post('/model/rl/ppo', { body, ...options });
  }
}

/**
 * RlPpoStatus is the status of a RL PPO job.
 */
export interface RlPpoStatus {
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
   * A list of hosted Firework models
   */
  hosted_firework_models?: Array<RlPpoStatus.HostedFireworkModel> | null;
}

export namespace RlPpoStatus {
  export interface HostedFireworkModel {
    /**
     * The contract score of the eval set what isn't used in training
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
    hosted_model_id: string;

    /**
     * The training step
     */
    step: number;
  }
}

export interface PpoStartJobParams {
  /**
   * The contract to use in the SFT tuning process
   */
  contract: Shared.Contract;

  /**
   * Examples to use in the RL tuning process
   */
  examples: Array<PpoStartJobParams.Example>;

  /**
   * The Huggingface model name to run RL on. Currently we only support the LLAMA
   * model type and model size <= 8B parameters.
   */
  model: string;

  /**
   * SFT learning rate
   */
  learning_rate?: number;

  /**
   * SFT number of train epochs
   */
  num_train_epochs?: number;
}

export namespace PpoStartJobParams {
  /**
   * An example for RL training
   */
  export interface Example {
    /**
     * The input to LLM
     */
    llm_input: string;
  }
}

Ppo.Messages = Messages;

export declare namespace Ppo {
  export { type RlPpoStatus as RlPpoStatus, type PpoStartJobParams as PpoStartJobParams };

  export { Messages as Messages, type MessageStreamResponse as MessageStreamResponse };
}
