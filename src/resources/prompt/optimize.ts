// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Optimize extends APIResource {
  /**
   * Checks the status of a Prompt Optimization job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PromptOptimizationStatus> {
    return this._client.get(`/prompt/optimize/${jobId}`, options);
  }

  /**
   * Lists the Prompt Optimization Jobs owned by a user
   */
  list(query?: OptimizeListParams, options?: Core.RequestOptions): Core.APIPromise<OptimizeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OptimizeListResponse>;
  list(
    query: OptimizeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OptimizeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/prompt/optimize', { query, ...options });
  }

  /**
   * Cancels a Prompt Optimization job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/prompt/optimize/${jobId}`, options);
  }

  /**
   * Starts a Prompt Optimization job
   */
  startJob(
    body: OptimizeStartJobParams,
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

export type OptimizeListResponse = Array<Shared.PromptOptimizationStatus>;

export type OptimizeCancelResponse = string;

export type OptimizeStreamMessagesResponse = string;

export interface OptimizeListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface OptimizeStartJobParams {
  /**
   * The examples (input-response pairs) to train and validate on
   */
  examples: Array<Shared.SDKExample>;

  /**
   * The initial system instruction
   */
  initial_system_instruction: string;

  /**
   * The model to use for generating responses
   */
  model_id: 'gpt-4o-mini' | 'llama-3.1-8b' | 'mock-llm';

  /**
   * The scorer to optimize
   */
  scorer: Shared.Scorer;

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

export declare namespace Optimize {
  export {
    type OptimizeListResponse as OptimizeListResponse,
    type OptimizeCancelResponse as OptimizeCancelResponse,
    type OptimizeStreamMessagesResponse as OptimizeStreamMessagesResponse,
    type OptimizeListParams as OptimizeListParams,
    type OptimizeStartJobParams as OptimizeStartJobParams,
  };
}
