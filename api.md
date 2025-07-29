# Shared

Types:

- <code><a href="./src/resources/shared.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/shared.ts">Example</a></code>
- <code><a href="./src/resources/shared.ts">ExplorationMode</a></code>
- <code><a href="./src/resources/shared.ts">QueryClassifierResult</a></code>
- <code><a href="./src/resources/shared.ts">Question</a></code>
- <code><a href="./src/resources/shared.ts">ScoringSpecCalibrationStatus</a></code>
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

# ScoringSystem

Types:

- <code><a href="./src/resources/scoring-system/scoring-system.ts">ScoringSystemImportSpecResponse</a></code>
- <code><a href="./src/resources/scoring-system/scoring-system.ts">ScoringSystemUploadToHuggingfaceResponse</a></code>

Methods:

- <code title="post /scoring_system/import_spec">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">importSpec</a>({ ...params }) -> ScoringSystemImportSpecResponse</code>
- <code title="post /scoring_system/score">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">score</a>({ ...params }) -> ScoringSystemMetrics</code>
- <code title="post /scoring_system/to_huggingface">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">uploadToHuggingface</a>({ ...params }) -> string</code>

## Calibrate

Types:

- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateListResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateCancelResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateStreamMessagesResponse</a></code>

Methods:

- <code title="get /scoring_system/calibrate/{job_id}">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">retrieve</a>(jobId) -> ScoringSpecCalibrationStatus</code>
- <code title="get /scoring_system/calibrate">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">list</a>({ ...params }) -> CalibrateListResponse</code>
- <code title="delete /scoring_system/calibrate/{job_id}">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">cancel</a>(jobId) -> string</code>
- <code title="post /scoring_system/calibrate">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">startJob</a>({ ...params }) -> ScoringSpecCalibrationStatus</code>
- <code title="get /scoring_system/calibrate/{job_id}/messages">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">streamMessages</a>(jobId) -> string</code>

## Generate

Types:

- <code><a href="./src/resources/scoring-system/generate.ts">GenerateRetrieveResponse</a></code>
- <code><a href="./src/resources/scoring-system/generate.ts">GenerateListResponse</a></code>
- <code><a href="./src/resources/scoring-system/generate.ts">GenerateCancelResponse</a></code>
- <code><a href="./src/resources/scoring-system/generate.ts">GenerateStartJobResponse</a></code>
- <code><a href="./src/resources/scoring-system/generate.ts">GenerateStreamMessagesResponse</a></code>

Methods:

- <code title="get /scoring_system/generate/{job_id}">client.scoringSystem.generate.<a href="./src/resources/scoring-system/generate.ts">retrieve</a>(jobId) -> GenerateRetrieveResponse</code>
- <code title="get /scoring_system/generate">client.scoringSystem.generate.<a href="./src/resources/scoring-system/generate.ts">list</a>({ ...params }) -> GenerateListResponse</code>
- <code title="delete /scoring_system/generate/{job_id}">client.scoringSystem.generate.<a href="./src/resources/scoring-system/generate.ts">cancel</a>(jobId) -> string</code>
- <code title="post /scoring_system/generate">client.scoringSystem.generate.<a href="./src/resources/scoring-system/generate.ts">startJob</a>({ ...params }) -> GenerateStartJobResponse</code>
- <code title="get /scoring_system/generate/{job_id}/messages">client.scoringSystem.generate.<a href="./src/resources/scoring-system/generate.ts">streamMessages</a>(jobId) -> string</code>

# Search

## QueryFanout

## QueryClassifier

Types:

- <code><a href="./src/resources/search/query-classifier.ts">QueryClassifierClassifyResponse</a></code>

Methods:

- <code title="post /search/query_classifier/classify">client.search.queryClassifier.<a href="./src/resources/search/query-classifier.ts">classify</a>({ ...params }) -> QueryClassifierClassifyResponse</code>

## Groundedness

Types:

- <code><a href="./src/resources/search/groundedness.ts">GroundednessCheckResponse</a></code>

Methods:

- <code title="post /search/groundedness/check">client.search.groundedness.<a href="./src/resources/search/groundedness.ts">check</a>({ ...params }) -> GroundednessCheckResponse</code>
