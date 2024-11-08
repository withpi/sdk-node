// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from 'twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dimension', () => {
  test('generate: only required params', async () => {
    const responsePromise = client.contract.dimension.generate({
      dimension: {
        description: 'description',
        label: 'label',
        sub_dimensions: [
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
        ],
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generate: required and optional params', async () => {
    const response = await client.contract.dimension.generate({
      dimension: {
        description: 'description',
        label: 'label',
        sub_dimensions: [
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
        ],
      },
    });
  });

  test('score: only required params', async () => {
    const responsePromise = client.contract.dimension.score({
      dimension: {
        description: 'description',
        label: 'label',
        sub_dimensions: [
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
        ],
      },
      llm_input: 'string',
      llm_output: 'llm_output',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('score: required and optional params', async () => {
    const response = await client.contract.dimension.score({
      dimension: {
        description: 'description',
        label: 'label',
        sub_dimensions: [
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
          { description: 'description', label: 'label' },
        ],
      },
      llm_input: 'string',
      llm_output: 'llm_output',
    });
  });
});
