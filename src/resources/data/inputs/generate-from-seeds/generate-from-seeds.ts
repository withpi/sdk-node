// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as DataAPI from '../../data';
import * as MessagesAPI from './messages';
import { MessageListResponse, Messages } from './messages';

export class GenerateFromSeeds extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Start an input data generation job
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<DataAPI.DataGenerationStatus> {
    return this._client.get(`/data/input/generate_from_seeds/${jobId}`, options);
  }
}

GenerateFromSeeds.Messages = Messages;

export declare namespace GenerateFromSeeds {
  export { Messages as Messages, type MessageListResponse as MessageListResponse };
}
