// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Generate extends APIResource {
  /**
   * Checks the status of a Generate Scoring Spec job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<GenerateRetrieveResponse> {
    return this._client.get(`/scoring_system/generate/${jobId}`, options);
  }

  /**
   * Lists the Generate Scoring Spec Jobs owned by a user
   */
  list(query?: GenerateListParams, options?: Core.RequestOptions): Core.APIPromise<GenerateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerateListResponse>;
  list(
    query: GenerateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/scoring_system/generate', { query, ...options });
  }

  /**
   * Cancels a Generate Scoring Spec job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/scoring_system/generate/${jobId}`, options);
  }

  /**
   * Starts a Generate Scoring Spec job
   */
  startJob(
    body: GenerateStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateStartJobResponse> {
    return this._client.post('/scoring_system/generate', { body, ...options });
  }

  /**
   * Opens a message stream about a Generate Scoring Spec job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/scoring_system/generate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface GenerateRetrieveResponse {
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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * The generated scoring spec
   */
  scoring_spec?: Array<Shared.Question> | null;

  /**
   * Threshold to use to separate 0 and 1 labels in the case of classification.
   */
  threshold?: number | null;
}

export type GenerateListResponse = Array<GenerateListResponse.GenerateListResponseItem>;

export namespace GenerateListResponse {
  export interface GenerateListResponseItem {
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
    state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

    /**
     * The generated scoring spec
     */
    scoring_spec?: Array<Shared.Question> | null;

    /**
     * Threshold to use to separate 0 and 1 labels in the case of classification.
     */
    threshold?: number | null;
  }
}

export type GenerateCancelResponse = string;

export interface GenerateStartJobResponse {
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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * The generated scoring spec
   */
  scoring_spec?: Array<Shared.Question> | null;

  /**
   * Threshold to use to separate 0 and 1 labels in the case of classification.
   */
  threshold?: number | null;
}

export type GenerateStreamMessagesResponse = string;

export interface GenerateListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface GenerateStartJobParams {
  /**
   * The application description to generate a scoring spec for.
   */
  application_description: string;

  /**
   * Rated examples to use for generating the discriminating questions. The scores
   * can be class labels or actual scores (but must be between 0 and 1)
   */
  examples: Array<GenerateStartJobParams.Example>;

  /**
   * Preference examples to use for generating the discriminating questions. Must
   * specify either the examples or preference examples
   */
  preference_examples: Array<GenerateStartJobParams.PreferenceExample>;

  /**
   * Number of examples to use in one batch to generate the questions.
   */
  batch_size?: number;

  /**
   * The number of questions that the generated scoring system should contain. If <=
   * 0, then the number is auto selected.
   */
  num_questions?: number;

  /**
   * If true, try to generate python code for the generated questions.
   */
  try_auto_generating_python_code?: boolean;
}

export namespace GenerateStartJobParams {
  /**
   * An labeled example for training or evaluation
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

    /**
     * @deprecated DEPRECATED: Instead fill the desired score to the 'score' field.
     */
    rating?: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree' | null;

    /**
     * The target score of the example, between 0 and 1.
     */
    score?: number;
  }

  /**
   * An preference example for training or evaluation
   */
  export interface PreferenceExample {
    /**
     * The chosen output in corresponding to the llm_input.
     */
    chosen: string;

    /**
     * The input to LLM
     */
    llm_input: string;

    /**
     * The rejected output in corresponding to the llm_input.
     */
    rejected: string;
  }
}

export declare namespace Generate {
  export {
    type GenerateRetrieveResponse as GenerateRetrieveResponse,
    type GenerateListResponse as GenerateListResponse,
    type GenerateCancelResponse as GenerateCancelResponse,
    type GenerateStartJobResponse as GenerateStartJobResponse,
    type GenerateStreamMessagesResponse as GenerateStreamMessagesResponse,
    type GenerateListParams as GenerateListParams,
    type GenerateStartJobParams as GenerateStartJobParams,
  };
}
