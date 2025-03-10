// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GenerateSyntheticDataAPI from './generate-synthetic-data';
import {
  GenerateSyntheticData,
  GenerateSyntheticDataCancelResponse,
  GenerateSyntheticDataListParams,
  GenerateSyntheticDataListResponse,
  GenerateSyntheticDataStartJobParams,
  GenerateSyntheticDataStreamDataResponse,
  GenerateSyntheticDataStreamMessagesResponse,
} from './generate-synthetic-data';
import * as InputsAPI from './inputs/inputs';
import { InputClusterParams, InputClusterResponse, Inputs } from './inputs/inputs';

export class Data extends APIResource {
  generateSyntheticData: GenerateSyntheticDataAPI.GenerateSyntheticData =
    new GenerateSyntheticDataAPI.GenerateSyntheticData(this._client);
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
}

Data.GenerateSyntheticData = GenerateSyntheticData;
Data.Inputs = Inputs;

export declare namespace Data {
  export {
    GenerateSyntheticData as GenerateSyntheticData,
    type GenerateSyntheticDataListResponse as GenerateSyntheticDataListResponse,
    type GenerateSyntheticDataCancelResponse as GenerateSyntheticDataCancelResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataListParams as GenerateSyntheticDataListParams,
    type GenerateSyntheticDataStartJobParams as GenerateSyntheticDataStartJobParams,
  };

  export {
    Inputs as Inputs,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
  };
}
