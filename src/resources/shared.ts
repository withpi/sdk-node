// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * ClassificationStatus is the status of a classification job.
 */
export interface ClassificationStatus {
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
   * A list of trained classification models.
   */
  trained_models?: Array<TrainedModel> | null;
}

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

export type ExplorationMode = 'CONSERVATIVE' | 'BALANCED' | 'CREATIVE' | 'ADVENTUROUS';

/**
 * The optimized_prompt_messages field is an empty list unless the state is done.
 */
export interface PromptOptimizationStatus {
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
   * The optimized prompt messages in the OpenAI message format with the jinja
   * {{ input }} variable for the next user prompt
   */
  optimized_prompt_messages?: Array<Record<string, string>>;
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

/**
 * An example for training or evaluation
 */
export interface SDKExample {
  /**
   * The input to LLM
   */
  llm_input: string;

  /**
   * The output to evaluate
   */
  llm_output: string;
}

/**
 * SftStatus is the status of a SFT job.
 */
export interface SftStatus {
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
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<TrainedModel> | null;
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
  data?: Array<SDKExample> | null;
}

export interface TrainedModel {
  /**
   * The PI contract score of the eval set what isn't used in training
   */
  contract_score: number;

  /**
   * The training epoch
   */
  epoch: number;

  /**
   * The evaluation loss
   */
  eval_loss: number;

  /**
   * The serving id of the trained model within this Job
   */
  serving_id: number;

  /**
   * State of the model in the serving system
   */
  serving_state: 'UNLOADED' | 'LOADING' | 'SERVING';

  /**
   * The training step
   */
  step: number;
}
