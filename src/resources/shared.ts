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
   * [DEPRECATED] Indicates whether a lower score represents a better outcome (e.g.,
   * fewer errors, less toxicity)
   */
  is_lower_score_desirable?: boolean | null;

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
   * [DEPRECATED] Remapping spec to modulate the scores returned by Pi Scorer
   */
  remap_spec?: 'NEUTRAL' | 'STRICT' | 'LENIENT' | { [key: string]: number } | null;

  /**
   * The type of scoring performed for this question. Default: PI_SCORER.
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

export interface ScoringSystemMetrics {
  /**
   * The score components for each question
   */
  question_scores: { [key: string]: number };

  /**
   * The total score of the scoring spec
   */
  total_score: number;
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
