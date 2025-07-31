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

export class Search extends APIResource {
  queryClassifier: QueryClassifierAPI.QueryClassifier = new QueryClassifierAPI.QueryClassifier(this._client);
  groundedness: GroundednessAPI.Groundedness = new GroundednessAPI.Groundedness(this._client);
}

Search.QueryClassifier = QueryClassifier;
Search.Groundedness = Groundedness;

export declare namespace Search {
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
