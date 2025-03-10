# Shared

Types:

- <code><a href="./src/resources/shared.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/shared.ts">ScoringSystemMetrics</a></code>
- <code><a href="./src/resources/shared.ts">SDKExample</a></code>
- <code><a href="./src/resources/shared.ts">SftStatus</a></code>
- <code><a href="./src/resources/shared.ts">SyntheticDataStatus</a></code>

# Contracts

## Calibrate

Types:

- <code><a href="./src/resources/contracts/calibrate.ts">CalibrationStrategy</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">SDKLabeledExample</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">SDKPreferenceExample</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">State</a></code>

# Data

## GenerateSyntheticData

Types:

- <code><a href="./src/resources/data/generate-synthetic-data.ts">SDKExplorationMode</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataListResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataCancelResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/generate_synthetic_data/{job_id}">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">retrieve</a>(jobId) -> SyntheticDataStatus</code>
- <code title="get /data/generate_synthetic_data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">list</a>({ ...params }) -> GenerateSyntheticDataListResponse</code>
- <code title="delete /data/generate_synthetic_data/{job_id}">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">cancel</a>(jobId) -> string</code>
- <code title="post /data/generate_synthetic_data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">startJob</a>({ ...params }) -> SyntheticDataStatus</code>
- <code title="get /data/generate_synthetic_data/{job_id}/data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">streamData</a>(jobId) -> GenerateSyntheticDataStreamDataResponse</code>
- <code title="get /data/generate_synthetic_data/{job_id}/messages">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">streamMessages</a>(jobId) -> string</code>

## Inputs

Types:

- <code><a href="./src/resources/data/inputs/inputs.ts">InputClusterResponse</a></code>

Methods:

- <code title="post /data/input/cluster">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">cluster</a>({ ...params }) -> InputClusterResponse</code>

### GenerateFromSeeds

Types:

- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedListResponse</a></code>
- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedCancelResponse</a></code>
- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedStreamDataResponse</a></code>
- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/input/generate_from_seeds/{job_id}">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="get /data/input/generate_from_seeds">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">list</a>({ ...params }) -> GenerateFromSeedListResponse</code>
- <code title="delete /data/input/generate_from_seeds/{job_id}">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">cancel</a>(jobId) -> string</code>
- <code title="post /data/input/generate_from_seeds">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">startJob</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/data">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">streamData</a>(jobId) -> string</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/messages">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">streamMessages</a>(jobId) -> string</code>

# Model

## Classifier

Types:

- <code><a href="./src/resources/model/classifier.ts">ClassificationStatus</a></code>
- <code><a href="./src/resources/model/classifier.ts">TrainedModel</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierListResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierCancelResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierDownloadResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierStreamMessagesResponse</a></code>

Methods:

- <code title="get /model/classifier/{job_id}">client.model.classifier.<a href="./src/resources/model/classifier.ts">retrieve</a>(jobId) -> ClassificationStatus</code>
- <code title="get /model/classifier">client.model.classifier.<a href="./src/resources/model/classifier.ts">list</a>({ ...params }) -> ClassifierListResponse</code>
- <code title="delete /model/classifier/{job_id}">client.model.classifier.<a href="./src/resources/model/classifier.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/classifier/{job_id}/download">client.model.classifier.<a href="./src/resources/model/classifier.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /model/classifier">client.model.classifier.<a href="./src/resources/model/classifier.ts">startJob</a>({ ...params }) -> ClassificationStatus</code>
- <code title="get /model/classifier/{job_id}/messages">client.model.classifier.<a href="./src/resources/model/classifier.ts">streamMessages</a>(jobId) -> string</code>

## Rl

### Grpo

Types:

- <code><a href="./src/resources/model/rl/grpo.ts">LoraConfig</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">RlGrpoStatus</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">TextGenerationBaseModel</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoListResponse</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoCancelResponse</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoDownloadResponse</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoStreamMessagesResponse</a></code>

Methods:

- <code title="get /model/rl/grpo/{job_id}">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">retrieve</a>(jobId) -> RlGrpoStatus</code>
- <code title="get /model/rl/grpo">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">list</a>({ ...params }) -> GrpoListResponse</code>
- <code title="delete /model/rl/grpo/{job_id}">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/rl/grpo/{job_id}/download">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /model/rl/grpo/{job_id}/load">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">load</a>(jobId) -> RlGrpoStatus</code>
- <code title="post /model/rl/grpo">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">startJob</a>({ ...params }) -> RlGrpoStatus</code>
- <code title="get /model/rl/grpo/{job_id}/messages">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">streamMessages</a>(jobId) -> string</code>

## Sft

Types:

- <code><a href="./src/resources/model/sft.ts">SftListResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftCancelResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftDownloadResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftStreamMessagesResponse</a></code>

Methods:

- <code title="get /model/sft/{job_id}">client.model.sft.<a href="./src/resources/model/sft.ts">retrieve</a>(jobId) -> SftStatus</code>
- <code title="get /model/sft">client.model.sft.<a href="./src/resources/model/sft.ts">list</a>({ ...params }) -> SftListResponse</code>
- <code title="delete /model/sft/{job_id}">client.model.sft.<a href="./src/resources/model/sft.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/sft/{job_id}/download">client.model.sft.<a href="./src/resources/model/sft.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /model/sft/{job_id}/load">client.model.sft.<a href="./src/resources/model/sft.ts">load</a>(jobId) -> SftStatus</code>
- <code title="post /model/sft">client.model.sft.<a href="./src/resources/model/sft.ts">startJob</a>({ ...params }) -> SftStatus</code>
- <code title="get /model/sft/{job_id}/messages">client.model.sft.<a href="./src/resources/model/sft.ts">streamMessages</a>(jobId) -> string</code>

# PiScoringSystem

## Calibrate

Types:

- <code><a href="./src/resources/pi-scoring-system/calibrate.ts">ScoringSystemCalibrationStatus</a></code>

# Prompt

## Optimize

Types:

- <code><a href="./src/resources/prompt/optimize.ts">PromptOptimizationStatus</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeListResponse</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeCancelResponse</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeStreamMessagesResponse</a></code>

Methods:

- <code title="get /prompt/optimize/{job_id}">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">retrieve</a>(jobId) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">list</a>({ ...params }) -> OptimizeListResponse</code>
- <code title="delete /prompt/optimize/{job_id}">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">cancel</a>(jobId) -> string</code>
- <code title="post /prompt/optimize">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">startJob</a>({ ...params }) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize/{job_id}/messages">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">streamMessages</a>(jobId) -> string</code>

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryFanoutExample</a></code>
- <code><a href="./src/resources/queries.ts">QueryClassifyResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryGenerateFanoutsResponse</a></code>

Methods:

- <code title="post /queries/classify">client.queries.<a href="./src/resources/queries.ts">classify</a>({ ...params }) -> QueryClassifyResponse</code>
- <code title="post /queries/generate_fanouts">client.queries.<a href="./src/resources/queries.ts">generateFanouts</a>({ ...params }) -> QueryGenerateFanoutsResponse</code>

# Scorer

Types:

- <code><a href="./src/resources/scorer/scorer.ts">ScorerGenerateDimensionsResponse</a></code>
- <code><a href="./src/resources/scorer/scorer.ts">ScorerReadFromHfResponse</a></code>

Methods:

- <code title="post /scorer/generate_dimensions">client.scorer.<a href="./src/resources/scorer/scorer.ts">generateDimensions</a>({ ...params }) -> ScorerGenerateDimensionsResponse</code>
- <code title="post /scorer/read_from_hf">client.scorer.<a href="./src/resources/scorer/scorer.ts">readFromHf</a>({ ...params }) -> ScorerReadFromHfResponse</code>
- <code title="post /scorer/score">client.scorer.<a href="./src/resources/scorer/scorer.ts">score</a>({ ...params }) -> ScoringSystemMetrics</code>

## Calibrate

Types:

- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateListResponse</a></code>
- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateCancelResponse</a></code>
- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateMessagesResponse</a></code>

Methods:

- <code title="post /scorer/calibrate">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">create</a>({ ...params }) -> ScoringSystemCalibrationStatus</code>
- <code title="get /scorer/calibrate/{job_id}">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">retrieve</a>(jobId) -> ScoringSystemCalibrationStatus</code>
- <code title="get /scorer/calibrate">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">list</a>({ ...params }) -> CalibrateListResponse</code>
- <code title="delete /scorer/calibrate/{job_id}">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">cancel</a>(jobId) -> string</code>
- <code title="get /scorer/calibrate/{job_id}/messages">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">messages</a>(jobId) -> string</code>
