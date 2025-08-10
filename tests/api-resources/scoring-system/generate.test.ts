// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PiClient from 'withpi';
import { Response } from 'node-fetch';

const client = new PiClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generate', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.scoringSystem.generate.retrieve('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.scoringSystem.generate.retrieve('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.scoringSystem.generate.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.scoringSystem.generate.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PiClient.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.scoringSystem.generate.list({ state: 'QUEUED' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel', async () => {
    const responsePromise = client.scoringSystem.generate.cancel('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.scoringSystem.generate.cancel('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('startJob: only required params', async () => {
    const responsePromise = client.scoringSystem.generate.startJob({
      application_description: "Write a children's story communicating a simple life lesson.",
      examples: [
        { llm_input: 'good input', llm_output: 'good response' },
        { llm_input: 'neutral input', llm_output: 'neutral response' },
      ],
      preference_examples: [
        { chosen: 'chosen response', llm_input: 'some input', rejected: 'rejected response' },
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
  test.skip('startJob: required and optional params', async () => {
    const response = await client.scoringSystem.generate.startJob({
      application_description: "Write a children's story communicating a simple life lesson.",
      examples: [
        { llm_input: 'good input', llm_output: 'good response', rating: 'Disagree', score: 0.9 },
        { llm_input: 'neutral input', llm_output: 'neutral response', rating: 'Disagree', score: 0.5 },
      ],
      preference_examples: [
        { chosen: 'chosen response', llm_input: 'some input', rejected: 'rejected response' },
      ],
      batch_size: 0,
      existing_questions: [
        {
          question: 'Is the output relevant to input?',
          custom_model_id: 'your-model-id',
          is_lower_score_desirable: true,
          label: 'some input',
          parameters: [
            0.14285714285714285, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714,
            0.7142857142857143, 0.8571428571428571,
          ],
          python_code:
            '\ndef score(response_text: str, input_text: str, kwargs: dict) -> dict:\n    word_count = len(response_text.split())\n    if word_count > 10:\n        return {"score": 0.2, "explanation": "Response has more than 10 words"}\n    elif word_count > 5:\n        return{"score": 0.6, "explanation": "Response has more than 5 words"}\n    else:\n        return {"score": 1, "explanation": "Response has 5 or fewer words"}\n',
          remap_spec: 'NEUTRAL',
          scoring_type: 'PI_SCORER',
          tag: 'Legal Formatting',
          weight: 1,
        },
      ],
      num_questions: 0,
      try_auto_generating_python_code: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('streamMessages', async () => {
    const responsePromise = client.scoringSystem.generate.streamMessages('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('streamMessages: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.scoringSystem.generate.streamMessages('job_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PiClient.NotFoundError);
  });
});
