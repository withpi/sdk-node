// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Inference extends APIResource {
  /**
   * Runs inference, returning a response
   */
  run(body: InferenceRunParams, options?: Core.RequestOptions): Core.APIPromise<Shared.LlmResponse> {
    return this._client.post('/inference/run', { body, ...options });
  }
}

export type InferenceRunParams = string | Record<string, string>;

export declare namespace Inference {
  export { type InferenceRunParams as InferenceRunParams };
}
