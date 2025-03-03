// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
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
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = client.data.inputs.generateFromSeeds.cancel('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.inputs.generateFromSeeds.cancel('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('generate: only required params', async () => {
    const responsePromise = client.data.inputs.generateFromSeeds.generate({
      application_description: "Write a children's story communicating a simple life lesson.",
      num_inputs_to_generate: 50,
      seeds: [
        'The quick brown fox jumped over the lazy dog',
        'The lazy dog was jumped over by the quick brown fox',
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

  test('generate: required and optional params', async () => {
    const response = await client.data.inputs.generateFromSeeds.generate({
      application_description: "Write a children's story communicating a simple life lesson.",
      num_inputs_to_generate: 50,
      seeds: [
        'The quick brown fox jumped over the lazy dog',
        'The lazy dog was jumped over by the quick brown fox',
      ],
      batch_size: 5,
      exploration_mode: 'CONSERVATIVE',
      num_shots: 5,
    });
  });

  test('listJobs', async () => {
    const responsePromise = client.data.inputs.generateFromSeeds.listJobs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listJobs: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.inputs.generateFromSeeds.listJobs({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('listJobs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.inputs.generateFromSeeds.listJobs(
        { state: 'QUEUED' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('streamData', async () => {
    const responsePromise = client.data.inputs.generateFromSeeds.streamData('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('streamData: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.inputs.generateFromSeeds.streamData('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
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
    ).rejects.toThrow(PiClient.NotFoundError);
  });
});
