// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Grpo extends APIResource {
  /**
   * Lists the RL GRPO Jobs owned by a user
   */
  list(query?: GrpoListParams, options?: Core.RequestOptions): Core.APIPromise<GrpoListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GrpoListResponse>;
  list(
    query: GrpoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GrpoListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/model/grpo', { query, ...options });
  }

  /**
   * Cancels a RL GRPO job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/model/grpo/${jobId}`, options);
  }

  /**
   * Allows downloading a RL GRPO job
   */
  download(
    jobId: string,
    params: GrpoDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/model/grpo/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Launches a RL GRPO job
   */
  launch(body: GrpoLaunchParams, options?: Core.RequestOptions): Core.APIPromise<GrpoLaunchResponse> {
    return this._client.post('/model/grpo', { body, ...options });
  }

  /**
   * Loads a RL GRPO model into serving for a limited period of time
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<GrpoLoadResponse> {
    return this._client.post(`/model/grpo/${jobId}/load`, options);
  }

  /**
   * Opens a message stream about a RL GRPO job
   */
  messages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/grpo/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Checks the status of a RL GRPO job
   */
  status(jobId: string, options?: Core.RequestOptions): Core.APIPromise<GrpoStatusResponse> {
    return this._client.get(`/model/grpo/${jobId}`, options);
  }
}

export type GrpoListResponse = Array<GrpoListResponse.GrpoListResponseItem>;

export namespace GrpoListResponse {
  /**
   * RlGrpoStatus is the status of a RL PPO job.
   */
  export interface GrpoListResponseItem {
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
    trained_models?: Array<Shared.TrainedModel> | null;
  }
}

export type GrpoCancelResponse = string;

export type GrpoDownloadResponse = string;

/**
 * RlGrpoStatus is the status of a RL PPO job.
 */
export interface GrpoLaunchResponse {
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
  trained_models?: Array<Shared.TrainedModel> | null;
}

/**
 * RlGrpoStatus is the status of a RL PPO job.
 */
export interface GrpoLoadResponse {
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
  trained_models?: Array<Shared.TrainedModel> | null;
}

export type GrpoMessagesResponse = string;

/**
 * RlGrpoStatus is the status of a RL PPO job.
 */
export interface GrpoStatusResponse {
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
  trained_models?: Array<Shared.TrainedModel> | null;
}

export interface GrpoListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface GrpoDownloadParams {
  serving_id: number;
}

export interface GrpoLaunchParams {
  /**
   * The base model to start the RL tunning process
   */
  base_rl_model: 'LLAMA_3.2_3B' | 'LLAMA_3.1_8B';

  /**
   * Examples to use in the RL tuning process
   */
  examples: Array<GrpoLaunchParams.Example>;

  /**
   * GRPO learning rate
   */
  learning_rate: number;

  /**
   * The LoRA configuration.
   */
  lora_config: GrpoLaunchParams.LoraConfig;

  /**
   * GRPO number of train epochs
   */
  num_train_epochs: number;

  /**
   * The scoring system to use in the GRPO tuning process
   */
  scorer: Shared.Scorer;

  /**
   * A custom system prompt to use during the RL tuning process
   */
  system_prompt: string | null;
}

export namespace GrpoLaunchParams {
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
    type GrpoListResponse as GrpoListResponse,
    type GrpoCancelResponse as GrpoCancelResponse,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoLaunchResponse as GrpoLaunchResponse,
    type GrpoLoadResponse as GrpoLoadResponse,
    type GrpoMessagesResponse as GrpoMessagesResponse,
    type GrpoStatusResponse as GrpoStatusResponse,
    type GrpoListParams as GrpoListParams,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoLaunchParams as GrpoLaunchParams,
  };
}
