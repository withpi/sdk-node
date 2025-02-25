// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Dataset extends APIResource {
  /**
   * Takes 100 uniform samples without replacement from a dataset on Hugging Face. If
   * the dataset does not have more than 100 rows, the entire dataset is returned.
   */
  sample(params: DatasetSampleParams, options?: Core.RequestOptions): Core.APIPromise<DatasetSampleResponse> {
    const { name, split, subset } = params;
    return this._client.post('/dataset/sample_from_hf', { query: { name, split, subset }, ...options });
  }
}

export type DatasetSampleResponse = Record<string, Array<unknown>>;

export interface DatasetSampleParams {
  /**
   * The name of a dataset hosted on Hugging Face.
   */
  name: string;

  /**
   * The split to sample from.
   */
  split: string;

  /**
   * The subset to sample from.
   */
  subset?: string | null;
}

export declare namespace Dataset {
  export {
    type DatasetSampleResponse as DatasetSampleResponse,
    type DatasetSampleParams as DatasetSampleParams,
  };
}
