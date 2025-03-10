// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as QueryFanoutAPI from './query-fanout';
import { QueryFanout, QueryFanoutGenerateParams, QueryFanoutGenerateResponse } from './query-fanout';
import * as QueryClassifierAPI from './query-classifier/query-classifier';
import {
  QueryClassifier,
  QueryClassifierClassifyParams,
  QueryClassifierClassifyResponse,
} from './query-classifier/query-classifier';

export class Search extends APIResource {
  queryClassifier: QueryClassifierAPI.QueryClassifier = new QueryClassifierAPI.QueryClassifier(this._client);
  queryFanout: QueryFanoutAPI.QueryFanout = new QueryFanoutAPI.QueryFanout(this._client);
}

Search.QueryClassifier = QueryClassifier;
Search.QueryFanout = QueryFanout;

export declare namespace Search {
  export {
    QueryClassifier as QueryClassifier,
    type QueryClassifierClassifyResponse as QueryClassifierClassifyResponse,
    type QueryClassifierClassifyParams as QueryClassifierClassifyParams,
  };

  export {
    QueryFanout as QueryFanout,
    type QueryFanoutGenerateResponse as QueryFanoutGenerateResponse,
    type QueryFanoutGenerateParams as QueryFanoutGenerateParams,
  };
}
