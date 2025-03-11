// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Calibrate extends APIResource {
  /**
   * Checks the status of a Scoring Spec Calibration job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<CalibrateRetrieveResponse> {
    return this._client.get(`/scoring_system/calibrate/${jobId}`, options);
  }

  /**
   * Lists the Scoring Spec Calibration Jobs owned by a user
   */
  list(query?: CalibrateListParams, options?: Core.RequestOptions): Core.APIPromise<CalibrateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CalibrateListResponse>;
  list(
    query: CalibrateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CalibrateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/scoring_system/calibrate', { query, ...options });
  }

  /**
   * Cancels a Scoring Spec Calibration job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/scoring_system/calibrate/${jobId}`, options);
  }

  /**
   * Starts a Scoring Spec Calibration job
   */
  startJob(
    body: CalibrateStartJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CalibrateStartJobResponse> {
    return this._client.post('/scoring_system/calibrate', { body, ...options });
  }

  /**
   * Opens a message stream about a Scoring Spec Calibration job
   */
  streamMessages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/scoring_system/calibrate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface CalibrateRetrieveResponse {
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
  calibrated_scoring_spec?: CalibrateRetrieveResponse.CalibratedScoringSpec | null;
}

export namespace CalibrateRetrieveResponse {
  /**
   * The calibrated scoring spec
   */
  export interface CalibratedScoringSpec {
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
    dimensions?: Array<CalibratedScoringSpec.Dimension>;
    [k: string]: unknown;
  }

  export namespace CalibratedScoringSpec {
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

export type CalibrateListResponse = Array<CalibrateListResponse.CalibrateListResponseItem>;

export namespace CalibrateListResponse {
  export interface CalibrateListResponseItem {
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
    calibrated_scoring_spec?: CalibrateListResponseItem.CalibratedScoringSpec | null;
  }

  export namespace CalibrateListResponseItem {
    /**
     * The calibrated scoring spec
     */
    export interface CalibratedScoringSpec {
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
      dimensions?: Array<CalibratedScoringSpec.Dimension>;
      [k: string]: unknown;
    }

    export namespace CalibratedScoringSpec {
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
}

export type CalibrateCancelResponse = string;

export interface CalibrateStartJobResponse {
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
  calibrated_scoring_spec?: CalibrateStartJobResponse.CalibratedScoringSpec | null;
}

export namespace CalibrateStartJobResponse {
  /**
   * The calibrated scoring spec
   */
  export interface CalibratedScoringSpec {
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
    dimensions?: Array<CalibratedScoringSpec.Dimension>;
    [k: string]: unknown;
  }

  export namespace CalibratedScoringSpec {
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

export type CalibrateStreamMessagesResponse = string;

export interface CalibrateListParams {
  /**
   * Filter jobs by state
   */
  state?: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR' | 'CANCELLED' | null;
}

export interface CalibrateStartJobParams {
  /**
   * The scoring spec to calibrate
   */
  scoring_spec: CalibrateStartJobParams.ScoringSpec;

  /**
   * Rated examples to use when calibrating the scoring spec. Must specify either the
   * examples or the preference examples
   */
  examples?: Array<CalibrateStartJobParams.Example> | null;

  /**
   * Preference examples to use when calibrating the scoring spec. Must specify
   * either the examples or preference examples
   */
  preference_examples?: Array<CalibrateStartJobParams.PreferenceExample> | null;

  /**
   * The strategy to use to calibrate the scoring spec. FULL would take longer than
   * LITE but may result in better result.
   */
  strategy?: 'LITE' | 'FULL';
}

export namespace CalibrateStartJobParams {
  /**
   * The scoring spec to calibrate
   */
  export interface ScoringSpec {
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
    dimensions?: Array<ScoringSpec.Dimension>;
    [k: string]: unknown;
  }

  export namespace ScoringSpec {
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

  /**
   * An labeled example for training or evaluation
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

    /**
     * The rating of the llm_output given the llm_input
     */
    rating: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree';
  }

  /**
   * An preference example for training or evaluation
   */
  export interface PreferenceExample {
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
}

export declare namespace Calibrate {
  export {
    type CalibrateRetrieveResponse as CalibrateRetrieveResponse,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateStartJobResponse as CalibrateStartJobResponse,
    type CalibrateStreamMessagesResponse as CalibrateStreamMessagesResponse,
    type CalibrateListParams as CalibrateListParams,
    type CalibrateStartJobParams as CalibrateStartJobParams,
  };
}
