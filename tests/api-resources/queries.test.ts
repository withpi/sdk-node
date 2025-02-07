// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queries', () => {
  test('generateFanouts: only required params', async () => {
    const responsePromise = client.queries.generateFanouts({
      num_fanout_queries: 5,
      queries: [
        'Name the four largest fish and what they eat.',
        'What was the profession of both Ellery Queen and John Fowles?',
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateFanouts: required and optional params', async () => {
    const response = await client.queries.generateFanouts({
      num_fanout_queries: 5,
      queries: [
        'Name the four largest fish and what they eat.',
        'What was the profession of both Ellery Queen and John Fowles?',
      ],
    });
  });
});
