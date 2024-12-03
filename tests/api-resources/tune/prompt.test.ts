// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from 'twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompt', () => {
  test('getDetailedMessages', async () => {
    const responsePromise = client.tune.prompt.getDetailedMessages('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDetailedMessages: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tune.prompt.getDetailedMessages('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Twopir.NotFoundError);
  });

  test('getStatus', async () => {
    const responsePromise = client.tune.prompt.getStatus('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tune.prompt.getStatus('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Twopir.NotFoundError);
  });

  test('optimize: only required params', async () => {
    const responsePromise = client.tune.prompt.optimize({
      contract: { description: 'description', name: 'name' },
      examples: [{ llm_input: 'string', llm_output: 'llm_output' }],
      model_id: 'gpt-4o-mini',
      tuning_algorithm: 'pi',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimize: required and optional params', async () => {
    const response = await client.tune.prompt.optimize({
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
      examples: [{ llm_input: 'string', llm_output: 'llm_output' }],
      model_id: 'gpt-4o-mini',
      tuning_algorithm: 'pi',
    });
  });
});
