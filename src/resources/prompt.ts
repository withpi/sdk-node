// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Prompt extends APIResource {
  /**
   * Checks the status of a Prompt Optimization job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PromptOptimizationStatus> {
    return this._client.get(`/prompt/optimize/${jobId}`, options);
  }

  /**
   * Cancels a Prompt Optimization job
   */
  cancelOptimizationJob(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/prompt/optimize/${jobId}`, options);
  }

  /**
   * Lists the Prompt Optimization Jobs owned by a user
   */
  listOptimizationJobs(
    query?: PromptListOptimizationJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptListOptimizationJobsResponse>;
  listOptimizationJobs(options?: Core.RequestOptions): Core.APIPromise<PromptListOptimizationJobsResponse>;
  listOptimizationJobs(
    query: PromptListOptimizationJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptListOptimizationJobsResponse> {
    if (isRequestOptions(query)) {
      return this.listOptimizationJobs({}, query);
    }
    return this._client.get('/prompt/optimize', { query, ...options });
  }

  /**
   * Launches a Prompt Optimization job
   */
  optimize(
    body: PromptOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PromptOptimizationStatus> {
    return this._client.post('/prompt/optimize', { body, ...options });
  }

  /**
   * Opens a message stream about a Prompt Optimization job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/prompt/optimize/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type PromptCancelOptimizationJobResponse = string;

export type PromptListOptimizationJobsResponse = Array<Shared.PromptOptimizationStatus>;

export type PromptStreamMessagesResponse = string;

export interface PromptListOptimizationJobsParams {
  /**
   * Filter jobs by state
   */
  state?: Shared.State | null;
}

export interface PromptOptimizeParams {
  /**
   * The contract to optimize
   */
  contract: Shared.Contract;

  /**
   * The examples to train and validate on
   */
  examples: Array<Shared.Example>;

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

export declare namespace Prompt {
  export {
    type PromptCancelOptimizationJobResponse as PromptCancelOptimizationJobResponse,
    type PromptListOptimizationJobsResponse as PromptListOptimizationJobsResponse,
    type PromptStreamMessagesResponse as PromptStreamMessagesResponse,
    type PromptListOptimizationJobsParams as PromptListOptimizationJobsParams,
    type PromptOptimizeParams as PromptOptimizeParams,
  };
}
