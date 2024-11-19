// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as DataAPI from '../data';
import * as GenerateFromSeedsAPI from './generate-from-seeds/generate-from-seeds';
import { GenerateFromSeeds } from './generate-from-seeds/generate-from-seeds';

export class Inputs extends APIResource {
  generateFromSeeds: GenerateFromSeedsAPI.GenerateFromSeeds = new GenerateFromSeedsAPI.GenerateFromSeeds(
    this._client,
  );

  /**
   * Evaluate an input
   */
  evaluate(
    body: InputEvaluateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAPI.InputEvaluationMetrics> {
    return this._client.post('/data/input/evaluate', { body, ...options });
  }

  /**
   * Start an input data generation job
   */
  generate(
    body: InputGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAPI.DataGenerationStatus> {
    return this._client.post('/data/input/generate', { body, ...options });
  }

  /**
   * Checks on an input data generation job
   */
  get(jobId: number, options?: Core.RequestOptions): Core.APIPromise<DataAPI.DataGenerationStatus> {
    return this._client.get(`/data/input/generate/${jobId}`, options);
  }
}

/**
 * DataGenerationStatus is the status of a data generation job.
 */
export interface DataGenerationStatus {
  /**
   * The generated data. Absent unless state is done
   */
  data: Array<string> | null;

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
  state: 'running' | 'done' | 'error';
}

export interface InputEvaluateParams {
  /**
   * The contract the input is intended to drive
   */
  contract: Shared.Contract;

  /**
   * The input to evaluate
   */
  llm_input: string | Record<string, string>;
}

export interface InputGenerateParams {
  contract: Shared.Contract;
}

Inputs.GenerateFromSeeds = GenerateFromSeeds;

export declare namespace Inputs {
  export {
    type DataGenerationStatus as DataGenerationStatus,
    type InputEvaluateParams as InputEvaluateParams,
    type InputGenerateParams as InputGenerateParams,
  };

  export { GenerateFromSeeds as GenerateFromSeeds };
}
