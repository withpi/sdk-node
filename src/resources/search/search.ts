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
import * as QueryToPassageAPI from './query-to-passage';
import {
  QueryToPassage,
  QueryToPassageRankDocumentsParams,
  QueryToPassageRankDocumentsResponse,
} from './query-to-passage';

export class Search extends APIResource {
  queryClassifier: QueryClassifierAPI.QueryClassifier = new QueryClassifierAPI.QueryClassifier(this._client);
  groundedness: GroundednessAPI.Groundedness = new GroundednessAPI.Groundedness(this._client);
  queryToPassage: QueryToPassageAPI.QueryToPassage = new QueryToPassageAPI.QueryToPassage(this._client);

  /**
   * Embeds documents or passages for Search applications. This will return 256
   * dimensional embeddings with the same length as the input query parameter.
   */
  embedDocuments(
    body: SearchEmbedDocumentsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchEmbedDocumentsResponse> {
    return this._client.post('/search/embed', { body, ...options });
  }
}

export type SearchEmbedDocumentsResponse = Array<Array<number>>;

export interface SearchEmbedDocumentsParams {
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

Search.QueryClassifier = QueryClassifier;
Search.Groundedness = Groundedness;
Search.QueryToPassage = QueryToPassage;

export declare namespace Search {
  export {
    type SearchEmbedDocumentsResponse as SearchEmbedDocumentsResponse,
    type SearchEmbedDocumentsParams as SearchEmbedDocumentsParams,
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

  export {
    QueryToPassage as QueryToPassage,
    type QueryToPassageRankDocumentsResponse as QueryToPassageRankDocumentsResponse,
    type QueryToPassageRankDocumentsParams as QueryToPassageRankDocumentsParams,
  };
}
