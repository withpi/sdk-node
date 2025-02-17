// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Completions extends APIResource {
  /**
   * Issue a completion request to the model. The model must be loaded first.
   */
  list(jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/model/sft/${jobId}/completions`, options);
  }
}

export type CompletionListResponse = unknown;

export declare namespace Completions {
  export { type CompletionListResponse as CompletionListResponse };
}
