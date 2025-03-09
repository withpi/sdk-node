# Contracts

Types:

- <code><a href="./src/resources/contracts/contracts.ts">SDKContract</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractScoreResponse</a></code>

Methods:

- <code title="post /contracts/generate_dimensions">client.contracts.<a href="./src/resources/contracts/contracts.ts">generateDimensions</a>({ ...params }) -> SDKContract</code>
- <code title="post /contracts/read_from_hf">client.contracts.<a href="./src/resources/contracts/contracts.ts">readFromHf</a>({ ...params }) -> SDKContract</code>
- <code title="post /contracts/score">client.contracts.<a href="./src/resources/contracts/contracts.ts">score</a>({ ...params }) -> ContractScoreResponse</code>

## Calibrate

Types:

- <code><a href="./src/resources/contracts/calibrate.ts">ContractCalibrationStatus</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">State</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">CalibrateListResponse</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">CalibrateCancelResponse</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">CalibrateMessagesResponse</a></code>

Methods:

- <code title="get /contracts/calibrate">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">list</a>({ ...params }) -> CalibrateListResponse</code>
- <code title="delete /contracts/calibrate/{job_id}">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">cancel</a>(jobId) -> string</code>
- <code title="post /contracts/calibrate">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">launch</a>({ ...params }) -> ContractCalibrationStatus</code>
- <code title="get /contracts/calibrate/{job_id}/messages">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">messages</a>(jobId) -> string</code>
- <code title="get /contracts/calibrate/{job_id}">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">status</a>(jobId) -> ContractCalibrationStatus</code>

# Data

## GenerateSyntheticData

Types:

- <code><a href="./src/resources/data/generate-synthetic-data.ts">SDKExample</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">SDKExplorationMode</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">SyntheticDataStatus</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataListResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataCancelResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataStreamMessagesResponse</a></code>

Methods:

- <code title="post /data/generate_synthetic_data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">create</a>({ ...params }) -> SyntheticDataStatus</code>
- <code title="get /data/generate_synthetic_data/{job_id}">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">retrieve</a>(jobId) -> SyntheticDataStatus</code>
- <code title="get /data/generate_synthetic_data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">list</a>({ ...params }) -> GenerateSyntheticDataListResponse</code>
- <code title="delete /data/generate_synthetic_data/{job_id}">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">cancel</a>(jobId) -> string</code>
- <code title="get /data/generate_synthetic_data/{job_id}/data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">streamData</a>(jobId) -> GenerateSyntheticDataStreamDataResponse</code>
- <code title="get /data/generate_synthetic_data/{job_id}/messages">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">streamMessages</a>(jobId) -> string</code>

## Input

Types:

- <code><a href="./src/resources/data/input/input.ts">InputClusterResponse</a></code>

Methods:

- <code title="post /data/input/cluster">client.data.input.<a href="./src/resources/data/input/input.ts">cluster</a>({ ...params }) -> InputClusterResponse</code>

### GenerateFromSeeds

Types:

- <code><a href="./src/resources/data/input/generate-from-seeds.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/data/input/generate-from-seeds.ts">GenerateFromSeedListResponse</a></code>
- <code><a href="./src/resources/data/input/generate-from-seeds.ts">GenerateFromSeedCancelResponse</a></code>
- <code><a href="./src/resources/data/input/generate-from-seeds.ts">GenerateFromSeedStreamDataResponse</a></code>
- <code><a href="./src/resources/data/input/generate-from-seeds.ts">GenerateFromSeedStreamMessagesResponse</a></code>

Methods:

- <code title="post /data/input/generate_from_seeds">client.data.input.generateFromSeeds.<a href="./src/resources/data/input/generate-from-seeds.ts">create</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/input/generate_from_seeds/{job_id}">client.data.input.generateFromSeeds.<a href="./src/resources/data/input/generate-from-seeds.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="get /data/input/generate_from_seeds">client.data.input.generateFromSeeds.<a href="./src/resources/data/input/generate-from-seeds.ts">list</a>({ ...params }) -> GenerateFromSeedListResponse</code>
- <code title="delete /data/input/generate_from_seeds/{job_id}">client.data.input.generateFromSeeds.<a href="./src/resources/data/input/generate-from-seeds.ts">cancel</a>(jobId) -> string</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/data">client.data.input.generateFromSeeds.<a href="./src/resources/data/input/generate-from-seeds.ts">streamData</a>(jobId) -> string</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/messages">client.data.input.generateFromSeeds.<a href="./src/resources/data/input/generate-from-seeds.ts">streamMessages</a>(jobId) -> string</code>

# Model

## Classifier

Types:

- <code><a href="./src/resources/model/classifier.ts">ClassificationStatus</a></code>
- <code><a href="./src/resources/model/classifier.ts">TrainedModel</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierListResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierCancelResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierDownloadResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierMessagesResponse</a></code>

Methods:

- <code title="post /model/classifier">client.model.classifier.<a href="./src/resources/model/classifier.ts">create</a>({ ...params }) -> ClassificationStatus</code>
- <code title="get /model/classifier/{job_id}">client.model.classifier.<a href="./src/resources/model/classifier.ts">retrieve</a>(jobId) -> ClassificationStatus</code>
- <code title="get /model/classifier">client.model.classifier.<a href="./src/resources/model/classifier.ts">list</a>({ ...params }) -> ClassifierListResponse</code>
- <code title="delete /model/classifier/{job_id}">client.model.classifier.<a href="./src/resources/model/classifier.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/classifier/{job_id}/download">client.model.classifier.<a href="./src/resources/model/classifier.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="get /model/classifier/{job_id}/messages">client.model.classifier.<a href="./src/resources/model/classifier.ts">messages</a>(jobId) -> string</code>

## Rl

### Grpo

Types:

- <code><a href="./src/resources/model/rl/grpo.ts">LoraConfig</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">RlGrpoStatus</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">TextGenerationBaseModel</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoListResponse</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoCancelResponse</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoDownloadResponse</a></code>
- <code><a href="./src/resources/model/rl/grpo.ts">GrpoMessagesResponse</a></code>

Methods:

- <code title="post /model/rl/grpo">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">create</a>({ ...params }) -> RlGrpoStatus</code>
- <code title="get /model/rl/grpo/{job_id}">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">retrieve</a>(jobId) -> RlGrpoStatus</code>
- <code title="get /model/rl/grpo">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">list</a>({ ...params }) -> GrpoListResponse</code>
- <code title="delete /model/rl/grpo/{job_id}">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/rl/grpo/{job_id}/download">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /model/rl/grpo/{job_id}/load">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">load</a>(jobId) -> RlGrpoStatus</code>
- <code title="get /model/rl/grpo/{job_id}/messages">client.model.rl.grpo.<a href="./src/resources/model/rl/grpo.ts">messages</a>(jobId) -> string</code>

## Sft

Types:

- <code><a href="./src/resources/model/sft.ts">SftStatus</a></code>
- <code><a href="./src/resources/model/sft.ts">SftListResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftCancelResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftDownloadResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftMessagesResponse</a></code>

Methods:

- <code title="post /model/sft">client.model.sft.<a href="./src/resources/model/sft.ts">create</a>({ ...params }) -> SftStatus</code>
- <code title="get /model/sft/{job_id}">client.model.sft.<a href="./src/resources/model/sft.ts">retrieve</a>(jobId) -> SftStatus</code>
- <code title="get /model/sft">client.model.sft.<a href="./src/resources/model/sft.ts">list</a>({ ...params }) -> SftListResponse</code>
- <code title="delete /model/sft/{job_id}">client.model.sft.<a href="./src/resources/model/sft.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/sft/{job_id}/download">client.model.sft.<a href="./src/resources/model/sft.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /model/sft/{job_id}/load">client.model.sft.<a href="./src/resources/model/sft.ts">load</a>(jobId) -> SftStatus</code>
- <code title="get /model/sft/{job_id}/messages">client.model.sft.<a href="./src/resources/model/sft.ts">messages</a>(jobId) -> string</code>

# Prompt

## Optimize

Types:

- <code><a href="./src/resources/prompt/optimize.ts">PromptOptimizationStatus</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeListResponse</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeCancelResponse</a></code>
- <code><a href="./src/resources/prompt/optimize.ts">OptimizeMessagesResponse</a></code>

Methods:

- <code title="post /prompt/optimize">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">create</a>({ ...params }) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize/{job_id}">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">retrieve</a>(jobId) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">list</a>({ ...params }) -> OptimizeListResponse</code>
- <code title="delete /prompt/optimize/{job_id}">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">cancel</a>(jobId) -> string</code>
- <code title="get /prompt/optimize/{job_id}/messages">client.prompt.optimize.<a href="./src/resources/prompt/optimize.ts">messages</a>(jobId) -> string</code>

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryFanoutExample</a></code>
- <code><a href="./src/resources/queries.ts">QueryClassifyResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryGenerateFanoutsResponse</a></code>

Methods:

- <code title="post /queries/classify">client.queries.<a href="./src/resources/queries.ts">classify</a>({ ...params }) -> QueryClassifyResponse</code>
- <code title="post /queries/generate_fanouts">client.queries.<a href="./src/resources/queries.ts">generateFanouts</a>({ ...params }) -> QueryGenerateFanoutsResponse</code>

# ScoringSystem

Types:

- <code><a href="./src/resources/scoring-system/scoring-system.ts">ScoringSystemGenerateDimensionsResponse</a></code>
- <code><a href="./src/resources/scoring-system/scoring-system.ts">ScoringSystemReadFromHfResponse</a></code>
- <code><a href="./src/resources/scoring-system/scoring-system.ts">ScoringSystemScoreResponse</a></code>

Methods:

- <code title="post /scoring_system/generate_dimensions">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">generateDimensions</a>({ ...params }) -> ScoringSystemGenerateDimensionsResponse</code>
- <code title="post /scoring_system/read_from_hf">client.scoringSystem.<a href="./src/resources/scoring-system/scoring-system.ts">readFromHf</a>({ ...params }) -> ScoringSystemReadFromHfResponse</code>
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
