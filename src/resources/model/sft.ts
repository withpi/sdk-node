// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Sft extends APIResource {
  /**
   * Get the current status of a model SFT tuning job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<SftStatus> {
    return this._client.get(`/model/sft/${jobId}`, options);
  }

  /**
   * Generates a signed URL for downloading a model as a .tar.gz archive for self
   * hosting.
   */
  download(jobId: string, params: SftDownloadParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/model/sft/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Load the SFT model into serving. This can support a very small amount of
   * interactive traffic. Please reach out if you want to use this model in a
   * production setting.
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<SftStatus> {
    return this._client.post(`/model/sft/${jobId}/load`, options);
  }

  /**
   * Initialize the supervised fine-tuning (SFT) job for the model. We implement
   * Low-Rank Adaptation (LoRA) for the fine-tuning process.
   */
  startJob(body: SftStartJobParams, options?: Core.RequestOptions): Core.APIPromise<SftStatus> {
    return this._client.post('/model/sft', { body, ...options });
  }

  /**
   * Streams messages from a model SFT tuning job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/sft/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * SftStatus is the status of a SFT job.
 */
export interface SftStatus {
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
  trained_models?: Array<SftStatus.TrainedModel> | null;
}

export namespace SftStatus {
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

export type SftDownloadResponse = string;

export type SftStreamMessagesResponse = string;

export interface SftDownloadParams {
  serving_id: number;
}

export interface SftStartJobParams {
  /**
   * The contract to use in the SFT tuning process
   */
  contract: Shared.Contract;

  /**
   * Examples to use in the SFT tuning process. We split this data into train/eval
   * 90/10.
   */
  examples: Array<Shared.Example>;

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
   * SFT number of train epochs
   */
  num_train_epochs?: number;
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
    type SftStatus as SftStatus,
    type SftDownloadResponse as SftDownloadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftDownloadParams as SftDownloadParams,
    type SftStartJobParams as SftStartJobParams,
  };
}
