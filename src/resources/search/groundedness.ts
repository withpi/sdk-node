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
    explanation: string;

    output_text: string;
  }
}

export interface GroundednessCheckParams {
  /**
   * The context to check groundedness against. Must be < 15,000 characters.
   */
  context: string;

  /**
   * The generated output to check for groundedness. Must be < 15,000 characters.
   */
  output: string;

  /**
   * The processing strategy to use for the groundedness check.
   */
  processing_strategy?: 'speed_optimized' | 'balanced' | 'quality_optimized';

  /**
   * The optional query that generated the output. Must be < 2,000 characters.
   */
  query?: string;
}

export declare namespace Groundedness {
  export {
    type GroundednessCheckResponse as GroundednessCheckResponse,
    type GroundednessCheckParams as GroundednessCheckParams,
  };
}
