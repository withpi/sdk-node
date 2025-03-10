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
- <code><a href="./src/resources/shared.ts">SyntheticDataStatus</a></code>
- <code><a href="./src/resources/shared.ts">TrainedModel</a></code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataClusterInputsResponse</a></code>

Methods:

- <code title="post /data/cluster_inputs">client.data.<a href="./src/resources/data/data.ts">clusterInputs</a>({ ...params }) -> DataClusterInputsResponse</code>

## GenerateInputs

## GenerateExamples

## Generate

Types:

- <code><a href="./src/resources/data/generate.ts">GenerateListResponse</a></code>
- <code><a href="./src/resources/data/generate.ts">GenerateCancelResponse</a></code>
- <code><a href="./src/resources/data/generate.ts">GenerateStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate.ts">GenerateStreamMessagesResponse</a></code>

Methods:

- <code title="post /data/generate">client.data.generate.<a href="./src/resources/data/generate.ts">create</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/generate/{job_id}">client.data.generate.<a href="./src/resources/data/generate.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="get /data/generate">client.data.generate.<a href="./src/resources/data/generate.ts">list</a>({ ...params }) -> GenerateListResponse</code>
- <code title="delete /data/generate/{job_id}">client.data.generate.<a href="./src/resources/data/generate.ts">cancel</a>(jobId) -> string</code>
- <code title="get /data/generate/{job_id}/data">client.data.generate.<a href="./src/resources/data/generate.ts">streamData</a>(jobId) -> string</code>
- <code title="get /data/generate/{job_id}/messages">client.data.generate.<a href="./src/resources/data/generate.ts">streamMessages</a>(jobId) -> string</code>

## GenerateInputResponsePairs

Types:

- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairListResponse</a></code>
- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairCancelResponse</a></code>
- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate-input-response-pairs.ts">GenerateInputResponsePairStreamMessagesResponse</a></code>

Methods:

- <code title="post /data/generate_input_response_pairs">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">create</a>({ ...params }) -> SyntheticDataStatus</code>
- <code title="get /data/generate_input_response_pairs/{job_id}">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">retrieve</a>(jobId) -> SyntheticDataStatus</code>
- <code title="get /data/generate_input_response_pairs">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">list</a>({ ...params }) -> GenerateInputResponsePairListResponse</code>
- <code title="delete /data/generate_input_response_pairs/{job_id}">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">cancel</a>(jobId) -> string</code>
- <code title="get /data/generate_input_response_pairs/{job_id}/data">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">streamData</a>(jobId) -> GenerateInputResponsePairStreamDataResponse</code>
- <code title="get /data/generate_input_response_pairs/{job_id}/messages">client.data.generateInputResponsePairs.<a href="./src/resources/data/generate-input-response-pairs.ts">streamMessages</a>(jobId) -> string</code>

# Training

## Classifier

## Sft

Types:

- <code><a href="./src/resources/training/sft.ts">SftListResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftCancelResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftDownloadResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftLaunchResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftLoadResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftMessagesResponse</a></code>
- <code><a href="./src/resources/training/sft.ts">SftStatusResponse</a></code>

Methods:

- <code title="get /training/sft">client.training.sft.<a href="./src/resources/training/sft.ts">list</a>({ ...params }) -> SftListResponse</code>
- <code title="delete /training/sft/{job_id}">client.training.sft.<a href="./src/resources/training/sft.ts">cancel</a>(jobId) -> string</code>
- <code title="post /training/sft/{job_id}/download">client.training.sft.<a href="./src/resources/training/sft.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /training/sft">client.training.sft.<a href="./src/resources/training/sft.ts">launch</a>({ ...params }) -> SftLaunchResponse</code>
- <code title="post /training/sft/{job_id}/load">client.training.sft.<a href="./src/resources/training/sft.ts">load</a>(jobId) -> SftLoadResponse</code>
- <code title="get /training/sft/{job_id}/messages">client.training.sft.<a href="./src/resources/training/sft.ts">messages</a>(jobId) -> string</code>
- <code title="get /training/sft/{job_id}">client.training.sft.<a href="./src/resources/training/sft.ts">status</a>(jobId) -> SftStatusResponse</code>

## Grpo

Types:

- <code><a href="./src/resources/training/grpo.ts">GrpoListResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoCancelResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoDownloadResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoLaunchResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoLoadResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoMessagesResponse</a></code>
- <code><a href="./src/resources/training/grpo.ts">GrpoStatusResponse</a></code>

Methods:

- <code title="get /training/grpo">client.training.grpo.<a href="./src/resources/training/grpo.ts">list</a>({ ...params }) -> GrpoListResponse</code>
- <code title="delete /training/grpo/{job_id}">client.training.grpo.<a href="./src/resources/training/grpo.ts">cancel</a>(jobId) -> string</code>
- <code title="post /training/grpo/{job_id}/download">client.training.grpo.<a href="./src/resources/training/grpo.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /training/grpo">client.training.grpo.<a href="./src/resources/training/grpo.ts">launch</a>({ ...params }) -> GrpoLaunchResponse</code>
- <code title="post /training/grpo/{job_id}/load">client.training.grpo.<a href="./src/resources/training/grpo.ts">load</a>(jobId) -> GrpoLoadResponse</code>
- <code title="get /training/grpo/{job_id}/messages">client.training.grpo.<a href="./src/resources/training/grpo.ts">messages</a>(jobId) -> string</code>
- <code title="get /training/grpo/{job_id}">client.training.grpo.<a href="./src/resources/training/grpo.ts">status</a>(jobId) -> GrpoStatusResponse</code>

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

# Scorers

## Calibrate

# Rag

# ScoringSystem

Types:

- <code><a href="./src/resources/scoring-system/scoring-system.ts">ScoringSystemScoreResponse</a></code>

Methods:

- <code title="post /scoring_system/generate">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">generate</a>({ ...params }) -> Scorer</code>
- <code title="post /scoring_system/from_huggingface">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">readFromHuggingface</a>({ ...params }) -> Scorer</code>
- <code title="post /scoring_system/score">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">score</a>({ ...params }) -> ScoringSystemScoreResponse</code>

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
- <code><a href="./src/resources/search/query-classifier/distill.ts">DistillMessagesResponse</a></code>

Methods:

- <code title="post /search/query_classifier/distill">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">create</a>({ ...params }) -> ClassificationStatus</code>
- <code title="get /search/query_classifier/distill/{job_id}">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">retrieve</a>(jobId) -> ClassificationStatus</code>
- <code title="get /search/query_classifier/distill">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">list</a>({ ...params }) -> DistillListResponse</code>
- <code title="delete /search/query_classifier/distill/{job_id}">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">cancel</a>(jobId) -> string</code>
- <code title="post /search/query_classifier/distill/{job_id}/download">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="get /search/query_classifier/distill/{job_id}/messages">client.search.queryClassifier.distill.<a href="./src/resources/search/query-classifier/distill.ts">messages</a>(jobId) -> string</code>

## QueryFanout

Types:

- <code><a href="./src/resources/search/query-fanout.ts">QueryFanoutGenerateResponse</a></code>

Methods:

- <code title="post /search/query_fanout/generate">client.search.queryFanout.<a href="./src/resources/search/query-fanout.ts">generate</a>({ ...params }) -> QueryFanoutGenerateResponse</code>
