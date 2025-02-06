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
   * The result of generating fanout queries for an input query
   */
  export interface QueryGenerateFanoutsResponseItem {
    /**
     * The list of fanout queries generated from the input
     */
    fanout_queries: Array<string>;

    /**
     * The input query to generate fanouts from.
     */
    query: string;
  }
}

export interface QueryGenerateFanoutsParams {
  /**
   * The list of queries to generate fanouts for
   */
  queries: Array<string>;
}

export declare namespace Queries {
  export {
    type QueryGenerateFanoutsResponse as QueryGenerateFanoutsResponse,
    type QueryGenerateFanoutsParams as QueryGenerateFanoutsParams,
  };
}
