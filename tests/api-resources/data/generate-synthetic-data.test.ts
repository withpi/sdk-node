// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generateSyntheticData', () => {
  test('create: only required params', async () => {
    const responsePromise = client.data.generateSyntheticData.create({
      application_description: 'application_description',
      num_examples_to_generate: 50,
      seeds: [
        {
          llm_input: 'Tell me something different',
          llm_output: 'The lazy dog was jumped over by the quick brown fox',
        },
        {
          llm_input: 'Write a short poem',
          llm_output: "Moonlight dancing on waves,\nStars whisper ancient tales,\nNight's gentle embrace",
        },
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

  test('create: required and optional params', async () => {
    const response = await client.data.generateSyntheticData.create({
      application_description: 'application_description',
      num_examples_to_generate: 50,
      seeds: [
        {
          llm_input: 'Tell me something different',
          llm_output: 'The lazy dog was jumped over by the quick brown fox',
        },
        {
          llm_input: 'Write a short poem',
          llm_output: "Moonlight dancing on waves,\nStars whisper ancient tales,\nNight's gentle embrace",
        },
      ],
      batch_size: 5,
      exploration_mode: 'CONSERVATIVE',
      num_shots: 5,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.data.generateSyntheticData.retrieve('job_id');
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
      client.data.generateSyntheticData.retrieve('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('streamData', async () => {
    const responsePromise = client.data.generateSyntheticData.streamData('job_id');
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
      client.data.generateSyntheticData.streamData('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('streamMessages', async () => {
    const responsePromise = client.data.generateSyntheticData.streamMessages('job_id');
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
      client.data.generateSyntheticData.streamMessages('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });
});
