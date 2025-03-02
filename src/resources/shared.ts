// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as CalibrateAPI from './contracts/calibrate';

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
}

export interface ContractCalibrationStatus {
  /**
   * The calibrated contract
   */
  calibrated_contract: Contract | null;

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
  state: CalibrateAPI.State;
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
  state: CalibrateAPI.State;

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
   * If `action_dimension` is set, this node is a part of short-circuit subtree. If
   * the score of the action_dimension is > 0.5, then evaluate the node and return
   * the actual score. If it is <= 0.5 return -1. The higher level node will ignore
   * the -1 scores and thus we achieve the short-circuit behavior.
   */
  action_dimension?: SDKActionDimension | null;

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
   * The optimized prompt messages in the OpenAI message format with the jinja
   * {{ input }} variable for the next user prompt
   */
  optimized_prompt_messages: Array<Record<string, string>>;

  /**
   * Current state of the job
   */
  state: CalibrateAPI.State;
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
  state: CalibrateAPI.State;

  /**
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<TrainedModel> | null;
}

export interface SDKActionDimension {
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
   * If `action_on_low_score = True`, the node emits the real value if action
   * dimension score is <= 0.5 and it returns -1 otherwise.
   */
  action_on_low_score?: boolean | null;

  /**
   * The ID of the custom model to use for scoring. Only relevant for scoring_type of
   * CUSTOM_MODEL_SCORER
   */
  custom_model_id?: string | null;

  /**
   * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
   */
  python_code?: string | null;
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
  dimensions?: Array<Dimension>;
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

export type SDKExplorationMode = 'CONSERVATIVE' | 'BALANCED' | 'CREATIVE' | 'ADVENTUROUS';

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
  state: CalibrateAPI.State;

  /**
   * A list of trained models selected based on the PI Contract score.
   */
  trained_models?: Array<TrainedModel> | null;
}

export type State = 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';

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
   * If `action_dimension` is set, this node is a part of short-circuit subtree. If
   * the score of the action_dimension is > 0.5, then evaluate the node and return
   * the actual score. If it is <= 0.5 return -1. The higher level node will ignore
   * the -1 scores and thus we achieve the short-circuit behavior.
   */
  action_dimension?: SDKActionDimension | null;

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
  state: CalibrateAPI.State;

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
