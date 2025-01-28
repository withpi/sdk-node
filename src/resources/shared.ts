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
  action_dimension?: Dimension.ActionDimension | null;

  /**
   * The weight of the dimension The sum of dimension weights will be normalized to
   * one internally. A higher weight counts for more when aggregating this dimension
   * is aggregated into the final score.
   */
  weight?: number | null;
}

export namespace Dimension {
  /**
   * If `action_dimension` is set, this node is a part of short-circuit subtree. If
   * the score of the action_dimension is > 0.5, then evaluate the node and return
   * the actual score. If it is <= 0.5 return -1. The higher level node will ignore
   * the -1 scores and thus we achieve the short-circuit behavior.
   */
  export interface ActionDimension {
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
    scoring_type: 'PI_SCORER' | 'HUGGINGFACE_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

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
     * The URL of the HuggingFace model to use for scoring. Only relevant for
     * scoring_type of HUGGINGFACE_SCORER
     */
    huggingface_url?: string | null;

    /**
     * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
     */
    python_code?: string | null;
  }
}

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
  scoring_type: 'PI_SCORER' | 'HUGGINGFACE_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

  /**
   * If `action_dimension` is set, this node is a part of short-circuit subtree. If
   * the score of the action_dimension is > 0.5, then evaluate the node and return
   * the actual score. If it is <= 0.5 return -1. The higher level node will ignore
   * the -1 scores and thus we achieve the short-circuit behavior.
   */
  action_dimension?: SubDimension.ActionDimension | null;

  /**
   * The ID of the custom model to use for scoring. Only relevant for scoring_type of
   * CUSTOM_MODEL_SCORER
   */
  custom_model_id?: string | null;

  /**
   * The URL of the HuggingFace model to use for scoring. Only relevant for
   * scoring_type of HUGGINGFACE_SCORER
   */
  huggingface_url?: string | null;

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

export namespace SubDimension {
  /**
   * If `action_dimension` is set, this node is a part of short-circuit subtree. If
   * the score of the action_dimension is > 0.5, then evaluate the node and return
   * the actual score. If it is <= 0.5 return -1. The higher level node will ignore
   * the -1 scores and thus we achieve the short-circuit behavior.
   */
  export interface ActionDimension {
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
    scoring_type: 'PI_SCORER' | 'HUGGINGFACE_SCORER' | 'PYTHON_CODE' | 'CUSTOM_MODEL_SCORER';

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
     * The URL of the HuggingFace model to use for scoring. Only relevant for
     * scoring_type of HUGGINGFACE_SCORER
     */
    huggingface_url?: string | null;

    /**
     * The PYTHON code associated the PYTHON_CODE DimensionScoringType.
     */
    python_code?: string | null;
  }
}
