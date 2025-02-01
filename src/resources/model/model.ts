// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SftAPI from './sft/sft';
import { Sft, SftStartJobParams, SftStatus } from './sft/sft';

export class Model extends APIResource {
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
}

Model.Sft = Sft;

export declare namespace Model {
  export { Sft as Sft, type SftStatus as SftStatus, type SftStartJobParams as SftStartJobParams };
}
