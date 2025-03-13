// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Sft extends APIResource {
  /**
   * Checks the status of a SFT job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SftStatus> {
    return this._client.get(`/training/sft/${jobId}`, options);
  }

  /**
   * Lists the SFT Jobs owned by a user
   */
  list(query?: SftListParams, options?: Core.RequestOptions): Core.APIPromise<SftListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SftListResponse>;
  list(
    query: SftListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SftListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/training/sft', { query, ...options });
  }

  /**
   * Cancels a SFT job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/training/sft/${jobId}`, options);
  }

  /**
   * Allows downloading a SFT job
   */
  download(jobId: string, params: SftDownloadParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/training/sft/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Loads a SFT model into serving for a limited period of time
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SftStatus> {
    return this._client.post(`/training/sft/${jobId}/load`, options);
  }

  /**
   * Starts a SFT job
   */
  startJob(body: SftStartJobParams, options?: Core.RequestOptions): Core.APIPromise<Shared.SftStatus> {
    return this._client.post('/training/sft', { body, ...options });
  }

  /**
   * Opens a message stream about a SFT job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/training/sft/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type SftListResponse = Array<Shared.SftStatus>;

export type SftCancelResponse = string;

export type SftDownloadResponse = string;

export type SftStreamMessagesResponse = string;

export interface SftListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface SftDownloadParams {
  serving_id: number;
}

export interface SftStartJobParams {
  /**
   * Examples to use in the SFT tuning process. We split this data into train/eval
   * 90/10.
   */
  examples: Array<Shared.Example>;

  /**
   * The scoring spec to use in the SFT tuning process
   */
  scoring_spec: Shared.ScoringSpec;

  /**
   * The base model to start the SFT tuning process.
   */
  base_sft_model?: 'LLAMA_3.2_3B' | 'LLAMA_3.1_8B';

  /**
   * SFT learning rate
   */
  learning_rate?: number;

  /**
   * The LoRA configuration.
   */
  lora_config?: SftStartJobParams.LoraConfig;

  /**
   * SFT number of train epochs: <= 10.
   */
  num_train_epochs?: number;

  /**
   * A custom system prompt to use during the RL tuning process
   */
  system_prompt?: string | null;
}

export namespace SftStartJobParams {
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

export declare namespace Sft {
  export {
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
    type SftStartJobParams as SftStartJobParams,
  };
}
