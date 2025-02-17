// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Messages extends APIResource {
  /**
   * Streams messages from the synthetic data generation job
   */
  list(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type MessageListResponse = string;

export declare namespace Messages {
  export { type MessageListResponse as MessageListResponse };
}
