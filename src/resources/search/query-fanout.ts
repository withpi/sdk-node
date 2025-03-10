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

export type QueryFanoutGenerateResponse = Array<Shared.QueryFanoutExample>;

export interface QueryFanoutGenerateParams {
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

export declare namespace QueryFanout {
  export {
    type QueryFanoutGenerateResponse as QueryFanoutGenerateResponse,
    type QueryFanoutGenerateParams as QueryFanoutGenerateParams,
  };
}
