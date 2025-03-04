// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GenerateSyntheticDataAPI from './generate-synthetic-data';
import {
  GenerateSyntheticData,
  GenerateSyntheticDataCancelResponse,
  GenerateSyntheticDataCreateParams,
  GenerateSyntheticDataListJobsParams,
  GenerateSyntheticDataListJobsResponse,
  GenerateSyntheticDataStreamDataResponse,
  GenerateSyntheticDataStreamMessagesResponse,
} from './generate-synthetic-data';
import * as InputsAPI from './inputs/inputs';
import { InputClusterParams, InputClusterResponse, InputTopicCluster, Inputs } from './inputs/inputs';

export class Data extends APIResource {
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
  generateSyntheticData: GenerateSyntheticDataAPI.GenerateSyntheticData =
    new GenerateSyntheticDataAPI.GenerateSyntheticData(this._client);
}

Data.Inputs = Inputs;
Data.GenerateSyntheticData = GenerateSyntheticData;

export declare namespace Data {
  export {
    Inputs as Inputs,
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
  };

  export {
    GenerateSyntheticData as GenerateSyntheticData,
    type GenerateSyntheticDataCancelResponse as GenerateSyntheticDataCancelResponse,
    type GenerateSyntheticDataListJobsResponse as GenerateSyntheticDataListJobsResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataCreateParams as GenerateSyntheticDataCreateParams,
    type GenerateSyntheticDataListJobsParams as GenerateSyntheticDataListJobsParams,
  };
}
