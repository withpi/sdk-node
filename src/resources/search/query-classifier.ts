// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class QueryClassifier extends APIResource {
  /**
   * Classifies queries into provided classes based on a custom taxonomy.
   */
  classify(
    body: QueryClassifierClassifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryClassifierClassifyResponse> {
    return this._client.post('/search/query_classifier/classify', { body, ...options });
  }
}

export interface QueryClassifierClassifyResponse {
  results: Array<QueryClassifierClassifyResponse.Result>;
}

export namespace QueryClassifierClassifyResponse {
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

export interface QueryClassifierClassifyParams {
  /**
   * The list of class definitions to classify the queries into. Must be <= 20.
   */
  classes: Array<QueryClassifierClassifyParams.Class>;

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
  examples?: Array<QueryClassifierClassifyParams.Example> | null;

  /**
   * The mode to use for the classification. The probabilistic mode returns
   * probabilities for each class.
   */
  mode?: 'generative' | 'probabilistic';
}

export namespace QueryClassifierClassifyParams {
  export interface Class {
    description: string;

    label: string;
  }

  export interface Example {
    label: string;

    text: string;
  }
}

export declare namespace QueryClassifier {
  export {
    type QueryClassifierClassifyResponse as QueryClassifierClassifyResponse,
    type QueryClassifierClassifyParams as QueryClassifierClassifyParams,
  };
}
