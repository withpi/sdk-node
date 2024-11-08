// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as DataAPI from './data';

export class Inputs extends APIResource {
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

export declare namespace Inputs {
  export { type InputEvaluateParams as InputEvaluateParams, type InputGenerateParams as InputGenerateParams };
}
