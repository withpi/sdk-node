// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from '@2pir-ai/twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedback', () => {
  test('cluster: only required params', async () => {
    const responsePromise = client.feedback.cluster([
      {
        comment: 'This is a great response',
        identifier: '1234abcd',
        llm_input: 'Tell me something different',
        llm_output: 'The lazy dog was jumped over by the quick brown fox',
        rating: 'Strongly Agree',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cluster: required and optional params', async () => {
    const response = await client.feedback.cluster([
      {
        comment: 'This is a great response',
        identifier: '1234abcd',
        llm_input: 'Tell me something different',
        llm_output: 'The lazy dog was jumped over by the quick brown fox',
        rating: 'Strongly Agree',
        sources: ['internal_review', 'user_feedback'],
      },
    ]);
  });
});
