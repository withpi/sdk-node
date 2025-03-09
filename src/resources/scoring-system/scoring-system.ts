// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CalibrateAPI from './calibrate';
import {
  Calibrate,
  CalibrateCancelResponse,
  CalibrateCreateParams,
  CalibrateCreateResponse,
  CalibrateListParams,
  CalibrateListResponse,
  CalibrateMessagesResponse,
  CalibrateRetrieveResponse,
} from './calibrate';

export class ScoringSystem extends APIResource {
  calibrate: CalibrateAPI.Calibrate = new CalibrateAPI.Calibrate(this._client);

  /**
   * Generates dimensions for a scoring system which will be used to evaluate it
   */
  generateDimensions(
    body: ScoringSystemGenerateDimensionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScoringSystemGenerateDimensionsResponse> {
    return this._client.post('/scoring_system/generate_dimensions', { body, ...options });
  }

  /**
   * Read a scoring system from Huggingface dataset
   */
  readFromHf(
    body: ScoringSystemReadFromHfParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScoringSystemReadFromHfResponse> {
    return this._client.post('/scoring_system/read_from_hf', { body, ...options });
  }

  /**
   * Scores a scoring system based on the provided input and output
   */
  score(
    body: ScoringSystemScoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScoringSystemScoreResponse> {
    return this._client.post('/scoring_system/score', { body, ...options });
  }
}

export interface ScoringSystemGenerateDimensionsResponse {
  /**
   * The application description
   */
  description: string;

  /**
   * The name of the scoring system
   */
  name: string;

  /**
   * The dimensions of the scoring system
   */
  dimensions?: Array<ScoringSystemGenerateDimensionsResponse.Dimension>;
  [k: string]: unknown;
}

export namespace ScoringSystemGenerateDimensionsResponse {
  export interface Dimension {
    /**
     * The description of the dimension
     */
    description: string;

    /**
     * The label of the dimension
     */
    label: string;

    /**
     * The sub dimensions of the dimension
     */
    sub_dimensions: Array<Dimension.SubDimension>;

    /**
     * The learned parameters for the scoring method. This represents piecewise linear
     * interpolation between [0, 1].
     */
    parameters?: Array<number> | null;

    /**
     * The weight of the dimension The sum of dimension weights will be normalized to
     * one internally. A higher weight counts for more when aggregating this dimension
     * is aggregated into the final score.
     */
    weight?: number | null;
    [k: string]: unknown;
  }

  export namespace Dimension {
    export interface SubDimension {
      /**
       * The description of the dimension
       */
      description: string;

      /**
       * The label of the dimension
       */
      label: string;

      /**
       * The type of scoring performed for this dimension
       */
      scoring_type: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

      /**
       * The ID of the custom model to use for scoring. Only relevant for scoring_type of
       * CUSTOM_MODEL_SCORER
       */
      custom_model_id?: string | null;

      /**
       * The learned parameters for the scoring method. This represents piecewise linear
       * interpolation between [0, 1].
       */
      parameters?: Array<number> | null;

      /**
       * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
       */
      python_code?: string | null;

      /**
       * The weight of the subdimension. The sum of subdimension weights will be
       * normalized to one internally. A higher weight counts for more when aggregating
       * this subdimension into the parent dimension.
       */
      weight?: number | null;
      [k: string]: unknown;
    }
  }
}

export interface ScoringSystemReadFromHfResponse {
  /**
   * The application description
   */
  description: string;

  /**
   * The name of the scoring system
   */
  name: string;

  /**
   * The dimensions of the scoring system
   */
  dimensions?: Array<ScoringSystemReadFromHfResponse.Dimension>;
  [k: string]: unknown;
}

export namespace ScoringSystemReadFromHfResponse {
  export interface Dimension {
    /**
     * The description of the dimension
     */
    description: string;

    /**
     * The label of the dimension
     */
    label: string;

    /**
     * The sub dimensions of the dimension
     */
    sub_dimensions: Array<Dimension.SubDimension>;

    /**
     * The learned parameters for the scoring method. This represents piecewise linear
     * interpolation between [0, 1].
     */
    parameters?: Array<number> | null;

    /**
     * The weight of the dimension The sum of dimension weights will be normalized to
     * one internally. A higher weight counts for more when aggregating this dimension
     * is aggregated into the final score.
     */
    weight?: number | null;
    [k: string]: unknown;
  }

  export namespace Dimension {
    export interface SubDimension {
      /**
       * The description of the dimension
       */
      description: string;

      /**
       * The label of the dimension
       */
      label: string;

      /**
       * The type of scoring performed for this dimension
       */
      scoring_type: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

      /**
       * The ID of the custom model to use for scoring. Only relevant for scoring_type of
       * CUSTOM_MODEL_SCORER
       */
      custom_model_id?: string | null;

      /**
       * The learned parameters for the scoring method. This represents piecewise linear
       * interpolation between [0, 1].
       */
      parameters?: Array<number> | null;

      /**
       * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
       */
      python_code?: string | null;

      /**
       * The weight of the subdimension. The sum of subdimension weights will be
       * normalized to one internally. A higher weight counts for more when aggregating
       * this subdimension into the parent dimension.
       */
      weight?: number | null;
      [k: string]: unknown;
    }
  }
}

export interface ScoringSystemScoreResponse {
  /**
   * The score components for each dimension
   */
  dimension_scores: Record<string, ScoringSystemScoreResponse.DimensionScores>;

  /**
   * The total score of the scoring system
   */
  total_score: number;
}

export namespace ScoringSystemScoreResponse {
  export interface DimensionScores {
    /**
     * The score components for each subdimension
     */
    subdimension_scores: Record<string, number>;

    /**
     * The total score of the dimension
     */
    total_score: number;
  }
}

export interface ScoringSystemGenerateDimensionsParams {
  /**
   * The application description to generate a scoring system for.
   */
  application_description: string;

  /**
   * If true, try to generate python code for sub-dimensions with structured
   * evaluation
   */
  try_auto_generating_python_code?: boolean;
}

export interface ScoringSystemReadFromHfParams {
  /**
   * Huggingface scoring system name e.g. withpi/my_scoring_system. You need to
   * provide the hf_token if the scoring system dataset is not public or not own by
   * the withpi organization.
   */
  hf_scoring_system_name: string;

  /**
   * Huggingface token to use if you want to read to your own HF organization
   */
  hf_token?: string | null;
}

export interface ScoringSystemScoreParams {
  /**
   * The input to score
   */
  llm_input: string;

  /**
   * The output to score
   */
  llm_output: string;

  /**
   * The scoring system to score
   */
  scoring_system: ScoringSystemScoreParams.ScoringSystem;
}

export namespace ScoringSystemScoreParams {
  /**
   * The scoring system to score
   */
  export interface ScoringSystem {
    /**
     * The application description
     */
    description: string;

    /**
     * The name of the scoring system
     */
    name: string;

    /**
     * The dimensions of the scoring system
     */
    dimensions?: Array<ScoringSystem.Dimension>;
    [k: string]: unknown;
  }

  export namespace ScoringSystem {
    export interface Dimension {
      /**
       * The description of the dimension
       */
      description: string;

      /**
       * The label of the dimension
       */
      label: string;

      /**
       * The sub dimensions of the dimension
       */
      sub_dimensions: Array<Dimension.SubDimension>;

      /**
       * The learned parameters for the scoring method. This represents piecewise linear
       * interpolation between [0, 1].
       */
      parameters?: Array<number> | null;

      /**
       * The weight of the dimension The sum of dimension weights will be normalized to
       * one internally. A higher weight counts for more when aggregating this dimension
       * is aggregated into the final score.
       */
      weight?: number | null;
      [k: string]: unknown;
    }

    export namespace Dimension {
      export interface SubDimension {
        /**
         * The description of the dimension
         */
        description: string;

        /**
         * The label of the dimension
         */
        label: string;

        /**
         * The type of scoring performed for this dimension
         */
        scoring_type: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

        /**
         * The ID of the custom model to use for scoring. Only relevant for scoring_type of
         * CUSTOM_MODEL_SCORER
         */
        custom_model_id?: string | null;

        /**
         * The learned parameters for the scoring method. This represents piecewise linear
         * interpolation between [0, 1].
         */
        parameters?: Array<number> | null;

        /**
         * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
         */
        python_code?: string | null;

        /**
         * The weight of the subdimension. The sum of subdimension weights will be
         * normalized to one internally. A higher weight counts for more when aggregating
         * this subdimension into the parent dimension.
         */
        weight?: number | null;
        [k: string]: unknown;
      }
    }
  }
}

ScoringSystem.Calibrate = Calibrate;

export declare namespace ScoringSystem {
  export {
    type ScoringSystemGenerateDimensionsResponse as ScoringSystemGenerateDimensionsResponse,
    type ScoringSystemReadFromHfResponse as ScoringSystemReadFromHfResponse,
    type ScoringSystemScoreResponse as ScoringSystemScoreResponse,
    type ScoringSystemGenerateDimensionsParams as ScoringSystemGenerateDimensionsParams,
    type ScoringSystemReadFromHfParams as ScoringSystemReadFromHfParams,
    type ScoringSystemScoreParams as ScoringSystemScoreParams,
  };

  export {
    Calibrate as Calibrate,
    type CalibrateCreateResponse as CalibrateCreateResponse,
    type CalibrateRetrieveResponse as CalibrateRetrieveResponse,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateMessagesResponse as CalibrateMessagesResponse,
    type CalibrateCreateParams as CalibrateCreateParams,
    type CalibrateListParams as CalibrateListParams,
  };
}
