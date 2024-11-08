// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ContractAPI from './contract';

export class Dimension extends APIResource {
  /**
   * Generates subdimension within a dimension
   */
  generate(body: DimensionGenerateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Dimension> {
    return this._client.post('/contracts/dimensions/generate', { body, ...options });
  }

  /**
   * Scores a dimension
   */
  score(
    body: DimensionScoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractAPI.ContractsScoreMetrics> {
    return this._client.post('/contracts/dimensions/score', { body, ...options });
  }
}

export interface DimensionGenerateParams {
  dimension: Shared.Dimension;
}

export interface DimensionScoreParams {
  /**
   * The dimension to score
   */
  dimension: Shared.Dimension;

  /**
   * The input to score
   */
  llm_input: string | Record<string, string>;

  /**
   * The output to score
   */
  llm_output: string;
}

export declare namespace Dimension {
  export {
    type DimensionGenerateParams as DimensionGenerateParams,
    type DimensionScoreParams as DimensionScoreParams,
  };
}
