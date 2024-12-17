// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as PromptAPI from './prompt';
import { Prompt, PromptGetDetailedMessagesResponse, PromptOptimizeParams } from './prompt';

export class Tune extends APIResource {
  prompt: PromptAPI.Prompt = new PromptAPI.Prompt(this._client);
}

/**
 * OptimizationStatus is the status of a tuning job. The contract field is absent
 * unless the state is done.
 */
export interface OptimizationStatus {
  /**
   * The optimized contract. Absent unless state is done
   */
  contract: Shared.Contract | null;

  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: 'queued' | 'running' | 'done' | 'error';
}

Tune.Prompt = Prompt;

export declare namespace Tune {
  export { type OptimizationStatus as OptimizationStatus };

  export {
    Prompt as Prompt,
    type PromptGetDetailedMessagesResponse as PromptGetDetailedMessagesResponse,
    type PromptOptimizeParams as PromptOptimizeParams,
  };
}
