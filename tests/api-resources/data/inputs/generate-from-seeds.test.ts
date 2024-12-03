// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from '@2pir-ai/twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generateFromSeeds', () => {
  test('retrieve', async () => {
    const responsePromise = client.data.inputs.generateFromSeeds.retrieve('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.inputs.generateFromSeeds.retrieve('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Twopir.NotFoundError);
  });

  test('generate: only required params', async () => {
    const responsePromise = client.data.inputs.generateFromSeeds.generate(['string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generate: required and optional params', async () => {
    const response = await client.data.inputs.generateFromSeeds.generate(['string']);
  });

  test('streamMessages', async () => {
    const responsePromise = client.data.inputs.generateFromSeeds.streamMessages('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('streamMessages: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.inputs.generateFromSeeds.streamMessages('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Twopir.NotFoundError);
  });
});
