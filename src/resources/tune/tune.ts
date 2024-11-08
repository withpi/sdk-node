// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as PromptAPI from './prompt';
import { Prompt, PromptOptimizeParams } from './prompt';

export class Tune extends APIResource {
  prompt: PromptAPI.Prompt = new PromptAPI.Prompt(this._client);
}

export interface OptimizationStatus {
  /**
   * The optimized contract. Absent unless state is done
   */
  contract: Shared.Contract | null;

  /**
   * The job id
   */
  job_id: number;

  /**
   * Current state of the job
   */
  state: 'running' | 'done' | 'error';
}

Tune.Prompt = Prompt;

export declare namespace Tune {
  export { type OptimizationStatus as OptimizationStatus };

  export { Prompt as Prompt, type PromptOptimizeParams as PromptOptimizeParams };
}
