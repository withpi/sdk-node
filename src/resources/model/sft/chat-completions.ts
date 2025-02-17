// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class ChatCompletions extends APIResource {
  /**
   * Issue a chat completion request to the model. The model must be loaded first.
   */
  list(jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/model/sft/${jobId}/chat/completions`, options);
  }
}

export type ChatCompletionListResponse = unknown;

export declare namespace ChatCompletions {
  export { type ChatCompletionListResponse as ChatCompletionListResponse };
}
