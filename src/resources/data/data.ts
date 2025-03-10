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
  GenerateInputCreateParams,
  GenerateInputListParams,
  GenerateInputListResponse,
  GenerateInputStreamDataResponse,
  GenerateInputStreamMessagesResponse,
  GenerateInputs,
} from './generate-inputs';
import * as GenerateSyntheticDataAPI from './generate-synthetic-data';
import { GenerateSyntheticData } from './generate-synthetic-data';
import * as InputsAPI from './inputs/inputs';
import { Inputs } from './inputs/inputs';

export class Data extends APIResource {
  generateSyntheticData: GenerateSyntheticDataAPI.GenerateSyntheticData =
    new GenerateSyntheticDataAPI.GenerateSyntheticData(this._client);
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
  generateExamples: GenerateExamplesAPI.GenerateExamples = new GenerateExamplesAPI.GenerateExamples(
    this._client,
  );
  generateInputs: GenerateInputsAPI.GenerateInputs = new GenerateInputsAPI.GenerateInputs(this._client);

  /**
   * Clusters inputs into groups with counts
   */
  createClusterInputs(
    body: DataCreateClusterInputsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataCreateClusterInputsResponse> {
    return this._client.post('/data/cluster_inputs', { body, ...options });
  }
}

export type DataCreateClusterInputsResponse =
  Array<DataCreateClusterInputsResponse.DataCreateClusterInputsResponseItem>;

export namespace DataCreateClusterInputsResponse {
  export interface DataCreateClusterInputsResponseItem {
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

export interface DataCreateClusterInputsParams {
  /**
   * The data to create clusters from.
   */
  inputs: Array<DataCreateClusterInputsParams.Input>;

  /**
   * The number of clusters to form. If none, the api chooses a number automatically.
   */
  num_clusters?: number | null;
}

export namespace DataCreateClusterInputsParams {
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

Data.GenerateSyntheticData = GenerateSyntheticData;
Data.Inputs = Inputs;
Data.GenerateExamples = GenerateExamples;
Data.GenerateInputs = GenerateInputs;

export declare namespace Data {
  export {
    type DataCreateClusterInputsResponse as DataCreateClusterInputsResponse,
    type DataCreateClusterInputsParams as DataCreateClusterInputsParams,
  };

  export { GenerateSyntheticData as GenerateSyntheticData };

  export { Inputs as Inputs };

  export {
    GenerateExamples as GenerateExamples,
    type GenerateExampleListResponse as GenerateExampleListResponse,
    type GenerateExampleCancelResponse as GenerateExampleCancelResponse,
    type GenerateExampleStreamDataResponse as GenerateExampleStreamDataResponse,
    type GenerateExampleStreamMessagesResponse as GenerateExampleStreamMessagesResponse,
    type GenerateExampleCreateParams as GenerateExampleCreateParams,
    type GenerateExampleListParams as GenerateExampleListParams,
  };

  export {
    GenerateInputs as GenerateInputs,
    type GenerateInputListResponse as GenerateInputListResponse,
    type GenerateInputCancelResponse as GenerateInputCancelResponse,
    type GenerateInputStreamDataResponse as GenerateInputStreamDataResponse,
    type GenerateInputStreamMessagesResponse as GenerateInputStreamMessagesResponse,
    type GenerateInputCreateParams as GenerateInputCreateParams,
    type GenerateInputListParams as GenerateInputListParams,
  };
}
