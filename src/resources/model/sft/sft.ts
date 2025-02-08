// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as MessagesAPI from './messages';
import { MessageStreamResponse, Messages } from './messages';

export class Sft extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Get the current status of a model SFT tuning job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<SftStatus> {
    return this._client.get(`/model/sft/${jobId}`, options);
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
   * A list of hosted Firework models
   */
  hosted_firework_models?: Array<SftStatus.HostedFireworkModel> | null;
}

export namespace SftStatus {
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
  examples: Array<SftStartJobParams.Example>;

  /**
   * The base model to start the SFT tuning process.
   */
  base_sft_model?: 'LLAMA_3.2_1B' | 'LLAMA_3.2_3B' | 'LLAMA_3.1_8B';

  /**
   * SFT learning rate
   */
  learning_rate?: number;

  /**
   * SFT number of train epochs
   */
  num_train_epochs?: number;
}

export namespace SftStartJobParams {
  /**
   * An example for training or evaluation
   */
  export interface Example {
    /**
     * The input to LLM
     */
    llm_input: string;

    /**
     * The output to evaluate
     */
    llm_output: string;
  }
}

Sft.Messages = Messages;

export declare namespace Sft {
  export {
    type SftStatus as SftStatus,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftStartJobParams as SftStartJobParams,
  };

  export { Messages as Messages, type MessageStreamResponse as MessageStreamResponse };
}
