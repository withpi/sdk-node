// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CalibrateAPI from '../../contracts/calibrate';
import * as ClassifierAPI from '../classifier';

export class Grpo extends APIResource {
  /**
   * Checks the status of a RL GRPO job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<RlGrpoStatus> {
    return this._client.get(`/model/rl/grpo/${jobId}`, options);
  }

  /**
   * Lists the RL GRPO Jobs owned by a user
   */
  list(query?: GrpoListParams, options?: Core.RequestOptions): Core.APIPromise<GrpoListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GrpoListResponse>;
  list(
    query: GrpoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GrpoListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/model/rl/grpo', { query, ...options });
  }

  /**
   * Cancels a RL GRPO job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/model/rl/grpo/${jobId}`, options);
  }

  /**
   * Allows downloading a RL GRPO job
   */
  download(
    jobId: string,
    params: GrpoDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { serving_id } = params;
    return this._client.post(`/model/rl/grpo/${jobId}/download`, { query: { serving_id }, ...options });
  }

  /**
   * Loads a RL GRPO model into serving for a limited period of time
   */
  load(jobId: string, options?: Core.RequestOptions): Core.APIPromise<RlGrpoStatus> {
    return this._client.post(`/model/rl/grpo/${jobId}/load`, options);
  }

  /**
   * Launches a RL GRPO job
   */
  startJob(body: GrpoStartJobParams, options?: Core.RequestOptions): Core.APIPromise<RlGrpoStatus> {
    return this._client.post('/model/rl/grpo', { body, ...options });
  }

  /**
   * Opens a message stream about a RL GRPO job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/model/rl/grpo/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface LoraConfig {
  /**
   * The number of dimensions in the low-rank decomposition of the weight updates.
   */
  lora_rank?: 'R_16' | 'R_32' | 'R_64';
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
  trained_models?: Array<ClassifierAPI.TrainedModel> | null;
}

export type TextGenerationBaseModel = 'LLAMA_3.2_3B' | 'LLAMA_3.1_8B';

export type GrpoListResponse = Array<RlGrpoStatus>;

export type GrpoCancelResponse = string;

export type GrpoDownloadResponse = string;

export type GrpoStreamMessagesResponse = string;

export interface GrpoListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export interface GrpoDownloadParams {
  serving_id: number;
}

export interface GrpoStartJobParams {
  /**
   * The base model to start the RL tunning process
   */
  base_rl_model: TextGenerationBaseModel;

  /**
   * Examples to use in the RL tuning process
   */
  examples: Array<GrpoStartJobParams.Example>;

  /**
   * GRPO learning rate
   */
  learning_rate: number;

  /**
   * The LoRA configuration.
   */
  lora_config: LoraConfig;

  /**
   * GRPO number of train epochs
   */
  num_train_epochs: number;

  /**
   * The scoring system to use in the GRPO tuning process
   */
  scorer: GrpoStartJobParams.Scorer;

  /**
   * A custom system prompt to use during the RL tuning process
   */
  system_prompt: string | null;
}

export namespace GrpoStartJobParams {
  /**
   * An example for RL training
   */
  export interface Example {
    /**
     * The input prompt to LLM for the RL training process
     */
    llm_input: string;
  }

  /**
   * The scoring system to use in the GRPO tuning process
   */
  export interface Scorer {
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
    dimensions?: Array<Scorer.Dimension>;
    [k: string]: unknown;
  }

  export namespace Scorer {
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

export declare namespace Grpo {
  export {
    type LoraConfig as LoraConfig,
    type RlGrpoStatus as RlGrpoStatus,
    type TextGenerationBaseModel as TextGenerationBaseModel,
    type GrpoListResponse as GrpoListResponse,
    type GrpoCancelResponse as GrpoCancelResponse,
    type GrpoDownloadResponse as GrpoDownloadResponse,
    type GrpoStreamMessagesResponse as GrpoStreamMessagesResponse,
    type GrpoListParams as GrpoListParams,
    type GrpoDownloadParams as GrpoDownloadParams,
    type GrpoStartJobParams as GrpoStartJobParams,
  };
}
