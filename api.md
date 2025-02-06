# Shared

Types:

- <code><a href="./src/resources/shared.ts">Contract</a></code>
- <code><a href="./src/resources/shared.ts">Dimension</a></code>
- <code><a href="./src/resources/shared.ts">SubDimension</a></code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataGenerationStatus</a></code>

## Inputs

Types:

- <code><a href="./src/resources/data/inputs/inputs.ts">InputTopicCluster</a></code>
- <code><a href="./src/resources/data/inputs/inputs.ts">InputClusterResponse</a></code>

Methods:

- <code title="post /data/input/cluster">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">cluster</a>([ ...inputs ]) -> InputClusterResponse</code>
- <code title="post /data/input/generate_seeds">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">generateSeeds</a>({ ...params }) -> DataGenerationStatus</code>

### GenerateFromSeeds

Types:

- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/input/generate_from_seeds/{job_id}">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="post /data/input/generate_from_seeds">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">generate</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/messages">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">streamMessages</a>(jobId) -> string</code>

# Prompt

Types:

- <code><a href="./src/resources/prompt.ts">PromptOptimizationStatus</a></code>
- <code><a href="./src/resources/prompt.ts">PromptStreamMessagesResponse</a></code>

Methods:

- <code title="get /prompt/optimize/{job_id}">client.prompt.<a href="./src/resources/prompt.ts">getStatus</a>(jobId) -> PromptOptimizationStatus</code>
- <code title="post /prompt/optimize">client.prompt.<a href="./src/resources/prompt.ts">optimize</a>({ ...params }) -> PromptOptimizationStatus</code>
- <code title="get /prompt/optimize/{job_id}/messages">client.prompt.<a href="./src/resources/prompt.ts">streamMessages</a>(jobId) -> string</code>

# Model

## Sft

Types:

- <code><a href="./src/resources/model/sft/sft.ts">SftStatus</a></code>
- <code><a href="./src/resources/model/sft/sft.ts">SftStreamMessagesResponse</a></code>

Methods:

- <code title="get /model/sft/{job_id}">client.model.sft.<a href="./src/resources/model/sft/sft.ts">retrieve</a>(jobId) -> SftStatus</code>
- <code title="post /model/sft">client.model.sft.<a href="./src/resources/model/sft/sft.ts">startJob</a>({ ...params }) -> SftStatus</code>
- <code title="get /model/sft/{job_id}/messages">client.model.sft.<a href="./src/resources/model/sft/sft.ts">streamMessages</a>(jobId) -> string</code>

### Messages

Types:

- <code><a href="./src/resources/model/sft/messages.ts">MessageStreamResponse</a></code>

Methods:

- <code title="get /model/sft/{job_id}/messages">client.model.sft.messages.<a href="./src/resources/model/sft/messages.ts">stream</a>(jobId) -> string</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts/contracts.ts">ContractsScoreMetrics</a></code>

Methods:

- <code title="post /contracts/generate_dimensions">client.contracts.<a href="./src/resources/contracts/contracts.ts">generateDimensions</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/score">client.contracts.<a href="./src/resources/contracts/contracts.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>

## Calibrate

Types:

- <code><a href="./src/resources/contracts/calibrate.ts">ContractCalibrationStatus</a></code>
- <code><a href="./src/resources/contracts/calibrate.ts">CalibrateStreamMessagesResponse</a></code>

Methods:

- <code title="get /contracts/calibrate/{job_id}">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">retrieve</a>(jobId) -> ContractCalibrationStatus</code>
- <code title="post /contracts/calibrate">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">startJob</a>({ ...params }) -> ContractCalibrationStatus</code>
- <code title="get /contracts/calibrate/{job_id}/messages">client.contracts.calibrate.<a href="./src/resources/contracts/calibrate.ts">streamMessages</a>(jobId) -> string</code>
