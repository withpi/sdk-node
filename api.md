# Shared

Types:

- <code><a href="./src/resources/shared.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/shared.ts">Example</a></code>
- <code><a href="./src/resources/shared.ts">ExplorationMode</a></code>
- <code><a href="./src/resources/shared.ts">QueryFanoutExample</a></code>
- <code><a href="./src/resources/shared.ts">ScoringDimension</a></code>
- <code><a href="./src/resources/shared.ts">ScoringSpec</a></code>
- <code><a href="./src/resources/shared.ts">ScoringSubDimension</a></code>
- <code><a href="./src/resources/shared.ts">ScoringSystemMetrics</a></code>
- <code><a href="./src/resources/shared.ts">SyntheticDataStatus</a></code>

# Data

## Generate

Types:

- <code><a href="./src/resources/data/generate.ts">GenerateListResponse</a></code>
- <code><a href="./src/resources/data/generate.ts">GenerateCancelResponse</a></code>
- <code><a href="./src/resources/data/generate.ts">GenerateStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate.ts">GenerateStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/generate/{job_id}">client.data.generate.<a href="./src/resources/data/generate.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="get /data/generate">client.data.generate.<a href="./src/resources/data/generate.ts">list</a>({ ...params }) -> GenerateListResponse</code>
- <code title="delete /data/generate/{job_id}">client.data.generate.<a href="./src/resources/data/generate.ts">cancel</a>(jobId) -> string</code>
- <code title="post /data/generate">client.data.generate.<a href="./src/resources/data/generate.ts">startJob</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/generate/{job_id}/data">client.data.generate.<a href="./src/resources/data/generate.ts">streamData</a>(jobId) -> string</code>
- <code title="get /data/generate/{job_id}/messages">client.data.generate.<a href="./src/resources/data/generate.ts">streamMessages</a>(jobId) -> string</code>

## GenerateInputResponsePairs

Types:

- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairListResponse</a></code>
- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairCancelResponse</a></code>
- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/generate_input_response_pairs/{job_id}">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">retrieve</a>(jobId) -> SyntheticDataStatus</code>
- <code title="get /data/generate_input_response_pairs">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">list</a>({ ...params }) -> GenerateInputResponsePairListResponse</code>
- <code title="delete /data/generate_input_response_pairs/{job_id}">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">cancel</a>(jobId) -> string</code>
- <code title="post /data/generate_input_response_pairs">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">startJob</a>({ ...params }) -> SyntheticDataStatus</code>
- <code title="get /data/generate_input_response_pairs/{job_id}/data">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">streamData</a>(jobId) -> GenerateInputResponsePairStreamDataResponse</code>
- <code title="get /data/generate_input_response_pairs/{job_id}/messages">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">streamMessages</a>(jobId) -> string</code>

# Training

## Sft

## Grpo

# Prompt

## Optimize

# ScoringSystem

Types:

- <code><a href="./src/resources/scoring-system/scoring-system.ts">ScoringSystemGenerateResponse</a></code>

Methods:

- <code title="post /scoring_system/generate">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">generate</a>({ ...params }) -> ScoringSystemGenerateResponse</code>
- <code title="post /scoring_system/score">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">score</a>({ ...params }) -> ScoringSystemMetrics</code>

## Calibrate

Types:

- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateRetrieveResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateListResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateCancelResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateStartJobResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateStreamMessagesResponse</a></code>

Methods:

- <code title="get /scoring_system/calibrate/{job_id}">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">retrieve</a>(jobId) -> CalibrateRetrieveResponse</code>
- <code title="get /scoring_system/calibrate">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">list</a>({ ...params }) -> CalibrateListResponse</code>
- <code title="delete /scoring_system/calibrate/{job_id}">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">cancel</a>(jobId) -> string</code>
- <code title="post /scoring_system/calibrate">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">startJob</a>({ ...params }) -> CalibrateStartJobResponse</code>
- <code title="get /scoring_system/calibrate/{job_id}/messages">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">streamMessages</a>(jobId) -> string</code>

# Search

## QueryFanout

Types:

- <code><a href="./src/resources/search/query-fanout.ts">QueryFanoutGenerateResponse</a></code>

Methods:

- <code title="post /search/query_fanout/generate">client.search.queryFanout.<a href="./src/resources/search/query-fanout.ts">generate</a>({ ...params }) -> QueryFanoutGenerateResponse</code>

## QueryClassifier

Types:

- <code><a href="./src/resources/search/query-classifier/query-classifier.ts">QueryClassifierClassifyResponse</a></code>

Methods:

- <code title="post /search/query_classifier/classify">client.search.queryClassifier.<a href="./src/resources/search/query-classifier/query-classifier.ts">classify</a>({ ...params }) -> QueryClassifierClassifyResponse</code>

### Distill
