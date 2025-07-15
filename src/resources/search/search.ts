// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GroundednessAPI from './groundedness';
import { Groundedness, GroundednessCheckParams, GroundednessCheckResponse } from './groundedness';
import * as QueryClassifierAPI from './query-classifier';
import {
  QueryClassifier,
  QueryClassifierClassifyParams,
  QueryClassifierClassifyResponse,
} from './query-classifier';
import * as QueryFanoutAPI from './query-fanout';
import { QueryFanout } from './query-fanout';

export class Search extends APIResource {
  queryFanout: QueryFanoutAPI.QueryFanout = new QueryFanoutAPI.QueryFanout(this._client);
  queryClassifier: QueryClassifierAPI.QueryClassifier = new QueryClassifierAPI.QueryClassifier(this._client);
  groundedness: GroundednessAPI.Groundedness = new GroundednessAPI.Groundedness(this._client);
}

Search.QueryFanout = QueryFanout;
Search.QueryClassifier = QueryClassifier;
Search.Groundedness = Groundedness;

export declare namespace Search {
  export { QueryFanout as QueryFanout };

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
