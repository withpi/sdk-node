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
   * The label of the dimension
   */
  id: string;

  /**
   * The description of the dimension
   */
  description: string;

  /**
   * The sub dimensions of the dimension
   */
  sub_dimensions: Array<SubDimension>;

  /**
   * The weight of the dimension The sum of dimension weights will be normalized to
   * one internally. A higher weight counts for more when aggregating this dimension
   * is aggregated into the final score.
   */
  weight: number;
}

export interface SubDimension {
  /**
   * The label of the dimension
   */
  id: string;

  /**
   * The description of the dimension
   */
  description: string;

  /**
   * The learned parameters for the scoring method. For llm_as_a_judge type, this
   * corresponds to the values assigned to each Likert point from 1-5, normalized to
   * a 0-1 range.
   */
  parameters: Array<number> | null;

  /**
   * The judge used for scoring this dimension (for llm_as_a_judge type)
   */
  scoring_method: 'twopir_judge' | null;

  /**
   * The type of scoring performed for this dimension
   */
  scoring_type: 'llm_as_a_judge' | 'glean' | 'glean_structured_detector' | 'python_code';

  /**
   * The weight of the subdimension. The sum of subdimension weights will be
   * normalized to one internally. A higher weight counts for more when aggregating
   * this subdimension into the parent dimension.
   */
  weight: number;
}
