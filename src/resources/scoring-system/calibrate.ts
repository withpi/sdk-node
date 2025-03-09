// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CalibrateAPI from '../contracts/calibrate';

export class Calibrate extends APIResource {
  /**
   * Launches a Scoring System Calibration job
   */
  create(
    body: CalibrateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CalibrateCreateResponse> {
    return this._client.post('/scoring_system/calibrate', { body, ...options });
  }

  /**
   * Checks the status of a Scoring System Calibration job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<CalibrateRetrieveResponse> {
    return this._client.get(`/scoring_system/calibrate/${jobId}`, options);
  }

  /**
   * Lists the Scoring System Calibration Jobs owned by a user
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
   * Cancels a Scoring System Calibration job
   */
  cancel(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.delete(`/scoring_system/calibrate/${jobId}`, options);
  }

  /**
   * Opens a message stream about a Scoring System Calibration job
   */
  messages(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/scoring_system/calibrate/${jobId}/messages`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface CalibrateCreateResponse {
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
   * The calibrated scoring system
   */
  calibrated_scoring_system?: CalibrateCreateResponse.CalibratedScoringSystem | null;
}

export namespace CalibrateCreateResponse {
  /**
   * The calibrated scoring system
   */
  export interface CalibratedScoringSystem {
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
    dimensions?: Array<CalibratedScoringSystem.Dimension>;
    [k: string]: unknown;
  }

  export namespace CalibratedScoringSystem {
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
  state: CalibrateAPI.State;

  /**
   * The calibrated scoring system
   */
  calibrated_scoring_system?: CalibrateRetrieveResponse.CalibratedScoringSystem | null;
}

export namespace CalibrateRetrieveResponse {
  /**
   * The calibrated scoring system
   */
  export interface CalibratedScoringSystem {
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
    dimensions?: Array<CalibratedScoringSystem.Dimension>;
    [k: string]: unknown;
  }

  export namespace CalibratedScoringSystem {
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
    state: CalibrateAPI.State;

    /**
     * The calibrated scoring system
     */
    calibrated_scoring_system?: CalibrateListResponseItem.CalibratedScoringSystem | null;
  }

  export namespace CalibrateListResponseItem {
    /**
     * The calibrated scoring system
     */
    export interface CalibratedScoringSystem {
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
      dimensions?: Array<CalibratedScoringSystem.Dimension>;
      [k: string]: unknown;
    }

    export namespace CalibratedScoringSystem {
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

export type CalibrateMessagesResponse = string;

export interface CalibrateCreateParams {
  /**
   * The scoring system to calibrate
   */
  scoring_system: CalibrateCreateParams.ScoringSystem;

  /**
   * Rated examples to use when calibrating the scoring system. Must specify either
   * the examples or the preference examples
   */
  examples?: Array<CalibrateCreateParams.Example> | null;

  /**
   * Preference examples to use when calibrating the scoring system. Must specify
   * either the examples or preference examples
   */
  preference_examples?: Array<CalibrateCreateParams.PreferenceExample> | null;

  /**
   * The strategy to use to calibrate the scoring system. FULL would take longer than
   * LITE but may result in better result.
   */
  strategy?: 'LITE' | 'FULL';
}

export namespace CalibrateCreateParams {
  /**
   * The scoring system to calibrate
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

export interface CalibrateListParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

export declare namespace Calibrate {
  export {
    type CalibrateCreateResponse as CalibrateCreateResponse,
    type CalibrateRetrieveResponse as CalibrateRetrieveResponse,
    type CalibrateListResponse as CalibrateListResponse,
    type CalibrateCancelResponse as CalibrateCancelResponse,
    type CalibrateMessagesResponse as CalibrateMessagesResponse,
    type CalibrateCreateParams as CalibrateCreateParams,
    type CalibrateListParams as CalibrateListParams,
  };
}
