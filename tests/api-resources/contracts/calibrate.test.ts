// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calibrate', () => {
  test('retrieve', async () => {
    const responsePromise = client.contracts.calibrate.retrieve('job_id');
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
      client.contracts.calibrate.retrieve('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.contracts.calibrate.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.contracts.calibrate.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PiClient.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.contracts.calibrate.list({ state: 'QUEUED' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  test('startJob: only required params', async () => {
    const responsePromise = client.contracts.calibrate.startJob({
      contract: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Contract',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('startJob: required and optional params', async () => {
    const response = await client.contracts.calibrate.startJob({
      contract: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Contract',
        dimensions: [
          {
            description: 'Relevance of the response',
            label: 'Relevance',
            sub_dimensions: [
              {
                description: 'Is the response relevant to the prompt?',
                label: 'Relevance to Prompt',
                scoring_type: 'PI_SCORER',
                action_dimension: {
                  description: 'Is the response relevant to the prompt?',
                  label: 'Relevance to Prompt',
                  scoring_type: 'PI_SCORER',
                  action_on_low_score: true,
                  custom_model_id: 'your-model-id',
                  python_code:
                    '\ndef score(response_text: str, input_text: str, kwargs: dict) -> dict:\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
                },
                custom_model_id: 'your-model-id',
                parameters: [
                  0.14285714285714285, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714,
                  0.7142857142857143, 0.8571428571428571,
                ],
                python_code:
                  '\ndef score(response_text: str, input_text: str, kwargs: dict) -> dict:\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
                weight: 1,
              },
            ],
            action_dimension: {
              description: 'Is the response relevant to the prompt?',
              label: 'Relevance to Prompt',
              scoring_type: 'PI_SCORER',
              action_on_low_score: true,
              custom_model_id: 'your-model-id',
              python_code:
                '\ndef score(response_text: str, input_text: str, kwargs: dict) -> dict:\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
            },
            parameters: [
              0.14285714285714285, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714,
              0.7142857142857143, 0.8571428571428571,
            ],
            weight: 1,
          },
        ],
      },
      examples: [
        {
          llm_input: 'Tell me something different',
          llm_output: 'The lazy dog was jumped over by the quick brown fox',
          rating: 'Strongly Agree',
        },
      ],
      preference_examples: [
        {
          chosen: 'The lazy dog was jumped over by the quick brown fox',
          llm_input: 'Tell me something different',
          rejected: 'The lazy dog was flied over by the quick brown fox',
        },
      ],
      strategy: 'LITE',
    });
  });

  test('streamMessages', async () => {
    const responsePromise = client.contracts.calibrate.streamMessages('job_id');
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
      client.contracts.calibrate.streamMessages('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });
});
