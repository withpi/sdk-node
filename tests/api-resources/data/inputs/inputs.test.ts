// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from '@2pir-ai/twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inputs', () => {
  test('evaluate: only required params', async () => {
    const responsePromise = client.data.inputs.evaluate({
      contract: { description: 'description', name: 'name' },
      llm_input: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('evaluate: required and optional params', async () => {
    const response = await client.data.inputs.evaluate({
      contract: {
        description: 'description',
        name: 'name',
        dimensions: [
          {
            id: 'id',
            description: 'description',
            sub_dimensions: [
              {
                id: 'id',
                description: 'description',
                parameters: [0],
                scoring_method: 'twopir_judge',
                scoring_type: 'llm_as_a_judge',
                weight: 0,
              },
            ],
            weight: 0,
          },
        ],
      },
      llm_input: 'string',
    });
  });
});
