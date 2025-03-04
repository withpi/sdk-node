// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as CalibrateAPI from './calibrate';
import {
  Calibrate,
  CalibrateCancelResponse,
  CalibrateListParams,
  CalibrateListResponse,
  CalibrateStartJobParams,
  CalibrateStreamMessagesResponse,
} from './calibrate';

export class Contracts extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);

  /**
   * Generates dimensions for a contract which will be used to evaluate it
   */
  generateDimensions(
    body: ContractGenerateDimensionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contract> {
    return this._client.post('/contracts/generate_dimensions', { body, ...options });
  }

  /**
   * Read a contract from Huggingface dataset
   */
  readFromHf(
    body: ContractReadFromHfParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contract> {
    return this._client.post('/contracts/read_from_hf', { body, ...options });
  }

  /**
   * Scores a contract based on the provided input and output
   */
  score(body: ContractScoreParams, options?: Core.RequestOptions): Core.APIPromise<ContractsScoreMetrics> {
    return this._client.post('/contracts/score', { body, ...options });
  }
}

export interface ContractsScoreMetrics {
  /**
   * The score components for each dimension
   */
  dimension_scores: Record<string, ContractsScoreMetrics.DimensionScores>;

  /**
   * The total score of the contract
   */
  total_score: number;
}

export namespace ContractsScoreMetrics {
  export interface DimensionScores {
    /**
     * The score components for each subdimension
     */
    subdimension_scores: Record<string, number>;

    /**
     * The total score of the dimension
     */
    total_score: number;
  }
}

export interface ContractGenerateDimensionsParams {
  /**
   * The application description to generate contract for.
   */
  contract_description: string;
}

export interface ContractReadFromHfParams {
  /**
   * Huggingface contract name e.g. withpi/my_contract. You need to provide the
   * hf_token if the contract dataset is not public or not own by the withpi
   * organization.
   */
  hf_contract_name: string;

  /**
   * Huggingface token to read the contract dataset
   */
  hf_token?: string | null;
}

export interface ContractScoreParams {
  /**
   * The contract to score
   */
  contract: Shared.Contract;

  /**
   * The input to score
   */
  llm_input: string;

  /**
   * The output to score
   */
  llm_output: string;
}

Contracts.Calibrate = Calibrate;

export declare namespace Contracts {
  export {
    type ContractsScoreMetrics as ContractsScoreMetrics,
    type ContractGenerateDimensionsParams as ContractGenerateDimensionsParams,
    type ContractReadFromHfParams as ContractReadFromHfParams,
    type ContractScoreParams as ContractScoreParams,
  };

  export {
    Calibrate as Calibrate,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };
}
