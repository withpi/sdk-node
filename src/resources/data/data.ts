// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GenerateSyntheticDataAPI from './generate-synthetic-data';
import {
  GenerateSyntheticData,
  GenerateSyntheticDataCreateParams,
  GenerateSyntheticDataCreateResponse,
  GenerateSyntheticDataRetrieveResponse,
  GenerateSyntheticDataStreamDataResponse,
  GenerateSyntheticDataStreamMessagesResponse,
} from './generate-synthetic-data';
import * as InputsAPI from './inputs/inputs';
import { InputClusterParams, InputClusterResponse, InputTopicCluster, Inputs } from './inputs/inputs';

export class Data extends APIResource {
  inputs: InputsAPI.Inputs = new InputsAPI.Inputs(this._client);
  generateSyntheticData: GenerateSyntheticDataAPI.GenerateSyntheticData =
    new GenerateSyntheticDataAPI.GenerateSyntheticData(this._client);
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
  state: 'QUEUED' | 'RUNNING' | 'DONE' | 'ERROR';

  /**
   * The generated data. Can be present even if the state is not done/error as it is
   * streamed.
   */
  data?: Array<string> | null;
}

Data.Inputs = Inputs;
Data.GenerateSyntheticData = GenerateSyntheticData;

export declare namespace Data {
  export { type DataGenerationStatus as DataGenerationStatus };

  export {
    Inputs as Inputs,
    type InputTopicCluster as InputTopicCluster,
    type InputClusterResponse as InputClusterResponse,
    type InputClusterParams as InputClusterParams,
  };

  export {
    GenerateSyntheticData as GenerateSyntheticData,
    type GenerateSyntheticDataCreateResponse as GenerateSyntheticDataCreateResponse,
    type GenerateSyntheticDataRetrieveResponse as GenerateSyntheticDataRetrieveResponse,
    type GenerateSyntheticDataStreamDataResponse as GenerateSyntheticDataStreamDataResponse,
    type GenerateSyntheticDataStreamMessagesResponse as GenerateSyntheticDataStreamMessagesResponse,
    type GenerateSyntheticDataCreateParams as GenerateSyntheticDataCreateParams,
  };
}
