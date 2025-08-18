// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class QueryToPassage extends APIResource {
  /**
   * Ranks documents based on their relevance to the query. This will return a score
   * for each passage indicating its relevance to the query. Scores are returned in
   * the same order as the input passages.
   */
  rankDocuments(
    body: QueryToPassageRankDocumentsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryToPassageRankDocumentsResponse> {
    return this._client.post('/search/query_to_passage/score', { body, ...options });
  }
}

export type QueryToPassageRankDocumentsResponse = Array<number>;

export interface QueryToPassageRankDocumentsParams {
  /**
   * The passages to rank
   */
  passages: Array<string>;

  /**
   * The query to compare against
   */
  query: string;
}

export declare namespace QueryToPassage {
  export {
    type QueryToPassageRankDocumentsResponse as QueryToPassageRankDocumentsResponse,
    type QueryToPassageRankDocumentsParams as QueryToPassageRankDocumentsParams,
  };
}
