// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Calibrate extends APIResource {}

export type CalibrationStrategy = 'LITE' | 'FULL';

/**
 * An labeled example for training or evaluation
 */
export interface SDKLabeledExample {
  /**
   * The input to LLM
   */
  llm_input: string;

  /**
   * The output to evaluate
   */
  llm_output: string;

  /**
   * The rating of the llm_output given the llm_input
   */
  rating: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree';
}

/**
 * An preference example for training or evaluation
 */
export interface SDKPreferenceExample {
  /**
   * The chosen output in corresponding to the llm_input.
   */
  chosen: string;

  /**
   * The input to LLM
   */
  llm_input: string;

  /**
   * The rejected output in corresponding to the llm_input.
   */
  rejected: string;
}

export type State = 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

export declare namespace Calibrate {
  export {
    type CalibrationStrategy as CalibrationStrategy,
    type SDKLabeledExample as SDKLabeledExample,
    type SDKPreferenceExample as SDKPreferenceExample,
    type State as State,
  };
}
