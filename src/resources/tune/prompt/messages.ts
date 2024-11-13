// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Messages extends APIResource {
  /**
   * Streams messages from a prompt optimization job, separated by newlines. The full
   * job object can be retrieved from the /tune/prompt/{job_id} endpoint.
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/tune/prompt/${jobId}/messages`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
