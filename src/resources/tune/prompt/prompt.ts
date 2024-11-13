// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as TuneAPI from '../tune';
import * as MessagesAPI from './messages';
import { MessageRetrieveResponse, Messages } from './messages';

export class Prompt extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Polls the status of a prompt optimization job.
   */
  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<TuneAPI.OptimizationStatus> {
    return this._client.get(`/tune/prompt/${jobId}`, options);
  }

  /**
   * Do Pi Prompt optimization.
   */
  optimize(
    body: PromptOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TuneAPI.OptimizationStatus> {
    return this._client.post('/tune/prompt', { body, ...options });
  }
}

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

Prompt.Messages = Messages;

export declare namespace Prompt {
  export { type PromptOptimizeParams as PromptOptimizeParams };

  export { Messages as Messages, type MessageRetrieveResponse as MessageRetrieveResponse };
}
