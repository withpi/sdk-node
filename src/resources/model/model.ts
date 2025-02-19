// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SftAPI from './sft';
import {
  Sft,
  SftCheckResponse,
  SftLoadResponse,
  SftStartJobParams,
  SftStatus,
  SftStreamMessagesResponse,
} from './sft';
import * as RlAPI from './rl/rl';
import { Rl } from './rl/rl';

export class Model extends APIResource {
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  rl: RlAPI.Rl = new RlAPI.Rl(this._client);
}

Model.Sft = Sft;
Model.Rl = Rl;

export declare namespace Model {
  export {
    Sft as Sft,
    type SftStatus as SftStatus,
    type SftCheckResponse as SftCheckResponse,
    type SftLoadResponse as SftLoadResponse,
    type SftStreamMessagesResponse as SftStreamMessagesResponse,
    type SftStartJobParams as SftStartJobParams,
  };

  export { Rl as Rl };
}
