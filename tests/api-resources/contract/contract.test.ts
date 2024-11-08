// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from 'twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contract', () => {
  test('calibrate: only required params', async () => {
    const responsePromise = client.contract.calibrate({
      contract: { description: 'description', name: 'name' },
      feedbacks: [
        { labels: { foo: 'string' }, llm_input: 'string', llm_output: 'llm_output', scores: { foo: 0 } },
        { labels: { foo: 'string' }, llm_input: 'string', llm_output: 'llm_output', scores: { foo: 0 } },
        { labels: { foo: 'string' }, llm_input: 'string', llm_output: 'llm_output', scores: { foo: 0 } },
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

  test('calibrate: required and optional params', async () => {
    const response = await client.contract.calibrate({
      contract: { description: 'description', name: 'name' },
      feedbacks: [
        { labels: { foo: 'string' }, llm_input: 'string', llm_output: 'llm_output', scores: { foo: 0 } },
        { labels: { foo: 'string' }, llm_input: 'string', llm_output: 'llm_output', scores: { foo: 0 } },
        { labels: { foo: 'string' }, llm_input: 'string', llm_output: 'llm_output', scores: { foo: 0 } },
      ],
    });
  });

  test('generateDimensions: only required params', async () => {
    const responsePromise = client.contract.generateDimensions({
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
    const response = await client.contract.generateDimensions({
      contract: { description: 'description', name: 'name' },
    });
  });

  test('score: only required params', async () => {
    const responsePromise = client.contract.score({
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
    const response = await client.contract.score({
      contract: { description: 'description', name: 'name' },
      llm_input: 'string',
      llm_output: 'llm_output',
    });
  });
});
