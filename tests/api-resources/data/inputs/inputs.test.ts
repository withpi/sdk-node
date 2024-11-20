// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from 'twopir';
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
            scoring_type: 'llm_as_a_judge',
            sub_dimensions: [{ id: 'id', description: 'description', scoring_type: 'llm_as_a_judge' }],
          },
        ],
      },
      llm_input: 'string',
    });
  });
});
