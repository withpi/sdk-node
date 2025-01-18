// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Twopir from '@2pir-ai/twopir';
import { Response } from 'node-fetch';

const client = new Twopir({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  test('calibrate: only required params', async () => {
    const responsePromise = client.contracts.calibrate({
      contract: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Contract',
      },
      examples: [
        {
          llm_input: 'Tell me something different',
          llm_output: 'The lazy dog was jumped over by the quick brown fox',
          rating: 'Strongly Agree',
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

  test('calibrate: required and optional params', async () => {
    const response = await client.contracts.calibrate({
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
                action_dimension: null,
                action_on_low_score: true,
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
              action_dimension: null,
              action_on_low_score: true,
              huggingface_url: 'https://yourmodelid.us-east-1.aws.endpoints.huggingface.cloud',
              parameters: [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875],
              python_code:
                '\ndef score(response_text, input_text, input_args, kwargs):\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
              weight: 1,
            },
            action_on_low_score: true,
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
    });
  });

  test('generateDimensions: only required params', async () => {
    const responsePromise = client.contracts.generateDimensions({
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

  test('generateDimensions: required and optional params', async () => {
    const response = await client.contracts.generateDimensions({
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
                action_dimension: null,
                action_on_low_score: true,
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
              action_dimension: null,
              action_on_low_score: true,
              huggingface_url: 'https://yourmodelid.us-east-1.aws.endpoints.huggingface.cloud',
              parameters: [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875],
              python_code:
                '\ndef score(response_text, input_text, input_args, kwargs):\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
              weight: 1,
            },
            action_on_low_score: true,
            weight: 1,
          },
        ],
      },
    });
  });

  test('readFromHf: only required params', async () => {
    const responsePromise = client.contracts.readFromHf({ hf_contract_name: 'hf_contract_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('readFromHf: required and optional params', async () => {
    const response = await client.contracts.readFromHf({
      hf_contract_name: 'hf_contract_name',
      hf_token: 'hf_token',
    });
  });

  test('score: only required params', async () => {
    const responsePromise = client.contracts.score({
      contract: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Contract',
      },
      llm_input: 'Tell me something different',
      llm_output: 'The lazy dog was jumped over by the quick brown fox',
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
    const response = await client.contracts.score({
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
                action_dimension: null,
                action_on_low_score: true,
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
              action_dimension: null,
              action_on_low_score: true,
              huggingface_url: 'https://yourmodelid.us-east-1.aws.endpoints.huggingface.cloud',
              parameters: [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875],
              python_code:
                '\ndef score(response_text, input_text, input_args, kwargs):\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
              weight: 1,
            },
            action_on_low_score: true,
            weight: 1,
          },
        ],
      },
      llm_input: 'Tell me something different',
      llm_output: 'The lazy dog was jumped over by the quick brown fox',
    });
  });

  test('writeToHf: only required params', async () => {
    const responsePromise = client.contracts.writeToHf({
      contract: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Contract',
      },
      hf_contract_name: 'hf_contract_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('writeToHf: required and optional params', async () => {
    const response = await client.contracts.writeToHf({
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
                action_dimension: null,
                action_on_low_score: true,
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
              action_dimension: null,
              action_on_low_score: true,
              huggingface_url: 'https://yourmodelid.us-east-1.aws.endpoints.huggingface.cloud',
              parameters: [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875],
              python_code:
                '\ndef score(response_text, input_text, input_args, kwargs):\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
              weight: 1,
            },
            action_on_low_score: true,
            weight: 1,
          },
        ],
      },
      hf_contract_name: 'hf_contract_name',
      hf_token: 'hf_token',
    });
  });
});
