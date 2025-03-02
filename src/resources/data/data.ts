// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as CalibrateAPI from '../contracts/calibrate';
import * as GenerateSyntheticDataAPI from './generate-synthetic-data';
import {
  GenerateSyntheticData,
  GenerateSyntheticDataCreateParams,
  GenerateSyntheticDataListJobsParams,
  GenerateSyntheticDataListJobsResponse,
  GenerateSyntheticDataStreamDataResponse,
  GenerateSyntheticDataStreamMessagesResponse,
} from './generate-synthetic-data';
import * as InputsAPI from './inputs/inputs';
import { InputClusterParams, InputClusterResponse, InputTopicCluster, Inputs } from './inputs/inputs';

export class Data extends APIResource {
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
  generateSyntheticData: GenerateSyntheticDataAPI.GenerateSyntheticData =
    new GenerateSyntheticDataAPI.GenerateSyntheticData(this._client);

  /**
   * Returns a list of question answer jobs, optionally filtered by state
   */
  listQuestionAnswerJobs(
    query?: DataListQuestionAnswerJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataListQuestionAnswerJobsResponse>;
  listQuestionAnswerJobs(options?: Core.RequestOptions): Core.APIPromise<DataListQuestionAnswerJobsResponse>;
  listQuestionAnswerJobs(
    query: DataListQuestionAnswerJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataListQuestionAnswerJobsResponse> {
    if (isRequestOptions(query)) {
      return this.listQuestionAnswerJobs({}, query);
    }
    return this._client.get('/data/generate_question_answers', { query, ...options });
  }
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

export type DataListQuestionAnswerJobsResponse =
  Array<DataListQuestionAnswerJobsResponse.DataListQuestionAnswerJobsResponseItem>;

export namespace DataListQuestionAnswerJobsResponse {
  /**
   * QuestionAnswerStatus is the result of a question answering job.
   */
  export interface DataListQuestionAnswerJobsResponseItem {
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
    data?: Array<Shared.Example> | null;
  }
}

export interface DataListQuestionAnswerJobsParams {
  /**
   * Filter jobs by state
   */
  state?: CalibrateAPI.State | null;
}

Data.Inputs = Inputs;
Data.GenerateSyntheticData = GenerateSyntheticData;

export declare namespace Data {
  export {
    type DataGenerationStatus as DataGenerationStatus,
    type DataListQuestionAnswerJobsResponse as DataListQuestionAnswerJobsResponse,
    type DataListQuestionAnswerJobsParams as DataListQuestionAnswerJobsParams,
  };

  export {
    Inputs as Inputs,
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
  };

  export {
    GenerateSyntheticData as GenerateSyntheticData,
    type GenerateSyntheticDataListJobsResponse as GenerateSyntheticDataListJobsResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataCreateParams as GenerateSyntheticDataCreateParams,
    type GenerateSyntheticDataListJobsParams as GenerateSyntheticDataListJobsParams,
  };
}
