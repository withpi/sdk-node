// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sft', () => {
  test('getStatus', async () => {
    const responsePromise = client.model.sft.getStatus('job_id');
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
    await expect(client.model.sft.getStatus('job_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PiClient.NotFoundError,
    );
  });

  test('startJob: only required params', async () => {
    const responsePromise = client.model.sft.startJob({
      contract: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Contract',
      },
      examples: [
        {
          llm_input: 'Tell me something different',
          llm_output: 'The lazy dog was jumped over by the quick brown fox',
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

  test('startJob: required and optional params', async () => {
    const response = await client.model.sft.startJob({
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
                  huggingface_url: 'https://yourmodelid.us-east-1.aws.endpoints.huggingface.cloud',
                  python_code:
                    '\ndef score(response_text, input_text, input_args, kwargs):\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
                },
                custom_model_id: 'your-model-id',
                huggingface_url: 'https://yourmodelid.us-east-1.aws.endpoints.huggingface.cloud',
                parameters: [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875],
                python_code:
                  '\ndef score(response_text, input_text, input_args, kwargs):\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
                weight: 1,
              },
            ],
            action_dimension: {
              description: 'Is the response relevant to the prompt?',
              label: 'Relevance to Prompt',
              scoring_type: 'PI_SCORER',
              action_on_low_score: true,
              custom_model_id: 'your-model-id',
              huggingface_url: 'https://yourmodelid.us-east-1.aws.endpoints.huggingface.cloud',
              python_code:
                '\ndef score(response_text, input_text, input_args, kwargs):\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
            },
            weight: 1,
          },
        ],
      },
      examples: [
        {
          llm_input: 'Tell me something different',
          llm_output: 'The lazy dog was jumped over by the quick brown fox',
        },
      ],
      base_sft_model: 'LLAMA_3.1_8B',
      learning_rate: 0.0002,
      num_train_epochs: 10,
    });
  });

  test('streamMessages', async () => {
    const responsePromise = client.model.sft.streamMessages('job_id');
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
      client.model.sft.streamMessages('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });
});
