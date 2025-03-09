// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GenerateSyntheticDataAPI from './generate-synthetic-data';
import {
  GenerateSyntheticData,
  GenerateSyntheticDataCancelResponse,
  GenerateSyntheticDataCreateParams,
  GenerateSyntheticDataListParams,
  GenerateSyntheticDataListResponse,
  GenerateSyntheticDataStreamDataResponse,
  GenerateSyntheticDataStreamMessagesResponse,
  SDKExample,
  SDKExplorationMode,
  SyntheticDataStatus,
} from './generate-synthetic-data';
import * as InputAPI from './input/input';
import { Input, InputClusterParams, InputClusterResponse } from './input/input';

export class Data extends APIResource {
  generateSyntheticData: GenerateSyntheticDataAPI.GenerateSyntheticData =
    new GenerateSyntheticDataAPI.GenerateSyntheticData(this._client);
  input: InputAPI.Input = new InputAPI.Input(this._client);
}

Data.GenerateSyntheticData = GenerateSyntheticData;
Data.Input = Input;

export declare namespace Data {
  export {
    GenerateSyntheticData as GenerateSyntheticData,
    type SDKExample as SDKExample,
    type SDKExplorationMode as SDKExplorationMode,
    type SyntheticDataStatus as SyntheticDataStatus,
    type GenerateSyntheticDataListResponse as GenerateSyntheticDataListResponse,
    type GenerateSyntheticDataCancelResponse as GenerateSyntheticDataCancelResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataCreateParams as GenerateSyntheticDataCreateParams,
    type GenerateSyntheticDataListParams as GenerateSyntheticDataListParams,
  };

  export {
    Input as Input,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
  };
}
