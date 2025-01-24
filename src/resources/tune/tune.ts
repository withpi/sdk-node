// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PromptAPI from './prompt';
import {
  Prompt,
  PromptGetDetailedMessagesResponse,
  PromptGetStatusResponse,
  PromptOptimizeParams,
  PromptOptimizeResponse,
} from './prompt';

export class Tune extends APIResource {
  prompt: PromptAPI.Prompt = new PromptAPI.Prompt(this._client);
}

Tune.Prompt = Prompt;

export declare namespace Tune {
  export {
    Prompt as Prompt,
    type PromptGetDetailedMessagesResponse as PromptGetDetailedMessagesResponse,
    type PromptGetStatusResponse as PromptGetStatusResponse,
    type PromptOptimizeResponse as PromptOptimizeResponse,
    type PromptOptimizeParams as PromptOptimizeParams,
  };
}
