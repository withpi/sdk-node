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
   * Generates a signed URL for downloading a model as a .tar.gz archive for self
   * hosting.
   */
  download(
    jobId: string,
    params: GrpoDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/model/rl/grpo/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Load the model into serving. This can support a very small amount of interactive
   * traffic. Please reach out if you want to use this model in a production setting.
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<RlGrpoStatus> {
    return this._client.post(`/model/rl/grpo/${jobId}/load`, options);
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

export type GrpoDownloadResponse = string;

export type GrpoStreamMessagesResponse = string;

export interface GrpoDownloadParams {
  serving_id: number;
}

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
   * The base model to start the RL tunning process
   */
  base_rl_model?: 'LLAMA_3.2_3B' | 'LLAMA_3.1_8B';

  /**
   * SFT learning rate
   */
  learning_rate?: number;

  /**
   * The LoRA configuration.
   */
  lora_config?: GrpoStartJobParams.LoraConfig;

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

  /**
   * The LoRA configuration.
   */
  export interface LoraConfig {
    /**
     * The number of dimensions in the low-rank decomposition of the weight updates.
     */
    lora_rank?: 'R_16' | 'R_32' | 'R_64';
  }
}

export declare namespace Grpo {
  export {
    type RlGrpoStatus as RlGrpoStatus,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
