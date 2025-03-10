// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  dimensions?: Array<SDKDimension>;
  [k: string]: unknown;
}

export interface ScoringSystemMetrics {
  /**
   * The score components for each dimension
   */
  dimension_scores: Record<string, ScoringSystemMetrics.DimensionScores>;

  /**
   * The total score of the scoring system
   */
  total_score: number;
}

export namespace ScoringSystemMetrics {
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

export interface SDKContract {
  /**
   * The description of the contract
   */
  description: string;

  /**
   * The name of the contract
   */
  name: string;

  /**
   * The dimensions of the contract
   */
  dimensions?: Array<SDKDimension>;
  [k: string]: unknown;
}

export interface SDKDimension {
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
  sub_dimensions: Array<SDKDimension.SubDimension>;

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

export namespace SDKDimension {
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
