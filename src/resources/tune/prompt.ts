// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as TuneAPI from './tune';

export class Prompt extends APIResource {
  /**
   * Checks on a prompt optimization job
   */
  get(jobId: number, options?: Core.RequestOptions): Core.APIPromise<TuneAPI.OptimizationStatus> {
    return this._client.get(`/tune/prompt/${jobId}`, options);
  }

  /**
   * Start a prompt optimization job
   */
  optimize(
    body: PromptOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TuneAPI.OptimizationStatus> {
    return this._client.post('/tune/prompt', { body, ...options });
  }
}

export interface PromptOptimizeParams {
  /**
   * The contract to optimize
   */
  contract: Shared.Contract;

  /**
   * The experiment id
   */
  experiment_id: number;
}

export declare namespace Prompt {
  export { type PromptOptimizeParams as PromptOptimizeParams };
}
