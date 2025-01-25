// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Sft extends APIResource {
  /**
   * Get the current status of a model SFT tuning job
   */
  getStatus(jobId: string, options?: Core.RequestOptions): Core.APIPromise<SftStatus> {
    return this._client.post(`/model/sft/${jobId}`, options);
  }

  /**
   * Start the model SFT tuning job
   */
  startJob(body: SftStartJobParams, options?: Core.RequestOptions): Core.APIPromise<SftStatus> {
    return this._client.post('/model/sft', { body, ...options });
  }

  /**
   * Streams messages from a model SFT tuning job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(`/model/sft/${jobId}/messages`, options);
  }
}

/**
 * SftStatus is the result of a SFT job.
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
   * A list of hosted firework models
   */
  hosted_firework_models?: Array<SftStatus.HostedFireworkModel> | null;
}

export namespace SftStatus {
  export interface HostedFireworkModel {
    /**
     * Firework's hosted model id.
     */
    hosted_model_id: string;
  }
}

export type SftStreamMessagesResponse = unknown;

export interface SftStartJobParams {
  /**
   * The contract to use in the SFT tuning process
   */
  contract: Shared.Contract;

  /**
   * Examples to use in the SFT tuning process
   */
  examples: Array<SftStartJobParams.Example>;

  /**
   * The base model to start the SFT tuning process.
   */
  base_sft_model?: 'LLAMA_3.1_8B';
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

export declare namespace Sft {
  export {
    type SftStatus as SftStatus,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftStartJobParams as SftStartJobParams,
  };
}
