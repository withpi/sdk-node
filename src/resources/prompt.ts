// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Prompt extends APIResource {
  /**
   * Checks on a prompt optimization job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<PromptOptimizationStatus> {
    return this._client.get(`/prompt/optimize/${jobId}`, options);
  }

  /**
   * Start a prompt optimization job
   */
  optimize(
    body: PromptOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptOptimizationStatus> {
    return this._client.post('/prompt/optimize', { body, ...options });
  }

  /**
   * Opens a message stream about a prompt optimization job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/prompt/optimize/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * The optimized_prompt_messages field is an empty list unless the state is done.
 */
export interface PromptOptimizationStatus {
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

export type PromptStreamMessagesResponse = string;

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
   * The initial system instruction
   */
  initial_system_instruction: string;

  /**
   * The model to use for generating responses
   */
  model_id: 'gpt-4o-mini' | 'llama-3.1-8b' | 'mock-llm';

  /**
   * The tuning algorithm to use
   */
  tuning_algorithm: 'PI' | 'DSPY';

  /**
   * The DSPY teleprompter/optimizer to use. This only applies for the DSPY. Leave it
   * as None if tuning_algorithm != DSPY.
   */
  dspy_optimization_type?: 'BOOTSTRAP_FEW_SHOT' | 'COPRO' | 'MIPROv2' | null;

  /**
   * Decides if to use chain of thought or not. This only applies for the DSPY. Leave
   * it as None if tuning_algorithm != DSPY.
   */
  use_chain_of_thought?: boolean;
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
    type PromptOptimizationStatus as PromptOptimizationStatus,
    type PromptStreamMessagesResponse as PromptStreamMessagesResponse,
    type PromptOptimizeParams as PromptOptimizeParams,
  };
}
