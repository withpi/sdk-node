// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PromptAPI from './prompt';
import {
  Prompt,
  PromptCreateParams,
  PromptOptimizationStatus as PromptAPIPromptOptimizationStatus,
  PromptStreamMessagesResponse,
} from './prompt';
import * as ModelAPI from './model/model';
import { Model } from './model/model';

export class Tune extends APIResource {
  prompt: PromptAPI.Prompt = new PromptAPI.Prompt(this._client);
  model: ModelAPI.Model = new ModelAPI.Model(this._client);
}

/**
 * The optimized_prompt_messages field is an empty list unless the state is done.
 */
export interface PromptOptimizationStatus {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * The optimized prompt messages in the OpenAI message format with the jinja
   * {{ input }} variable for the next user prompt
   */
  optimized_prompt_messages: Array<Record<string, string>>;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';
}

Tune.Prompt = Prompt;
Tune.Model = Model;

export declare namespace Tune {
  export { type PromptOptimizationStatus as PromptOptimizationStatus };

  export {
    Prompt as Prompt,
    type PromptAPIPromptOptimizationStatus as PromptOptimizationStatus,
    type PromptStreamMessagesResponse as PromptStreamMessagesResponse,
    type PromptCreateParams as PromptCreateParams,
  };

  export { Model as Model };
}
