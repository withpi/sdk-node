// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

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
  getStatus(jobId: string, options?: Core.RequestOptions): Core.APIPromise<PromptGetStatusResponse> {
    return this._client.get(`/tune/prompt/${jobId}`, options);
  }

  /**
   * Start a prompt optimization job
   */
  optimize(
    body: PromptOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptOptimizeResponse> {
    return this._client.post('/tune/prompt', { body, ...options });
  }
}

export type PromptGetDetailedMessagesResponse = string;

/**
 * The optimized_prompt_messages field is an empty list unless the state is done.
 */
export interface PromptGetStatusResponse {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * The optimized prompt messages in the OpenAI message format with the jinja
   * {{ input }} variable for the next user prompt
   */
  optimized_prompt_messages: Array<Record<string, string>>;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';
}

/**
 * The optimized_prompt_messages field is an empty list unless the state is done.
 */
export interface PromptOptimizeResponse {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * The optimized prompt messages in the OpenAI message format with the jinja
   * {{ input }} variable for the next user prompt
   */
  optimized_prompt_messages: Array<Record<string, string>>;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';
}

export interface PromptOptimizeParams {
  /**
   * The contract to optimize
   */
  contract: Shared.Contract;

  /**
   * The DSPY teleprompter/optimizer to use
   */
  dspy_optimization_type: 'BOOTSTRAP_FEW_SHOT' | 'COPRO' | 'MIPROv2';

  /**
   * The examples to train and validate on
   */
  examples: Array<PromptOptimizeParams.Example>;

  /**
   * The initial system instruction
   */
  initial_system_instruction: string;

  /**
   * The model to use for generating responses
   */
  model_id: 'gpt-4o-mini' | 'mock-llm';

  /**
   * The tuning algorithm to use
   */
  tuning_algorithm: 'PI' | 'DSPY';
}

export namespace PromptOptimizeParams {
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

export declare namespace Prompt {
  export {
    type PromptGetDetailedMessagesResponse as PromptGetDetailedMessagesResponse,
    type PromptGetStatusResponse as PromptGetStatusResponse,
    type PromptOptimizeResponse as PromptOptimizeResponse,
    type PromptOptimizeParams as PromptOptimizeParams,
  };
}
