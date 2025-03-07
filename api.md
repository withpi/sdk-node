# Shared

Types:

- <code><a href="./src/resources/shared.ts">Contract</a></code>
- <code><a href="./src/resources/shared.ts">ContractCalibrationStatus</a></code>
- <code><a href="./src/resources/shared.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/shared.ts">Dimension</a></code>
- <code><a href="./src/resources/shared.ts">DimensionScoringType</a></code>
- <code><a href="./src/resources/shared.ts">Example</a></code>
- <code><a href="./src/resources/shared.ts">ExplorationMode</a></code>
- <code><a href="./src/resources/shared.ts">LoraConfig</a></code>
- <code><a href="./src/resources/shared.ts">PromptOptimizationStatus</a></code>
- <code><a href="./src/resources/shared.ts">QueryClassificationResponse</a></code>
- <code><a href="./src/resources/shared.ts">QueryFanoutExample</a></code>
- <code><a href="./src/resources/shared.ts">RlGrpoStatus</a></code>
- <code><a href="./src/resources/shared.ts">SftStatus</a></code>
- <code><a href="./src/resources/shared.ts">State</a></code>
- <code><a href="./src/resources/shared.ts">SubDimension</a></code>
- <code><a href="./src/resources/shared.ts">SyntheticDataStatus</a></code>
- <code><a href="./src/resources/shared.ts">TrainedModel</a></code>

# Data

## Inputs

Types:

- <code><a href="./src/resources/data/inputs/inputs.ts">InputTopicCluster</a></code>
- <code><a href="./src/resources/data/inputs/inputs.ts">InputClusterResponse</a></code>

Methods:

- <code title="post /data/input/cluster">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">cluster</a>({ ...params }) -> InputClusterResponse</code>

### GenerateFromSeeds

Types:

- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedCancelResponse</a></code>
- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedListJobsResponse</a></code>
- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedStreamDataResponse</a></code>
- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/input/generate_from_seeds/{job_id}">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="delete /data/input/generate_from_seeds/{job_id}">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">cancel</a>(jobId) -> string</code>
- <code title="post /data/input/generate_from_seeds">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">generate</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/input/generate_from_seeds">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">listJobs</a>({ ...params }) -> GenerateFromSeedListJobsResponse</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/data">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">streamData</a>(jobId) -> string</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/messages">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">streamMessages</a>(jobId) -> string</code>

## GenerateSyntheticData

Types:

- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataCancelResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataListJobsResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate-synthetic-data.ts">GenerateSyntheticDataStreamMessagesResponse</a></code>

Methods:

- <code title="post /data/generate_synthetic_data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">create</a>({ ...params }) -> SyntheticDataStatus</code>
- <code title="get /data/generate_synthetic_data/{job_id}">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">retrieve</a>(jobId) -> SyntheticDataStatus</code>
- <code title="delete /data/generate_synthetic_data/{job_id}">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">cancel</a>(jobId) -> string</code>
- <code title="get /data/generate_synthetic_data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">listJobs</a>({ ...params }) -> GenerateSyntheticDataListJobsResponse</code>
- <code title="get /data/generate_synthetic_data/{job_id}/data">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">streamData</a>(jobId) -> GenerateSyntheticDataStreamDataResponse</code>
- <code title="get /data/generate_synthetic_data/{job_id}/messages">client.data.generateSyntheticData.<a href="./src/resources/data/generate-synthetic-data.ts">streamMessages</a>(jobId) -> string</code>

# Prompt

Types:

- <code><a href="./src/resources/prompt.ts">PromptCancelOptimizationJobResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptListOptimizationJobsResponse</a></code>
- <code><a href="./src/resources/prompt.ts">PromptStreamMessagesResponse</a></code>

Methods:

- <code title="get /prompt/optimize/{job_id}">client.prompt.<a href="./src/resources/prompt.ts">retrieve</a>(jobId) -> PromptOptimizationStatus</code>
- <code title="delete /prompt/optimize/{job_id}">client.prompt.<a href="./src/resources/prompt.ts">cancelOptimizationJob</a>(jobId) -> string</code>
- <code title="get /prompt/optimize">client.prompt.<a href="./src/resources/prompt.ts">listOptimizationJobs</a>({ ...params }) -> PromptListOptimizationJobsResponse</code>
- <code title="post /prompt/optimize">client.prompt.<a href="./src/resources/prompt.ts">optimize</a>({ ...params }) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize/{job_id}/messages">client.prompt.<a href="./src/resources/prompt.ts">streamMessages</a>(jobId) -> string</code>

# Model

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

## Rl

### Grpo

Types:

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

## Classifier

Types:

- <code><a href="./src/resources/model/classifier.ts">ClassifierCreateResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierRetrieveResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierListResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierCancelResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierDownloadResponse</a></code>
- <code><a href="./src/resources/model/classifier.ts">ClassifierMessagesResponse</a></code>

Methods:

- <code title="post /model/classifier">client.model.classifier.<a href="./src/resources/model/classifier.ts">create</a>({ ...params }) -> ClassifierCreateResponse</code>
- <code title="get /model/classifier/{job_id}">client.model.classifier.<a href="./src/resources/model/classifier.ts">retrieve</a>(jobId) -> ClassifierRetrieveResponse</code>
- <code title="get /model/classifier">client.model.classifier.<a href="./src/resources/model/classifier.ts">list</a>({ ...params }) -> ClassifierListResponse</code>
- <code title="delete /model/classifier/{job_id}">client.model.classifier.<a href="./src/resources/model/classifier.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/classifier/{job_id}/download">client.model.classifier.<a href="./src/resources/model/classifier.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="get /model/classifier/{job_id}/messages">client.model.classifier.<a href="./src/resources/model/classifier.ts">messages</a>(jobId) -> string</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts/contracts.ts">ContractsScoreMetrics</a></code>

Methods:

- <code title="post /contracts/generate_dimensions">client.contracts.<a href="./src/resources/contracts/contracts.ts">generateDimensions</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/read_from_hf">client.contracts.<a href="./src/resources/contracts/contracts.ts">readFromHf</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/score">client.contracts.<a href="./src/resources/contracts/contracts.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>

## Calibrate

Types:

- <code><a href="./src/resources/contracts/calibrate.ts">CalibrateListResponse</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">CalibrateCancelResponse</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">CalibrateStreamMessagesResponse</a></code>

Methods:

- <code title="get /contracts/calibrate/{job_id}">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">retrieve</a>(jobId) -> ContractCalibrationStatus</code>
- <code title="get /contracts/calibrate">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">list</a>({ ...params }) -> CalibrateListResponse</code>
- <code title="delete /contracts/calibrate/{job_id}">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">cancel</a>(jobId) -> string</code>
- <code title="post /contracts/calibrate">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">startJob</a>({ ...params }) -> ContractCalibrationStatus</code>
- <code title="get /contracts/calibrate/{job_id}/messages">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">streamMessages</a>(jobId) -> string</code>

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryGenerateFanoutsResponse</a></code>

Methods:

- <code title="post /queries/classify">client.queries.<a href="./src/resources/queries.ts">classify</a>({ ...params }) -> QueryClassificationResponse</code>
- <code title="post /queries/generate_fanouts">client.queries.<a href="./src/resources/queries.ts">generateFanouts</a>({ ...params }) -> QueryGenerateFanoutsResponse</code>
