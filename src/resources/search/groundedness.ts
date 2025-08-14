// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Groundedness extends APIResource {
  /**
   * Checks if the generated output is grounded in the provided context.
   */
  check(
    body: GroundednessCheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroundednessCheckResponse> {
    return this._client.post('/search/groundedness/check', { body, ...options });
  }
}

export interface GroundednessCheckResponse {
  hallucinations: Array<GroundednessCheckResponse.Hallucination>;

  score: number;
}

export namespace GroundednessCheckResponse {
  export interface Hallucination {
    /**
     * What claim is being made in the text that is incorrect
     */
    claim: string;

    hallucination_type:
      | 'Evident conflict'
      | 'Subtle conflict'
      | 'Evident introduction of baseless information'
      | 'Subtle introduction of baseless information';

    /**
     * The reasoning for the hallucination
     */
    reasoning: string;

    /**
     * A quote of the text that is not supported by the context (select the minimal
     * text that is hallucinated)
     */
    text: string;

    /**
     * Why is the claim incorrect?
     */
    why_incorrect: string;
  }
}

export interface GroundednessCheckParams {
  /**
   * The context to check groundedness against.
   */
  context: string;

  /**
   * The generated output to check for groundedness.
   */
  output: string;

  /**
   * The processing strategy to use for the groundedness check.
   */
  processing_strategy?: 'speed_optimized' | 'balanced' | 'quality_optimized';

  /**
   * The optional query that generated the output.
   */
  query?: string;
}

export declare namespace Groundedness {
  export {
    type GroundednessCheckResponse as GroundednessCheckResponse,
    type GroundednessCheckParams as GroundednessCheckParams,
  };
}
