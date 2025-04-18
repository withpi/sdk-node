// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * DataGenerationStatus is the result of a data generation job.
 */
export interface DataGenerationStatus {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * The generated data. Can be present even if the state is not done/error as it is
   * streamed.
   */
  data?: Array<string> | null;
}

/**
 * An example for training or evaluation
 */
export interface Example {
  /**
   * The input to LLM
   */
  llm_input: string;

  /**
   * The output to evaluate
   */
  llm_output: string;
}

export type ExplorationMode = 'CONSERVATIVE' | 'BALANCED' | 'CREATIVE' | 'ADVENTUROUS';

export interface QueryClassifierResult {
  prediction: string;

  probabilities: Array<QueryClassifierResult.Probability>;

  query: string;
}

export namespace QueryClassifierResult {
  export interface Probability {
    label: string;

    score: number;
  }
}

/**
 * An input query and its associated fanout queries
 */
export interface QueryFanoutExample {
  /**
   * The list of fanout queries associated with the input
   */
  fanout_queries: Array<string>;

  /**
   * The input query that the fanout queries are based on.
   */
  query: string;
}

export interface Question {
  /**
   * The yes/no question to ask Pi Scoring System.
   */
  question: string;

  /**
   * The ID of the custom model associated with the CUSTOM_MODEL_SCORER scoring_type.
   */
  custom_model_id?: string | null;

  /**
   * The label of the question.
   */
  label?: string | null;

  /**
   * The learned parameters for the scoring question define a piecewise linear
   * interpolation over the range [0, 1]. This transformation adjusts the score
   * distribution to better match your preferences—for example, by pulling scores
   * below 0.5 closer to 0, and scores above 0.5 closer to 1.
   */
  parameters?: Array<number> | null;

  /**
   * The PYTHON code associated with the PYTHON_CODE scoring_type.
   */
  python_code?: string | null;

  /**
   * The type of scoring performed for this question.
   */
  scoring_type?: 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER' | null;

  /**
   * The tag or the group to which this question belongs.
   */
  tag?: string | null;

  /**
   * The weight of the question which reflects its relative importance. The sum of
   * question weights will be normalized to one internally. A higher weight counts
   * for more when aggregating this subdimension into the parent dimension.
   */
  weight?: number | null;
}

export interface ScoringDimension {
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
  sub_dimensions: Array<ScoringSubDimension>;

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

export interface ScoringSpec {
  /**
   * The application description
   */
  description: string;

  /**
   * The dimensions of the scoring spec
   */
  dimensions: Array<ScoringDimension>;

  /**
   * The name of the scoring spec
   */
  name: string;

  [k: string]: unknown;
}

export interface ScoringSpecCalibrationStatus {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * The calibrated scoring spec
   */
  calibrated_scoring_spec?: Array<Question> | null;
}

export interface ScoringSubDimension {
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

export interface ScoringSystemMetrics {
  /**
   * @deprecated The score components for each dimension
   */
  dimension_scores: Record<string, ScoringSystemMetrics.DimensionScores>;

  /**
   * The score components for each question
   */
  question_scores: Record<string, number>;

  /**
   * The total score of the scoring spec
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

/**
 * SyntheticDataStatus is the result of a synthetic data generation job.
 */
export interface SyntheticDataStatus {
  /**
   * Detailed status of the job
   */
  detailed_status: Array<string>;

  /**
   * The job id
   */
  job_id: string;

  /**
   * Current state of the job
   */
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

  /**
   * The generated synthetic data. Can be present even if the state is not done/error
   * as it is streamed.
   */
  data?: Array<Example> | null;
}
