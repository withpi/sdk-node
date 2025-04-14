// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queryClassifier', () => {
  // skipped: tests are disabled for the time being
  test.skip('classify: only required params', async () => {
    const responsePromise = client.search.queryClassifier.classify({
      classes: [
        { description: 'Questions seeking objective, verifiable information or facts', label: 'factual' },
        {
          description: 'Questions asking for subjective judgments, preferences, or personal views',
          label: 'opinion',
        },
        {
          description: 'Questions about how to perform tasks or follow specific processes',
          label: 'procedural',
        },
      ],
      queries: [
        'What is the capital of France?',
        'How do I feel about the current political climate?',
        'What steps should I follow to bake a chocolate cake?',
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

  // skipped: tests are disabled for the time being
  test.skip('classify: required and optional params', async () => {
    const response = await client.search.queryClassifier.classify({
      classes: [
        { description: 'Questions seeking objective, verifiable information or facts', label: 'factual' },
        {
          description: 'Questions asking for subjective judgments, preferences, or personal views',
          label: 'opinion',
        },
        {
          description: 'Questions about how to perform tasks or follow specific processes',
          label: 'procedural',
        },
      ],
      queries: [
        'What is the capital of France?',
        'How do I feel about the current political climate?',
        'What steps should I follow to bake a chocolate cake?',
      ],
      batch_size: 10,
      examples: [
        { label: 'factual', text: 'When was the Eiffel Tower built?' },
        { label: 'opinion', text: 'Is jazz better than classical music?' },
        { label: 'procedural', text: 'How do I change a flat tire?' },
      ],
      mode: 'generative',
    });
  });
});
