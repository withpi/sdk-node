// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Experiment extends APIResource {
  /**
   * Launches an experiment on a set of data
   */
  create(body: ExperimentCreateParams, options?: Core.RequestOptions): Core.APIPromise<ExperimentStatus> {
    return this._client.post('/experiments', { body, ...options });
  }

  /**
   * Checks on an experiment job
   */
  get(jobId: number, options?: Core.RequestOptions): Core.APIPromise<ExperimentStatus> {
    return this._client.get(`/experiments/${jobId}`, options);
  }
}

export interface ExperimentStatus {
  /**
   * The job id
   */
  job_id: number;

  /**
   * Current state of the job
   */
  state: 'running' | 'done' | 'error';
}

export interface ExperimentCreateParams {
  /**
   * The contract to evaluate against
   */
  contract: Shared.Contract;

  /**
   * The examples to evaluate
   */
  examples: Array<ExperimentCreateParams.Example>;

  /**
   * The scorer id to use
   */
  scorer_id: number;
}

export namespace ExperimentCreateParams {
  export interface Example {
    /**
     * The input to evaluate
     */
    llm_input: string | Record<string, string>;

    /**
     * The output to evaluate
     */
    llm_output: string;
  }
}

export declare namespace Experiment {
  export { type ExperimentStatus as ExperimentStatus, type ExperimentCreateParams as ExperimentCreateParams };
}
