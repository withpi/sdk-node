// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from '@2pir-ai/twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inputs', () => {
  test('cluster: only required params', async () => {
    const responsePromise = client.data.inputs.cluster([{ identifier: 'identifier', llm_input: 'string' }]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cluster: required and optional params', async () => {
    const response = await client.data.inputs.cluster([{ identifier: 'identifier', llm_input: 'string' }]);
  });

  test('evaluate: only required params', async () => {
    const responsePromise = client.data.inputs.evaluate({
      contract: { description: 'description', name: 'name' },
      llm_inputs: ['string'],
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
            description: 'description',
            label: 'label',
            sub_dimensions: [
              {
                description: 'description',
                label: 'label',
                scoring_type: 'PI_SCORER',
                action_dimension: null,
                action_on_low_score: true,
                huggingface_url: 'huggingface_url',
                parameters: [0],
                python_code: 'python_code',
                weight: 0,
              },
            ],
            action_dimension: {
              description: 'description',
              label: 'label',
              scoring_type: 'PI_SCORER',
              action_dimension: null,
              action_on_low_score: true,
              huggingface_url: 'huggingface_url',
              parameters: [0],
              python_code: 'python_code',
              weight: 0,
            },
            action_on_low_score: true,
            weight: 0,
          },
        ],
      },
      llm_inputs: ['string'],
    });
  });

  test('generateSeeds: only required params', async () => {
    const responsePromise = client.data.inputs.generateSeeds({
      contract: { description: 'description', name: 'name' },
      num_inputs: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateSeeds: required and optional params', async () => {
    const response = await client.data.inputs.generateSeeds({
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
                scoring_type: 'PI_SCORER',
                action_dimension: null,
                action_on_low_score: true,
                huggingface_url: 'huggingface_url',
                parameters: [0],
                python_code: 'python_code',
                weight: 0,
              },
            ],
            action_dimension: {
              description: 'description',
              label: 'label',
              scoring_type: 'PI_SCORER',
              action_dimension: null,
              action_on_low_score: true,
              huggingface_url: 'huggingface_url',
              parameters: [0],
              python_code: 'python_code',
              weight: 0,
            },
            action_on_low_score: true,
            weight: 0,
          },
        ],
      },
      num_inputs: 0,
      context_types: ['none'],
    });
  });
});
