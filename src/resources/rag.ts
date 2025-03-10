// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Rag extends APIResource {
  /**
   * Classifies queries into provided classes based on a custom taxonomy.
   */
  classifyQuery(
    body: RagClassifyQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RagClassifyQueryResponse> {
    return this._client.post('/rag/query_classify', { body, ...options });
  }

  /**
   * Generates query fanouts for an input query.
   */
  generateFanout(
    body: RagGenerateFanoutParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RagGenerateFanoutResponse> {
    return this._client.post('/rag/query_fanout', { body, ...options });
  }
}

export interface RagClassifyQueryResponse {
  results: Array<RagClassifyQueryResponse.Result>;
}

export namespace RagClassifyQueryResponse {
  export interface Result {
    prediction: string;

    probabilities: Array<Result.Probability>;

    query: string;
  }

  export namespace Result {
    export interface Probability {
      label: string;

      score: number;
    }
  }
}

export type RagGenerateFanoutResponse = Array<Shared.QueryFanoutExample>;

export interface RagClassifyQueryParams {
  /**
   * The list of class definitions to classify the queries into. Must be <= 20.
   */
  classes: Array<RagClassifyQueryParams.Class>;

  /**
   * The list of queries to classify. Must be <= 10.
   */
  queries: Array<string>;

  /**
   * Number of inputs to generate in one LLM call. Must be <=10.
   */
  batch_size?: number;

  /**
   * Optional list of examples to provide as few-shot examples for the classifier.
   * Must be <= 20.
   */
  examples?: Array<RagClassifyQueryParams.Example> | null;

  /**
   * The mode to use for the classification. The probabilistic mode returns
   * probabilities for each class.
   */
  mode?: 'generative' | 'probabilistic';
}

export namespace RagClassifyQueryParams {
  export interface Class {
    description: string;

    label: string;
  }

  export interface Example {
    label: string;

    text: string;
  }
}

export interface RagGenerateFanoutParams {
  /**
   * The list of queries to generate fanouts for
   */
  queries: Array<string>;

  /**
   * The list of queries to use as few-shot examples for the fanout generation
   */
  example_fanout_queries?: Array<Shared.QueryFanoutExample>;

  /**
   * The number of fanout queries to generate for each input query
   */
  num_fanout_queries?: number;
}

export declare namespace Rag {
  export {
    type RagClassifyQueryResponse as RagClassifyQueryResponse,
    type RagGenerateFanoutResponse as RagGenerateFanoutResponse,
    type RagClassifyQueryParams as RagClassifyQueryParams,
    type RagGenerateFanoutParams as RagGenerateFanoutParams,
  };
}
