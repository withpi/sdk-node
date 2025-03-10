// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GenerateExamplesAPI from './generate-examples';
import {
  GenerateExampleCancelResponse,
  GenerateExampleCreateParams,
  GenerateExampleListParams,
  GenerateExampleListResponse,
  GenerateExampleStreamDataResponse,
  GenerateExampleStreamMessagesResponse,
  GenerateExamples,
} from './generate-examples';
import * as GenerateInputsAPI from './generate-inputs';
import {
  GenerateInputCancelResponse,
  GenerateInputListParams,
  GenerateInputListResponse,
  GenerateInputStartJobParams,
  GenerateInputStreamDataResponse,
  GenerateInputStreamMessagesResponse,
  GenerateInputs,
} from './generate-inputs';

export class Data extends APIResource {
  generateInputs: GenerateInputsAPI.GenerateInputs = new GenerateInputsAPI.GenerateInputs(this._client);
  generateExamples: GenerateExamplesAPI.GenerateExamples = new GenerateExamplesAPI.GenerateExamples(
    this._client,
  );

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

export declare namespace Data {
  export {
    type DataClusterInputsResponse as DataClusterInputsResponse,
    type DataClusterInputsParams as DataClusterInputsParams,
  };

  export {
    GenerateInputs as GenerateInputs,
    type GenerateInputListResponse as GenerateInputListResponse,
    type GenerateInputCancelResponse as GenerateInputCancelResponse,
    type GenerateInputStreamDataResponse as GenerateInputStreamDataResponse,
    type GenerateInputStreamMessagesResponse as GenerateInputStreamMessagesResponse,
    type GenerateInputListParams as GenerateInputListParams,
    type GenerateInputStartJobParams as GenerateInputStartJobParams,
  };

  export {
    GenerateExamples as GenerateExamples,
    type GenerateExampleListResponse as GenerateExampleListResponse,
    type GenerateExampleCancelResponse as GenerateExampleCancelResponse,
    type GenerateExampleStreamDataResponse as GenerateExampleStreamDataResponse,
    type GenerateExampleStreamMessagesResponse as GenerateExampleStreamMessagesResponse,
    type GenerateExampleCreateParams as GenerateExampleCreateParams,
    type GenerateExampleListParams as GenerateExampleListParams,
  };
}
