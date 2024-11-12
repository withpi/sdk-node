// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from 'twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompt', () => {
  test('get', async () => {
    const responsePromise = client.tune.prompt.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tune.prompt.get(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Twopir.NotFoundError,
    );
  });

  test('optimize: only required params', async () => {
    const responsePromise = client.tune.prompt.optimize({
      contract: { description: 'description', name: 'name' },
      experiment_id: 0,
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
              { id: 'id', description: 'description' },
              { id: 'id', description: 'description' },
              { id: 'id', description: 'description' },
            ],
          },
          {
            id: 'id',
            description: 'description',
            sub_dimensions: [
              { id: 'id', description: 'description' },
              { id: 'id', description: 'description' },
              { id: 'id', description: 'description' },
            ],
          },
          {
            id: 'id',
            description: 'description',
            sub_dimensions: [
              { id: 'id', description: 'description' },
              { id: 'id', description: 'description' },
              { id: 'id', description: 'description' },
            ],
          },
        ],
        scorer_ast: 'string',
      },
      experiment_id: 0,
    });
  });
});
