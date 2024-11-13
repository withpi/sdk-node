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

  /**
   * The scorer AST of the contract
   */
  scorer_ast?: string | Record<string, unknown> | null;
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
}

export interface LlmResponse {
  /**
   * The generated text
   */
  text: string;
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
}
