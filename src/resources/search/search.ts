// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GroundednessAPI from './groundedness';
import { Groundedness, GroundednessCheckParams, GroundednessCheckResponse } from './groundedness';
import * as QueryClassifierAPI from './query-classifier';
import {
  QueryClassifier,
  QueryClassifierClassifyParams,
  QueryClassifierClassifyResponse,
} from './query-classifier';

export class Search extends APIResource {
  queryClassifier: QueryClassifierAPI.QueryClassifier = new QueryClassifierAPI.QueryClassifier(this._client);
  groundedness: GroundednessAPI.Groundedness = new GroundednessAPI.Groundedness(this._client);

  /**
   * Embeds documents or passages for Search applications. This will return 256
   * dimensional embeddings with the same length as the input query parameter.
   */
  embed(body: SearchEmbedParams, options?: Core.RequestOptions): Core.APIPromise<SearchEmbedResponse> {
    return this._client.post('/search/embed', { body, ...options });
  }

  /**
   * Ranks documents based on their relevance to the query. This will return a score
   * for each passage indicating its relevance to the query. Scores are returned in
   * the same order as the input passages.
   */
  rank(body: SearchRankParams, options?: Core.RequestOptions): Core.APIPromise<SearchRankResponse> {
    return this._client.post('/search/query_to_passage/score', { body, ...options });
  }
}

export type SearchEmbedResponse = Array<Array<number>>;

export type SearchRankResponse = Array<number>;

export interface SearchEmbedParams {
  /**
   * Set to false for realtime usage, such as embedding queries. Set to true for
   * batch usage, such as for embedding documents as part of indexing.
   */
  batch: Array<string>;

  /**
   * List of queries or documents to embed
   */
  query: Array<string>;
}

export interface SearchRankParams {
  /**
   * The passages to rank
   */
  passages: Array<string>;

  /**
   * The query to compare against
   */
  query: string;
}

Search.QueryClassifier = QueryClassifier;
Search.Groundedness = Groundedness;

export declare namespace Search {
  export {
    type SearchEmbedResponse as SearchEmbedResponse,
    type SearchRankResponse as SearchRankResponse,
    type SearchEmbedParams as SearchEmbedParams,
    type SearchRankParams as SearchRankParams,
  };

  export {
    QueryClassifier as QueryClassifier,
    type QueryClassifierClassifyResponse as QueryClassifierClassifyResponse,
    type QueryClassifierClassifyParams as QueryClassifierClassifyParams,
  };

  export {
    Groundedness as Groundedness,
    type GroundednessCheckResponse as GroundednessCheckResponse,
    type GroundednessCheckParams as GroundednessCheckParams,
  };
}
