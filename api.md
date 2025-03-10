# Shared

Types:

- <code><a href="./src/resources/shared.ts">ClassificationStatus</a></code>
- <code><a href="./src/resources/shared.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/shared.ts">ExplorationMode</a></code>
- <code><a href="./src/resources/shared.ts">PromptOptimizationStatus</a></code>
- <code><a href="./src/resources/shared.ts">QueryFanoutExample</a></code>
- <code><a href="./src/resources/shared.ts">Scorer</a></code>
- <code><a href="./src/resources/shared.ts">ScorerDimension</a></code>
- <code><a href="./src/resources/shared.ts">ScorerSubDimension</a></code>
- <code><a href="./src/resources/shared.ts">ScoringSystemMetrics</a></code>
- <code><a href="./src/resources/shared.ts">SftStatus</a></code>
- <code><a href="./src/resources/shared.ts">SyntheticDataStatus</a></code>
- <code><a href="./src/resources/shared.ts">TrainedModel</a></code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataClusterInputsResponse</a></code>

Methods:

- <code title="post /data/cluster_inputs">client.data.<a href="./src/resources/data/data.ts">clusterInputs</a>({ ...params }) -> DataClusterInputsResponse</code>

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

Types:

- <code><a href="./src/resources/training/sft.ts">SftListResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftCancelResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftDownloadResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftStreamMessagesResponse</a></code>

Methods:

- <code title="get /training/sft/{job_id}">client.training.sft.<a href="./src/resources/training/sft.ts">retrieve</a>(jobId) -> SftStatus</code>
- <code title="get /training/sft">client.training.sft.<a href="./src/resources/training/sft.ts">list</a>({ ...params }) -> SftListResponse</code>
- <code title="delete /training/sft/{job_id}">client.training.sft.<a href="./src/resources/training/sft.ts">cancel</a>(jobId) -> string</code>
- <code title="post /training/sft/{job_id}/download">client.training.sft.<a href="./src/resources/training/sft.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /training/sft/{job_id}/load">client.training.sft.<a href="./src/resources/training/sft.ts">load</a>(jobId) -> SftStatus</code>
- <code title="post /training/sft">client.training.sft.<a href="./src/resources/training/sft.ts">startJob</a>({ ...params }) -> SftStatus</code>
- <code title="get /training/sft/{job_id}/messages">client.training.sft.<a href="./src/resources/training/sft.ts">streamMessages</a>(jobId) -> string</code>

## Grpo

Types:

- <code><a href="./src/resources/training/grpo.ts">GrpoRetrieveResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoListResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoCancelResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoDownloadResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoLoadResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoStartJobResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoStreamMessagesResponse</a></code>

Methods:

- <code title="get /training/grpo/{job_id}">client.training.grpo.<a href="./src/resources/training/grpo.ts">retrieve</a>(jobId) -> GrpoRetrieveResponse</code>
- <code title="get /training/grpo">client.training.grpo.<a href="./src/resources/training/grpo.ts">list</a>({ ...params }) -> GrpoListResponse</code>
- <code title="delete /training/grpo/{job_id}">client.training.grpo.<a href="./src/resources/training/grpo.ts">cancel</a>(jobId) -> string</code>
- <code title="post /training/grpo/{job_id}/download">client.training.grpo.<a href="./src/resources/training/grpo.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /training/grpo/{job_id}/load">client.training.grpo.<a href="./src/resources/training/grpo.ts">load</a>(jobId) -> GrpoLoadResponse</code>
- <code title="post /training/grpo">client.training.grpo.<a href="./src/resources/training/grpo.ts">startJob</a>({ ...params }) -> GrpoStartJobResponse</code>
- <code title="get /training/grpo/{job_id}/messages">client.training.grpo.<a href="./src/resources/training/grpo.ts">streamMessages</a>(jobId) -> string</code>

# Prompt

## Optimize

Types:

- <code><a href="./src/resources/prompt/optimize.ts">OptimizeListResponse</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeCancelResponse</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeStreamMessagesResponse</a></code>

Methods:

- <code title="get /prompt/optimize/{job_id}">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">retrieve</a>(jobId) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">list</a>({ ...params }) -> OptimizeListResponse</code>
- <code title="delete /prompt/optimize/{job_id}">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">cancel</a>(jobId) -> string</code>
- <code title="post /prompt/optimize">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">startJob</a>({ ...params }) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize/{job_id}/messages">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">streamMessages</a>(jobId) -> string</code>

# ScoringSystem

Methods:

- <code title="post /scoring_system/from_huggingface">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">fromHuggingface</a>({ ...params }) -> Scorer</code>
- <code title="post /scoring_system/generate">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">generate</a>({ ...params }) -> Scorer</code>
- <code title="post /scoring_system/score">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">score</a>({ ...params }) -> ScoringSystemMetrics</code>

## Calibrate

Types:

- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateCreateResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateRetrieveResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateListResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateCancelResponse</a></code>
- <code><a href="./src/resources/scoring-system/calibrate.ts">CalibrateMessagesResponse</a></code>

Methods:

- <code title="post /scoring_system/calibrate">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">create</a>({ ...params }) -> CalibrateCreateResponse</code>
- <code title="get /scoring_system/calibrate/{job_id}">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">retrieve</a>(jobId) -> CalibrateRetrieveResponse</code>
- <code title="get /scoring_system/calibrate">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">list</a>({ ...params }) -> CalibrateListResponse</code>
- <code title="delete /scoring_system/calibrate/{job_id}">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">cancel</a>(jobId) -> string</code>
- <code title="get /scoring_system/calibrate/{job_id}/messages">client.scoringSystem.calibrate.<a href="./src/resources/scoring-system/calibrate.ts">messages</a>(jobId) -> string</code>

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

Types:

- <code><a href="./src/resources/search/query-classifier/distill.ts">DistillListResponse</a></code>
- <code><a href="./src/resources/search/query-classifier/distill.ts">DistillCancelResponse</a></code>
- <code><a href="./src/resources/search/query-classifier/distill.ts">DistillDownloadResponse</a></code>
- <code><a href="./src/resources/search/query-classifier/distill.ts">DistillStreamMessagesResponse</a></code>

Methods:

- <code title="get /search/query_classifier/distill/{job_id}">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">retrieve</a>(jobId) -> ClassificationStatus</code>
- <code title="get /search/query_classifier/distill">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">list</a>({ ...params }) -> DistillListResponse</code>
- <code title="delete /search/query_classifier/distill/{job_id}">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">cancel</a>(jobId) -> string</code>
- <code title="post /search/query_classifier/distill/{job_id}/download">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /search/query_classifier/distill">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">startJob</a>({ ...params }) -> ClassificationStatus</code>
- <code title="get /search/query_classifier/distill/{job_id}/messages">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">streamMessages</a>(jobId) -> string</code>
