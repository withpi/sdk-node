// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queryFanout', () => {
  // skipped: tests are disabled for the time being
  test.skip('generate: only required params', async () => {
    const responsePromise = client.search.queryFanout.generate({
      query: 'Name the four largest fish and what they eat.',
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
  test.skip('generate: required and optional params', async () => {
    const response = await client.search.queryFanout.generate({
      query: 'Name the four largest fish and what they eat.',
      few_shot_examples: [
        {
          fanout_queries: [
            'Genus of the cheetah',
            'Genus of the pronghorn',
            'Genus of the springbok',
            'Genus of the wildebeest',
            'Genus of the lion',
          ],
          query: 'What are the genera of the five fastest land animals?',
        },
      ],
      num_fanout_queries: 5,
    });
  });
});
