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
   * Check if the model is serving
   */
  check(jobId: string, options?: Core.RequestOptions): Core.APIPromise<SftCheckResponse> {
    return this._client.get(`/model/sft/${jobId}/check`, options);
  }

  /**
   * Load the SFT model into serving. This can support a very small amount of
   * interactive traffic. Please reach out if you want to use this model in a
   * production setting.
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/model/sft/${jobId}/load`, options);
  }

  /**
   * Initialize the supervised fine-tuning (SFT) job for the model. We implement
   * Low-Rank Adaptation (LoRA) for the fine-tuning process, with a fixed rank of 16.
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

export type SftCheckResponse = boolean;

export type SftLoadResponse = string;

export type SftStreamMessagesResponse = string;

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
   * SFT number of train epochs
   */
  num_train_epochs?: number;
}

export declare namespace Sft {
  export {
    type SftStatus as SftStatus,
    type SftCheckResponse as SftCheckResponse,
    type SftLoadResponse as SftLoadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftStartJobParams as SftStartJobParams,
  };
}
