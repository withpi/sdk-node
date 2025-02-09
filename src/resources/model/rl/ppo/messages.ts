// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Messages extends APIResource {
  /**
   * Streams messages from the RL PPO job
   */
  stream(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/rl/ppo/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type MessageStreamResponse = string;

export declare namespace Messages {
  export { type MessageStreamResponse as MessageStreamResponse };
}
