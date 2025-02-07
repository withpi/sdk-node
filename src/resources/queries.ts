// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Queries extends APIResource {
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

export type QueryGenerateFanoutsResponse =
  Array<QueryGenerateFanoutsResponse.QueryGenerateFanoutsResponseItem>;

export namespace QueryGenerateFanoutsResponse {
  /**
   * An input query and its associated fanout queries
   */
  export interface QueryGenerateFanoutsResponseItem {
    /**
     * The list of fanout queries associated with the input
     */
    fanout_queries: Array<string>;

    /**
     * The input query that the fanout queries are based on.
     */
    query: string;
  }
}

export interface QueryGenerateFanoutsParams {
  /**
   * The list of queries to use as few-shot examples for the fanout generation
   */
  example_fanout_queries: Array<QueryGenerateFanoutsParams.ExampleFanoutQuery>;

  /**
   * The number of fanout queries to generate for each input query
   */
  num_fanout_queries: number;

  /**
   * The list of queries to generate fanouts for
   */
  queries: Array<string>;
}

export namespace QueryGenerateFanoutsParams {
  /**
   * An input query and its associated fanout queries
   */
  export interface ExampleFanoutQuery {
    /**
     * The list of fanout queries associated with the input
     */
    fanout_queries: Array<string>;

    /**
     * The input query that the fanout queries are based on.
     */
    query: string;
  }
}

export declare namespace Queries {
  export {
    type QueryGenerateFanoutsResponse as QueryGenerateFanoutsResponse,
    type QueryGenerateFanoutsParams as QueryGenerateFanoutsParams,
  };
}
