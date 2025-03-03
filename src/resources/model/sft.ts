// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as CalibrateAPI from '../contracts/calibrate';

export class Sft extends APIResource {
  /**
   * Checks the status of a SFT job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SftStatus> {
    return this._client.get(`/model/sft/${jobId}`, options);
  }

  /**
   * Lists the SFT Jobs owned by a user
   */
  list(query?: SftListParams, options?: Core.RequestOptions): Core.APIPromise<SftListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SftListResponse>;
  list(
    query: SftListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SftListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/model/sft', { query, ...options });
  }

  /**
   * Cancels a SFT job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/model/sft/${jobId}`, options);
  }

  /**
   * Allows downloading a SFT job
   */
  download(jobId: string, params: SftDownloadParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/model/sft/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Loads a SFT model into serving for a limited period of time
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SftStatus> {
    return this._client.post(`/model/sft/${jobId}/load`, options);
  }

  /**
   * Launches a SFT job
   */
  startJob(body: SftStartJobParams, options?: Core.RequestOptions): Core.APIPromise<Shared.SftStatus> {
    return this._client.post('/model/sft', { body, ...options });
  }

  /**
   * Opens a message stream about a SFT job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/sft/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * SftStatus is the status of a SFT job.
 */
export interface SftStatus {
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
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<Shared.TrainedModel> | null;
}

export type SftListResponse = Array<Shared.SftStatus>;

export type SftCancelResponse = string;

export type SftDownloadResponse = string;

export type SftStreamMessagesResponse = string;

export interface SftListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export interface SftDownloadParams {
  serving_id: number;
}

export interface SftStartJobParams {
  /**
   * The contract to use in the SFT tuning process
   */
  contract: Shared.Contract;

  /**
   * Examples to use in the SFT tuning process. We split this data into train/eval
   * 90/10.
   */
  examples: Array<Shared.Example>;

  /**
   * The base model to start the SFT tuning process.
   */
  base_sft_model?: Shared.FinetuningBaseModel;

  /**
   * SFT learning rate
   */
  learning_rate?: number;

  /**
   * The LoRA configuration.
   */
  lora_config?: Shared.LoraConfig;

  /**
   * SFT number of train epochs
   */
  num_train_epochs?: number;
}

export declare namespace Sft {
  export {
    type SftStatus as SftStatus,
    type SftListResponse as SftListResponse,
    type SftCancelResponse as SftCancelResponse,
    type SftDownloadResponse as SftDownloadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftListParams as SftListParams,
    type SftDownloadParams as SftDownloadParams,
    type SftStartJobParams as SftStartJobParams,
  };
}
