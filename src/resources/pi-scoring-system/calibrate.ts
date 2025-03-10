// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CalibrateAPI from '../contracts/calibrate';

export class Calibrate extends APIResource {}

export interface ScoringSystemCalibrationStatus {
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
  calibrated_scoring_system?: ScoringSystemCalibrationStatus.CalibratedScoringSystem | null;
}

export namespace ScoringSystemCalibrationStatus {
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

export declare namespace Calibrate {
  export { type ScoringSystemCalibrationStatus as ScoringSystemCalibrationStatus };
}
