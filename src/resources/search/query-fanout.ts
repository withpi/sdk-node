// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class QueryFanout extends APIResource {
  /**
   * Generates query fanout for an input query.
   */
  generate(
    body: QueryFanoutGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryFanoutGenerateResponse> {
    return this._client.post('/search/query_fanout/generate', { body, ...options });
  }
}

export type QueryFanoutGenerateResponse = Array<string>;

export interface QueryFanoutGenerateParams {
  /**
   * The query to generate fanouts for
   */
  query: string;

  /**
   * The list of few-shot examples for the fanout generation. Only needed if the
   * default fanouts are not working well.
   */
  few_shot_examples?: Array<Shared.QueryFanoutExample>;

  /**
   * The number of fanout queries to generate
   */
  num_fanout_queries?: number;
}

export declare namespace QueryFanout {
  export {
    type QueryFanoutGenerateResponse as QueryFanoutGenerateResponse,
    type QueryFanoutGenerateParams as QueryFanoutGenerateParams,
  };
}
