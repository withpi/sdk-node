// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Withpi from 'withpi';
import { Response } from 'node-fetch';

const client = new Withpi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource piScoringSystem', () => {
  // skipped: tests are disabled for the time being
  test.skip('generateDimensions: only required params', async () => {
    const responsePromise = client.piScoringSystem.generateDimensions({
      application_description: "Write a children's story communicating a simple life lesson.",
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
  test.skip('generateDimensions: required and optional params', async () => {
    const response = await client.piScoringSystem.generateDimensions({
      application_description: "Write a children's story communicating a simple life lesson.",
      try_auto_generating_python_code: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('readFromHf: only required params', async () => {
    const responsePromise = client.piScoringSystem.readFromHf({
      hf_scoring_system_name: 'withpi/tldr_scoring_system',
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
  test.skip('readFromHf: required and optional params', async () => {
    const response = await client.piScoringSystem.readFromHf({
      hf_scoring_system_name: 'withpi/tldr_scoring_system',
      hf_token: 'hf_token',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('score: only required params', async () => {
    const responsePromise = client.piScoringSystem.score({
      llm_input: 'Tell me something different',
      llm_output: 'The lazy dog was jumped over by the quick brown fox',
      scoring_system: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Scoring System',
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

  // skipped: tests are disabled for the time being
  test.skip('score: required and optional params', async () => {
    const response = await client.piScoringSystem.score({
      llm_input: 'Tell me something different',
      llm_output: 'The lazy dog was jumped over by the quick brown fox',
      scoring_system: {
        description: "Write a children's story communicating a simple life lesson.",
        name: 'Sample Scoring System',
        dimensions: [
          {
            description: 'Relevance of the response',
            label: 'Relevance',
            sub_dimensions: [
              {
                description: 'Is the response relevant to the prompt?',
                label: 'Relevance to Prompt',
                scoring_type: 'PI_SCORER',
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
            parameters: [
              0.14285714285714285, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714,
              0.7142857142857143, 0.8571428571428571,
            ],
            weight: 1,
          },
        ],
      },
    });
  });
});
