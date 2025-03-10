// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource data', () => {
  // skipped: tests are disabled for the time being
  test.skip('createClusterInputs: only required params', async () => {
    const responsePromise = client.data.createClusterInputs({
      inputs: [{ identifier: 'abcd12345', llm_input: 'The lazy dog was jumped over by the quick brown fox' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createClusterInputs: required and optional params', async () => {
    const response = await client.data.createClusterInputs({
      inputs: [{ identifier: 'abcd12345', llm_input: 'The lazy dog was jumped over by the quick brown fox' }],
      num_clusters: 5,
    });
  });
});
