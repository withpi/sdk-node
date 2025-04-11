// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GenerateAPI from './generate';
import {
  Generate,
  GenerateCancelResponse,
  GenerateListParams,
  GenerateListResponse,
  GenerateStartJobParams,
  GenerateStreamDataResponse,
  GenerateStreamMessagesResponse,
} from './generate';
import * as GenerateInputResponsePairsAPI from './generate-input-response-pairs';
import {
  GenerateInputResponsePairCancelResponse,
  GenerateInputResponsePairListParams,
  GenerateInputResponsePairListResponse,
  GenerateInputResponsePairStartJobParams,
  GenerateInputResponsePairStreamDataResponse,
  GenerateInputResponsePairStreamMessagesResponse,
  GenerateInputResponsePairs,
} from './generate-input-response-pairs';

export class Data extends APIResource {
  generate: GenerateAPI.Generate = new GenerateAPI.Generate(this._client);
  generateInputResponsePairs: GenerateInputResponsePairsAPI.GenerateInputResponsePairs =
    new GenerateInputResponsePairsAPI.GenerateInputResponsePairs(this._client);
}

Data.Generate = Generate;
Data.GenerateInputResponsePairs = GenerateInputResponsePairs;

export declare namespace Data {
  export {
    Generate as Generate,
    type GenerateListResponse as GenerateListResponse,
    type GenerateCancelResponse as GenerateCancelResponse,
    type GenerateStreamDataResponse as GenerateStreamDataResponse,
    type GenerateStreamMessagesResponse as GenerateStreamMessagesResponse,
    type GenerateListParams as GenerateListParams,
    type GenerateStartJobParams as GenerateStartJobParams,
  };

  export {
    GenerateInputResponsePairs as GenerateInputResponsePairs,
    type GenerateInputResponsePairListResponse as GenerateInputResponsePairListResponse,
    type GenerateInputResponsePairCancelResponse as GenerateInputResponsePairCancelResponse,
    type GenerateInputResponsePairStreamDataResponse as GenerateInputResponsePairStreamDataResponse,
    type GenerateInputResponsePairStreamMessagesResponse as GenerateInputResponsePairStreamMessagesResponse,
    type GenerateInputResponsePairListParams as GenerateInputResponsePairListParams,
    type GenerateInputResponsePairStartJobParams as GenerateInputResponsePairStartJobParams,
  };
}
