// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Contract {
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
  dimensions?: Array<Dimension>;
  [k: string]: unknown;
}

export interface ContractCalibrationStatus {
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
  state: State;

  /**
   * The calibrated contract
   */
  calibrated_contract?: Contract | null;
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
  state: State;

  /**
   * The generated data. Can be present even if the state is not done/error as it is
   * streamed.
   */
  data?: Array<string> | null;
}

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
  sub_dimensions: Array<SubDimension>;

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

export type DimensionScoringType = 'PI_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

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

export type FinetuningBaseModel = 'LLAMA_3.2_3B' | 'LLAMA_3.1_8B';

export interface LoraConfig {
  /**
   * The number of dimensions in the low-rank decomposition of the weight updates.
   */
  lora_rank?: 'R_16' | 'R_32' | 'R_64';
}

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
  state: State;

  /**
   * The optimized prompt messages in the OpenAI message format with the jinja
   * {{ input }} variable for the next user prompt
   */
  optimized_prompt_messages?: Array<Record<string, string>>;
}

export interface QueryClassificationResponse {
  results: Array<QueryClassificationResponse.Result>;
}

export namespace QueryClassificationResponse {
  export interface Result {
    prediction: string;

    probabilities: Array<Result.Probability>;

    query: string;
  }

  export namespace Result {
    export interface Probability {
      label: string;

      score: number;
    }
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

/**
 * RlGrpoStatus is the status of a RL PPO job.
 */
export interface RlGrpoStatus {
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
  state: State;

  /**
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<TrainedModel> | null;
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
  state: State;

  /**
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<TrainedModel> | null;
}

export type State = 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED';

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
  scoring_type: DimensionScoringType;

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
  state: State;

  /**
   * The generated synthetic data. Can be present even if the state is not done/error
   * as it is streamed.
   */
  data?: Array<Example> | null;
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
   * Whether the model is loaded in the serving system
   */
  is_loaded: boolean;

  /**
   * The serving id of the trained model within this Job
   */
  serving_id: number;

  /**
   * The training step
   */
  step: number;
}
