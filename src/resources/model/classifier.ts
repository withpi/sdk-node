// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Classifier extends APIResource {
  /**
   * Launches a Classifier job
   */
  create(
    body: ClassifierCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassifierCreateResponse> {
    return this._client.post('/model/classifier', { body, ...options });
  }

  /**
   * Checks the status of a Classifier job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ClassifierRetrieveResponse> {
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
   * Opens a message stream about a Classifier job
   */
  messages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/classifier/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * ClassificationStatus is the status of a classification job.
 */
export interface ClassifierCreateResponse {
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
  state: Shared.State;

  /**
   * A list of trained classification models.
   */
  trained_models?: Array<Shared.TrainedModel> | null;
}

/**
 * ClassificationStatus is the status of a classification job.
 */
export interface ClassifierRetrieveResponse {
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
  state: Shared.State;

  /**
   * A list of trained classification models.
   */
  trained_models?: Array<Shared.TrainedModel> | null;
}

export type ClassifierListResponse = Array<ClassifierListResponse.ClassifierListResponseItem>;

export namespace ClassifierListResponse {
  /**
   * ClassificationStatus is the status of a classification job.
   */
  export interface ClassifierListResponseItem {
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
    state: Shared.State;

    /**
     * A list of trained classification models.
     */
    trained_models?: Array<Shared.TrainedModel> | null;
  }
}

export type ClassifierCancelResponse = string;

export type ClassifierDownloadResponse = string;

export type ClassifierMessagesResponse = string;

export interface ClassifierCreateParams {
  /**
   * The base model to start the classification tuning process
   */
  base_model: 'MODERNBERT_BASE' | 'MODERNBERT_LARGE';

  /**
   * Examples to use in the classification tuning process
   */
  examples: Array<Shared.Example>;

  /**
   * Classification learning rate
   */
  learning_rate?: number;

  /**
   * Classification number of train epochs
   */
  num_train_epochs?: number;
}

export interface ClassifierListParams {
  /**
   * Filter jobs by state
   */
  state?: Shared.State | null;
}

export interface ClassifierDownloadParams {
  serving_id: number;
}

export declare namespace Classifier {
  export {
    type ClassifierCreateResponse as ClassifierCreateResponse,
    type ClassifierRetrieveResponse as ClassifierRetrieveResponse,
    type ClassifierListResponse as ClassifierListResponse,
    type ClassifierCancelResponse as ClassifierCancelResponse,
    type ClassifierDownloadResponse as ClassifierDownloadResponse,
    type ClassifierMessagesResponse as ClassifierMessagesResponse,
    type ClassifierCreateParams as ClassifierCreateParams,
    type ClassifierListParams as ClassifierListParams,
    type ClassifierDownloadParams as ClassifierDownloadParams,
  };
}
