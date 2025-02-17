// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Data extends APIResource {
  /**
   * Streams SDKExample objects from the synthetic data generation job
   */
  list(jobId: string, options?: Core.RequestOptions): Core.APIPromise<DataListResponse> {
    return this._client.get(`/data/generate_synthetic_data/${jobId}/data`, options);
  }
}

export type DataListResponse = Array<DataListResponse.DataListResponseItem>;

export namespace DataListResponse {
  export interface DataListResponseItem {
    llm_input: string;

    llm_output: string;
  }
}

export declare namespace Data {
  export { type DataListResponse as DataListResponse };
}
