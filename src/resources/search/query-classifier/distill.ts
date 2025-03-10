// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Distill extends APIResource {
  /**
   * Checks the status of a Query Classifier Distillation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ClassificationStatus> {
    return this._client.get(`/search/query_classifier/distill/${jobId}`, options);
  }

  /**
   * Lists the Query Classifier Distillation Jobs owned by a user
   */
  list(query?: DistillListParams, options?: Core.RequestOptions): Core.APIPromise<DistillListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DistillListResponse>;
  list(
    query: DistillListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DistillListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/search/query_classifier/distill', { query, ...options });
  }

  /**
   * Cancels a Query Classifier Distillation job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/search/query_classifier/distill/${jobId}`, options);
  }

  /**
   * Allows downloading a Query Classifier Distillation job
   */
  download(
    jobId: string,
    params: DistillDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/search/query_classifier/distill/${jobId}/download`, {
      query: { serving_id },
      ...options,
    });
  }

  /**
   * Starts a Query Classifier Distillation job
   */
  startJob(
    body: DistillStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ClassificationStatus> {
    return this._client.post('/search/query_classifier/distill', { body, ...options });
  }

  /**
   * Opens a message stream about a Query Classifier Distillation job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/search/query_classifier/distill/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type DistillListResponse = Array<Shared.ClassificationStatus>;

export type DistillCancelResponse = string;

export type DistillDownloadResponse = string;

export type DistillStreamMessagesResponse = string;

export interface DistillListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface DistillDownloadParams {
  serving_id: number;
}

export interface DistillStartJobParams {
  /**
   * The base model to start the classification tuning process
   */
  base_model: 'MODERNBERT_BASE' | 'MODERNBERT_LARGE';

  /**
   * Examples to use in the classification tuning process
   */
  examples: Array<Shared.SDKExample>;

  /**
   * Classification learning rate
   */
  learning_rate?: number;

  /**
   * Classification number of train epochs
   */
  num_train_epochs?: number;
}

export declare namespace Distill {
  export {
    type DistillListResponse as DistillListResponse,
    type DistillCancelResponse as DistillCancelResponse,
    type DistillDownloadResponse as DistillDownloadResponse,
    type DistillStreamMessagesResponse as DistillStreamMessagesResponse,
    type DistillListParams as DistillListParams,
    type DistillDownloadParams as DistillDownloadParams,
    type DistillStartJobParams as DistillStartJobParams,
  };
}
