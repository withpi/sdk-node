// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as TuneAPI from './tune';

export class Prompt extends APIResource {
  /**
   * Opens a message stream about a prompt optimization job
   */
  getDetailedMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/tune/prompt/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Checks on a prompt optimization job
   */
  getStatus(jobId: string, options?: Core.RequestOptions): Core.APIPromise<TuneAPI.OptimizationStatus> {
    return this._client.get(`/tune/prompt/${jobId}`, options);
  }

  /**
   * Start a prompt optimization job
   */
  optimize(
    body: PromptOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TuneAPI.OptimizationStatus> {
    return this._client.post('/tune/prompt', { body, ...options });
  }
}

export type PromptGetDetailedMessagesResponse = string;

export interface PromptOptimizeParams {
  /**
   * The contract to optimize
   */
  contract: Shared.Contract;

  /**
   * The examples to train and validate on
   */
  examples: Array<PromptOptimizeParams.Example>;

  /**
   * The model to use for generating responses
   */
  model_id: 'gpt-4o-mini' | 'mock-llm';

  /**
   * The tuning algorithm to use
   */
  tuning_algorithm: 'pi';
}

export namespace PromptOptimizeParams {
  /**
   * An example for training or evaluation
   */
  export interface Example {
    /**
     * The input to evaluate
     */
    llm_input: string | Record<string, string>;

    /**
     * The output to evaluate
     */
    llm_output: string;
  }
}

export declare namespace Prompt {
  export {
    type PromptGetDetailedMessagesResponse as PromptGetDetailedMessagesResponse,
    type PromptOptimizeParams as PromptOptimizeParams,
  };
}
