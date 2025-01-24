# Shared

Types:

- <code><a href="./src/resources/shared.ts">Contract</a></code>
- <code><a href="./src/resources/shared.ts">Dimension</a></code>
- <code><a href="./src/resources/shared.ts">SubDimension</a></code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/data/data.ts">InputEvaluationMetrics</a></code>

## Inputs

Types:

- <code><a href="./src/resources/data/inputs/inputs.ts">InputTopicCluster</a></code>
- <code><a href="./src/resources/data/inputs/inputs.ts">InputClusterResponse</a></code>

Methods:

- <code title="post /data/input/cluster">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">cluster</a>([ ...inputs ]) -> InputClusterResponse</code>
- <code title="post /data/input/evaluate">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">evaluate</a>({ ...params }) -> InputEvaluationMetrics</code>
- <code title="post /data/input/generate_seeds">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">generateSeeds</a>({ ...params }) -> DataGenerationStatus</code>

### GenerateFromSeeds

Types:

- <code><a href="./src/resources/data/inputs/generate-from-seeds.ts">GenerateFromSeedStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/input/generate_from_seeds/{job_id}">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="post /data/input/generate_from_seeds">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">generate</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/input/generate_from_seeds/{job_id}/messages">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds.ts">streamMessages</a>(jobId) -> string</code>

# Tune

Types:

- <code><a href="./src/resources/tune/tune.ts">PromptOptimizationStatus</a></code>

## Prompt

Types:

- <code><a href="./src/resources/tune/prompt.ts">PromptGetDetailedMessagesResponse</a></code>

Methods:

- <code title="get /tune/prompt/{job_id}/messages">client.tune.prompt.<a href="./src/resources/tune/prompt.ts">getDetailedMessages</a>(jobId) -> string</code>
- <code title="get /tune/prompt/{job_id}">client.tune.prompt.<a href="./src/resources/tune/prompt.ts">getStatus</a>(jobId) -> PromptOptimizationStatus</code>
- <code title="post /tune/prompt">client.tune.prompt.<a href="./src/resources/tune/prompt.ts">optimize</a>({ ...params }) -> PromptOptimizationStatus</code>

## Model

### Sft

Types:

- <code><a href="./src/resources/tune/model/sft.ts">SftStatus</a></code>
- <code><a href="./src/resources/tune/model/sft.ts">SftStreamMessagesResponse</a></code>

Methods:

- <code title="post /tune/model/sft/{job_id}">client.tune.model.sft.<a href="./src/resources/tune/model/sft.ts">getStatus</a>(jobId) -> SftStatus</code>
- <code title="post /tune/model/sft">client.tune.model.sft.<a href="./src/resources/tune/model/sft.ts">startJob</a>({ ...params }) -> SftStatus</code>
- <code title="post /tune/model/sft/{job_id}/messages">client.tune.model.sft.<a href="./src/resources/tune/model/sft.ts">streamMessages</a>(jobId) -> unknown</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts.ts">ContractsScoreMetrics</a></code>
- <code><a href="./src/resources/contracts.ts">ContractWriteToHfResponse</a></code>

Methods:

- <code title="post /contracts/calibrate">client.contracts.<a href="./src/resources/contracts.ts">calibrate</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/generate_dimensions">client.contracts.<a href="./src/resources/contracts.ts">generateDimensions</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/read_from_hf">client.contracts.<a href="./src/resources/contracts.ts">readFromHf</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/score">client.contracts.<a href="./src/resources/contracts.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>
- <code title="post /contracts/write_to_hf">client.contracts.<a href="./src/resources/contracts.ts">writeToHf</a>({ ...params }) -> string</code>

# Feedback

Types:

- <code><a href="./src/resources/feedback.ts">FeedbackTopicCluster</a></code>
- <code><a href="./src/resources/feedback.ts">FeedbackClusterResponse</a></code>

Methods:

- <code title="post /feedback/cluster">client.feedback.<a href="./src/resources/feedback.ts">cluster</a>([ ...feedbacks ]) -> FeedbackClusterResponse</code>
