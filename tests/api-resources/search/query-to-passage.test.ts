// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queryToPassage', () => {
  // Prism tests are disabled
  test.skip('rankDocuments: only required params', async () => {
    const responsePromise = client.search.queryToPassage.rankDocuments({
      passages: ['string'],
      query: 'query',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('rankDocuments: required and optional params', async () => {
    const response = await client.search.queryToPassage.rankDocuments({
      passages: ['string'],
      query: 'query',
    });
  });
});
