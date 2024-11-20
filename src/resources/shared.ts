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
   * The type of scoring performed for this dimension
   */
  scoring_type: 'llm_as_a_judge';

  /**
   * The sub dimensions of the dimension
   */
  sub_dimensions: Array<SubDimension>;
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
   * The type of scoring performed for this dimension
   */
  scoring_type: 'llm_as_a_judge';
}
