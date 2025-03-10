// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GrpoAPI from './grpo';
import { Grpo, LoraConfig, RlGrpoStatus, TextGenerationBaseModel } from './grpo';

export class Rl extends APIResource {
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Rl.Grpo = Grpo;

export declare namespace Rl {
  export {
    Grpo as Grpo,
    type LoraConfig as LoraConfig,
    type RlGrpoStatus as RlGrpoStatus,
    type TextGenerationBaseModel as TextGenerationBaseModel,
  };
}
