// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Feedback extends APIResource {
  /**
   * Clusters feedback into groups with counts
   */
  cluster(
    body: FeedbackClusterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeedbackClusterResponse> {
    return this._client.post('/feedback/cluster', { body, ...options });
  }
}

export interface FeedbackTopicCluster {
  /**
   * The feedback IDs assigned to this topic
   */
  feedback: Array<string>;

  /**
   * The counts of feedback per source
   */
  per_source_counts: Record<string, number>;

  /**
   * The rating of the feedback in this cluster
   */
  rating: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree';

  /**
   * The topic of the feedback in this cluster
   */
  topic: string;
}

export type FeedbackClusterResponse = Array<FeedbackTopicCluster>;

export type FeedbackClusterParams = Array<FeedbackClusterParams.Feedback>;

export namespace FeedbackClusterParams {
  export interface Feedback {
    /**
     * The comment on the feedback
     */
    comment: string;

    /**
     * The identifier of the feedback used to align responses
     */
    identifier: string;

    /**
     * The input to LLM
     */
    llm_input: string;

    /**
     * The output to evaluate
     */
    llm_output: string;

    /**
     * Structured text rating of this feedback.
     */
    rating: 'Strongly Agree' | 'Agree' | 'Neutral' | 'Disagree' | 'Strongly Disagree';

    /**
     * The source labels of the feedback. When computing cluster statistics, per-source
     * statistics will be maintained.
     */
    sources?: Array<string> | null;
  }
}

export declare namespace Feedback {
  export {
    type FeedbackTopicCluster as FeedbackTopicCluster,
    type FeedbackClusterResponse as FeedbackClusterResponse,
    type FeedbackClusterParams as FeedbackClusterParams,
  };
}
