// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as CalibrateAPI from '../contracts/calibrate';

export class Optimize extends APIResource {
  /**
   * Checks the status of a Prompt Optimization job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<PromptOptimizationStatus> {
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
   * Launches a Prompt Optimization job
   */
  startJob(
    body: OptimizeStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptOptimizationStatus> {
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
   * Current state of the job
   */
  state: CalibrateAPI.State;

  /**
   * The optimized prompt messages in the OpenAI message format with the jinja
   * {{ input }} variable for the next user prompt
   */
  optimized_prompt_messages?: Array<Record<string, string>>;
}

export type OptimizeListResponse = Array<PromptOptimizationStatus>;

export type OptimizeCancelResponse = string;

export type OptimizeStreamMessagesResponse = string;

export interface OptimizeListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export interface OptimizeStartJobParams {
  /**
   * The examples to train and validate on
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
   * The contract to optimize
   */
  scorer: OptimizeStartJobParams.Scorer;

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

export namespace OptimizeStartJobParams {
  /**
   * The contract to optimize
   */
  export interface Scorer {
    /**
     * The application description
     */
    description: string;

    /**
     * The name of the scoring system
     */
    name: string;

    /**
     * The dimensions of the scoring system
     */
    dimensions?: Array<Scorer.Dimension>;
    [k: string]: unknown;
  }

  export namespace Scorer {
    export interface Dimension {
      /**
       * The description of the dimension
       */
      description: string;

      /**
       * The label of the dimension
       */
      label: string;

      /**
       * The sub dimensions of the dimension
       */
      sub_dimensions: Array<Dimension.SubDimension>;

      /**
       * The learned parameters for the scoring method. This represents piecewise linear
       * interpolation between [0, 1].
       */
      parameters?: Array<number> | null;

      /**
       * The weight of the dimension The sum of dimension weights will be normalized to
       * one internally. A higher weight counts for more when aggregating this dimension
       * is aggregated into the final score.
       */
      weight?: number | null;
      [k: string]: unknown;
    }

    export namespace Dimension {
      export interface SubDimension {
        /**
         * The description of the dimension
         */
        description: string;

        /**
         * The label of the dimension
         */
        label: string;

        /**
         * The type of scoring performed for this dimension
         */
        scoring_type: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

        /**
         * The ID of the custom model to use for scoring. Only relevant for scoring_type of
         * CUSTOM_MODEL_SCORER
         */
        custom_model_id?: string | null;

        /**
         * The learned parameters for the scoring method. This represents piecewise linear
         * interpolation between [0, 1].
         */
        parameters?: Array<number> | null;

        /**
         * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
         */
        python_code?: string | null;

        /**
         * The weight of the subdimension. The sum of subdimension weights will be
         * normalized to one internally. A higher weight counts for more when aggregating
         * this subdimension into the parent dimension.
         */
        weight?: number | null;
        [k: string]: unknown;
      }
    }
  }
}

export declare namespace Optimize {
  export {
    type PromptOptimizationStatus as PromptOptimizationStatus,
    type OptimizeListResponse as OptimizeListResponse,
    type OptimizeCancelResponse as OptimizeCancelResponse,
    type OptimizeStreamMessagesResponse as OptimizeStreamMessagesResponse,
    type OptimizeListParams as OptimizeListParams,
    type OptimizeStartJobParams as OptimizeStartJobParams,
  };
}
