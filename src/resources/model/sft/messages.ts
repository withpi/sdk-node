// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Messages extends APIResource {
  /**
   * Streams messages from a model SFT tuning job
   */
  stream(jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/model/sft/${jobId}/messages`, options);
  }
}

export type MessageStreamResponse = unknown;

export declare namespace Messages {
  export { type MessageStreamResponse as MessageStreamResponse };
}
