// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Inference extends APIResource {
  /**
   * Runs LLM inference, returning a response
   */
  run(body: InferenceRunParams, options?: Core.RequestOptions): Core.APIPromise<InferenceRunResponse> {
    return this._client.post('/inference/run', { body, ...options });
  }
}

export interface InferenceRunResponse {
  /**
   * The structured output, if the model returns structure
   */
  structured: unknown | null;

  /**
   * The generated text, if the model returns text
   */
  text: string | null;
}

export type InferenceRunParams = InferenceRunParams.LlmInput;

export namespace InferenceRunParams {
  export interface LlmInput {
    /**
     * The input to run inference on
     */
    llm_input: string | Record<string, string>;

    /**
     * The model to use for generating responses
     */
    model_id: 'gpt_4o_mini_agent' | 'mock_agent';
  }
}

export declare namespace Inference {
  export { type InferenceRunResponse as InferenceRunResponse, type InferenceRunParams as InferenceRunParams };
}
