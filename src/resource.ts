// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PiClient } from './index';

export class APIResource {
  protected _client: PiClient;

  constructor(client: PiClient) {
    this._client = client;
  }
}
