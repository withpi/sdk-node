// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as QueryClassifierAPI from './query-classifier';
import {
  QueryClassifier,
  QueryClassifierClassifyParams,
  QueryClassifierClassifyResponse,
} from './query-classifier';
import * as QueryFanoutAPI from './query-fanout';
import { QueryFanout, QueryFanoutGenerateParams, QueryFanoutGenerateResponse } from './query-fanout';

export class Search extends APIResource {
  queryFanout: QueryFanoutAPI.QueryFanout = new QueryFanoutAPI.QueryFanout(this._client);
  queryClassifier: QueryClassifierAPI.QueryClassifier = new QueryClassifierAPI.QueryClassifier(this._client);
}

Search.QueryFanout = QueryFanout;
Search.QueryClassifier = QueryClassifier;

export declare namespace Search {
  export {
    QueryFanout as QueryFanout,
    type QueryFanoutGenerateResponse as QueryFanoutGenerateResponse,
    type QueryFanoutGenerateParams as QueryFanoutGenerateParams,
  };

  export {
    QueryClassifier as QueryClassifier,
    type QueryClassifierClassifyResponse as QueryClassifierClassifyResponse,
    type QueryClassifierClassifyParams as QueryClassifierClassifyParams,
  };
}
