// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as CalibrateAPI from '../../contracts/calibrate';

export class Grpo extends APIResource {
  /**
   * Checks the status of a RL GRPO job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.RlGrpoStatus> {
    return this._client.get(`/model/rl/grpo/${jobId}`, options);
  }

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
    return this._client.get('/model/rl/grpo', { query, ...options });
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
    return this._client.post(`/model/rl/grpo/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Loads a RL GRPO model into serving for a limited period of time
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.RlGrpoStatus> {
    return this._client.post(`/model/rl/grpo/${jobId}/load`, options);
  }

  /**
   * Launches a RL GRPO job
   */
  startJob(body: GrpoStartJobParams, options?: Core.RequestOptions): Core.APIPromise<Shared.RlGrpoStatus> {
    return this._client.post('/model/rl/grpo', { body, ...options });
  }

  /**
   * Opens a message stream about a RL GRPO job
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
  state: CalibrateAPI.State;

  /**
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<Shared.TrainedModel> | null;
}

export type GrpoListResponse = Array<Shared.RlGrpoStatus>;

export type GrpoDownloadResponse = string;

export type GrpoStreamMessagesResponse = string;

export interface GrpoListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export interface GrpoDownloadParams {
  serving_id: number;
}

export interface GrpoStartJobParams {
  /**
   * The base model to start the RL tunning process
   */
  base_rl_model: Shared.FinetuningBaseModel;

  /**
   * The contract to use in the GRPO tuning process
   */
  contract: Shared.Contract;

  /**
   * Examples to use in the RL tuning process
   */
  examples: Array<GrpoStartJobParams.Example>;

  /**
   * GRPO learning rate
   */
  learning_rate: number;

  /**
   * The LoRA configuration.
   */
  lora_config: Shared.LoraConfig;

  /**
   * GRPO number of train epochs
   */
  num_train_epochs: number;

  /**
   * A custom system prompt to use during the RL tuning process
   */
  system_prompt: string | null;
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
    type GrpoListResponse as GrpoListResponse,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoListParams as GrpoListParams,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
