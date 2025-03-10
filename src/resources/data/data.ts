// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GenerateAPI from './generate';
import {
  Generate,
  GenerateCancelResponse,
  GenerateCreateParams,
  GenerateListParams,
  GenerateListResponse,
  GenerateStreamDataResponse,
  GenerateStreamMessagesResponse,
} from './generate';
import * as GenerateExamplesAPI from './generate-examples';
import { GenerateExamples } from './generate-examples';
import * as GenerateInputResponsePairsAPI from './generate-input-response-pairs';
import {
  GenerateInputResponsePairCancelResponse,
  GenerateInputResponsePairCreateParams,
  GenerateInputResponsePairListParams,
  GenerateInputResponsePairListResponse,
  GenerateInputResponsePairStreamDataResponse,
  GenerateInputResponsePairStreamMessagesResponse,
  GenerateInputResponsePairs,
} from './generate-input-response-pairs';
import * as GenerateInputsAPI from './generate-inputs';
import { GenerateInputs } from './generate-inputs';

export class Data extends APIResource {
  generateInputs: GenerateInputsAPI.GenerateInputs = new GenerateInputsAPI.GenerateInputs(this._client);
  generateExamples: GenerateExamplesAPI.GenerateExamples = new GenerateExamplesAPI.GenerateExamples(
    this._client,
  );
  generate: GenerateAPI.Generate = new GenerateAPI.Generate(this._client);
  generateInputResponsePairs: GenerateInputResponsePairsAPI.GenerateInputResponsePairs =
    new GenerateInputResponsePairsAPI.GenerateInputResponsePairs(this._client);

  /**
   * Clusters inputs into groups with counts
   */
  clusterInputs(
    body: DataClusterInputsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataClusterInputsResponse> {
    return this._client.post('/data/cluster_inputs', { body, ...options });
  }
}

export type DataClusterInputsResponse = Array<DataClusterInputsResponse.DataClusterInputsResponseItem>;

export namespace DataClusterInputsResponse {
  export interface DataClusterInputsResponseItem {
    /**
     * The input IDs assigned to this topic
     */
    inputs: Array<string>;

    /**
     * The topic of the input in this cluster
     */
    topic: string;
  }
}

export interface DataClusterInputsParams {
  /**
   * The data to create clusters from.
   */
  inputs: Array<DataClusterInputsParams.Input>;

  /**
   * The number of clusters to form. If none, the api chooses a number automatically.
   */
  num_clusters?: number | null;
}

export namespace DataClusterInputsParams {
  export interface Input {
    /**
     * The identifier of the input
     */
    identifier: string;

    /**
     * The input to LLM
     */
    llm_input: string;
  }
}

Data.GenerateInputs = GenerateInputs;
Data.GenerateExamples = GenerateExamples;
Data.Generate = Generate;
Data.GenerateInputResponsePairs = GenerateInputResponsePairs;

export declare namespace Data {
  export {
    type DataClusterInputsResponse as DataClusterInputsResponse,
    type DataClusterInputsParams as DataClusterInputsParams,
  };

  export { GenerateInputs as GenerateInputs };

  export { GenerateExamples as GenerateExamples };

  export {
    Generate as Generate,
    type GenerateListResponse as GenerateListResponse,
    type GenerateCancelResponse as GenerateCancelResponse,
    type GenerateStreamDataResponse as GenerateStreamDataResponse,
    type GenerateStreamMessagesResponse as GenerateStreamMessagesResponse,
    type GenerateCreateParams as GenerateCreateParams,
    type GenerateListParams as GenerateListParams,
  };

  export {
    GenerateInputResponsePairs as GenerateInputResponsePairs,
    type GenerateInputResponsePairListResponse as GenerateInputResponsePairListResponse,
    type GenerateInputResponsePairCancelResponse as GenerateInputResponsePairCancelResponse,
    type GenerateInputResponsePairStreamDataResponse as GenerateInputResponsePairStreamDataResponse,
    type GenerateInputResponsePairStreamMessagesResponse as GenerateInputResponsePairStreamMessagesResponse,
    type GenerateInputResponsePairCreateParams as GenerateInputResponsePairCreateParams,
    type GenerateInputResponsePairListParams as GenerateInputResponsePairListParams,
  };
}
