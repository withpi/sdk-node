// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ModelAPI from './model';

export class Classifier extends APIResource {
  /**
   * Checks the status of a Classifier job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ClassificationStatus> {
    return this._client.get(`/model/classifier/${jobId}`, options);
  }

  /**
   * Lists the Classifier Jobs owned by a user
   */
  list(query?: ClassifierListParams, options?: Core.RequestOptions): Core.APIPromise<ClassifierListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ClassifierListResponse>;
  list(
    query: ClassifierListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassifierListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/model/classifier', { query, ...options });
  }

  /**
   * Cancels a Classifier job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/model/classifier/${jobId}`, options);
  }

  /**
   * Allows downloading a Classifier job
   */
  download(
    jobId: string,
    params: ClassifierDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/model/classifier/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Launches a Classifier job
   */
  startJob(
    body: ClassifierStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationStatus> {
    return this._client.post('/model/classifier', { body, ...options });
  }

  /**
   * Opens a message stream about a Classifier job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/classifier/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * ClassificationStatus is the status of a classification job.
 */
export interface ClassificationStatus {
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
   * A list of trained classification models.
   */
  trained_models?: Array<ModelAPI.TrainedModel> | null;
}

export type ClassifierListResponse = Array<ClassificationStatus>;

export type ClassifierCancelResponse = string;

export type ClassifierDownloadResponse = string;

export type ClassifierStreamMessagesResponse = string;

export interface ClassifierListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface ClassifierDownloadParams {
  serving_id: number;
}

export interface ClassifierStartJobParams {
  /**
   * The base model to start the classification tuning process
   */
  base_model: 'MODERNBERT_BASE' | 'MODERNBERT_LARGE';

  /**
   * Examples to use in the classification tuning process
   */
  examples: Array<ClassifierStartJobParams.Example>;

  /**
   * Classification learning rate
   */
  learning_rate?: number;

  /**
   * Classification number of train epochs
   */
  num_train_epochs?: number;
}

export namespace ClassifierStartJobParams {
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

export declare namespace Classifier {
  export {
    type ClassificationStatus as ClassificationStatus,
    type ClassifierListResponse as ClassifierListResponse,
    type ClassifierCancelResponse as ClassifierCancelResponse,
    type ClassifierDownloadResponse as ClassifierDownloadResponse,
    type ClassifierStreamMessagesResponse as ClassifierStreamMessagesResponse,
    type ClassifierListParams as ClassifierListParams,
    type ClassifierDownloadParams as ClassifierDownloadParams,
    type ClassifierStartJobParams as ClassifierStartJobParams,
  };
}
