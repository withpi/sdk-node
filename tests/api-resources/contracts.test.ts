// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from '@2pir-ai/twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  test('generateDimensions: only required params', async () => {
    const responsePromise = client.contracts.generateDimensions({
      contract: { description: 'description', name: 'name' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateDimensions: required and optional params', async () => {
    const response = await client.contracts.generateDimensions({
      contract: {
        description: 'description',
        name: 'name',
        dimensions: [
          {
            description: 'description',
            label: 'label',
            sub_dimensions: [
              {
                description: 'description',
                label: 'label',
                scoring_type: 'LLM_AS_A_JUDGE',
                huggingface_url: 'huggingface_url',
                parameters: [0],
                python_code: 'python_code',
                weight: 0,
              },
            ],
            weight: 0,
          },
        ],
      },
    });
  });

  test('score: only required params', async () => {
    const responsePromise = client.contracts.score({
      contract: { description: 'description', name: 'name' },
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
    const response = await client.contracts.score({
      contract: {
        description: 'description',
        name: 'name',
        dimensions: [
          {
            description: 'description',
            label: 'label',
            sub_dimensions: [
              {
                description: 'description',
                label: 'label',
                scoring_type: 'LLM_AS_A_JUDGE',
                huggingface_url: 'huggingface_url',
                parameters: [0],
                python_code: 'python_code',
                weight: 0,
              },
            ],
            weight: 0,
          },
        ],
      },
      llm_input: 'string',
      llm_output: 'llm_output',
    });
  });
});
