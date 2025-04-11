// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GrpoAPI from './grpo';
import { Grpo } from './grpo';
import * as SftAPI from './sft';
import { Sft } from './sft';

export class Training extends APIResource {
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Training.Sft = Sft;
Training.Grpo = Grpo;

export declare namespace Training {
  export { Sft as Sft };

  export { Grpo as Grpo };
}
