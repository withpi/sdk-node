// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Queries extends APIResource {
  /**
   * Classifies queries into provided classes based on a custom taxonomy.
   */
  classify(
    body: QueryClassifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryClassificationResponse> {
    return this._client.post('/queries/classify', { body, ...options });
  }

  /**
   * Generates query fanouts for an input query.
   */
  generateFanouts(
    body: QueryGenerateFanoutsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryGenerateFanoutsResponse> {
    return this._client.post('/queries/generate_fanouts', { body, ...options });
  }
}

export interface QueryClassificationResponse {
  results: Array<QueryClassificationResponse.Result>;
}

export namespace QueryClassificationResponse {
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

export type QueryGenerateFanoutsResponse = Array<Shared.QueryFanoutExample>;

export interface QueryClassifyParams {
  /**
   * The list of class definitions to classify the queries into. Must be <= 20.
   */
  classes: Array<QueryClassifyParams.Class>;

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
  examples?: Array<QueryClassifyParams.Example> | null;

  /**
   * The mode to use for the classification. The probabilistic mode returns
   * probabilities for each class.
   */
  mode?: 'generative' | 'probabilistic';
}

export namespace QueryClassifyParams {
  export interface Class {
    description: string;

    label: string;
  }

  export interface Example {
    label: string;

    text: string;
  }
}

export interface QueryGenerateFanoutsParams {
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

export declare namespace Queries {
  export {
    type QueryClassificationResponse as QueryClassificationResponse,
    type QueryGenerateFanoutsResponse as QueryGenerateFanoutsResponse,
    type QueryClassifyParams as QueryClassifyParams,
    type QueryGenerateFanoutsParams as QueryGenerateFanoutsParams,
  };
}
