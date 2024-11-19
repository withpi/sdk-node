# Shared

Types:

- <code><a href="./src/resources/shared.ts">Contract</a></code>
- <code><a href="./src/resources/shared.ts">Dimension</a></code>
- <code><a href="./src/resources/shared.ts">SubDimension</a></code>

# Inference

Types:

- <code><a href="./src/resources/inference.ts">InferenceRunResponse</a></code>

Methods:

- <code title="post /inference/run">client.inference.<a href="./src/resources/inference.ts">run</a>({ ...params }) -> InferenceRunResponse</code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/data/data.ts">InputEvaluationMetrics</a></code>

## Inputs

Types:

- <code><a href="./src/resources/data/inputs/inputs.ts">DataGenerationStatus</a></code>

Methods:

- <code title="post /data/input/evaluate">client.data.inputs.<a href="./src/resources/data/inputs/inputs.ts">evaluate</a>({ ...params }) -> InputEvaluationMetrics</code>

### GenerateFromSeeds

Methods:

- <code title="get /data/input/generate_from_seeds/{job_id}">client.data.inputs.generateFromSeeds.<a href="./src/resources/data/inputs/generate-from-seeds/generate-from-seeds.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>

#### Messages

Types:

- <code><a href="./src/resources/data/inputs/generate-from-seeds/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /data/input/generate_from_seeds/{job_id}/messages">client.data.inputs.generateFromSeeds.messages.<a href="./src/resources/data/inputs/generate-from-seeds/messages.ts">list</a>(jobId) -> string</code>

# Tune

Types:

- <code><a href="./src/resources/tune/tune.ts">OptimizationStatus</a></code>

## Prompt

Types:

- <code><a href="./src/resources/tune/prompt.ts">PromptGetDetailedMessagesResponse</a></code>

Methods:

- <code title="get /tune/prompt/{job_id}/messages">client.tune.prompt.<a href="./src/resources/tune/prompt.ts">getDetailedMessages</a>(jobId) -> string</code>
- <code title="get /tune/prompt/{job_id}">client.tune.prompt.<a href="./src/resources/tune/prompt.ts">getStatus</a>(jobId) -> OptimizationStatus</code>
- <code title="post /tune/prompt">client.tune.prompt.<a href="./src/resources/tune/prompt.ts">optimize</a>({ ...params }) -> OptimizationStatus</code>

# Experiments

# Contracts

Types:

- <code><a href="./src/resources/contracts/contracts.ts">ContractsScoreMetrics</a></code>

Methods:

- <code title="post /contracts/generate_dimensions">client.contracts.<a href="./src/resources/contracts/contracts.ts">generateDimensions</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/score">client.contracts.<a href="./src/resources/contracts/contracts.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>

## Dimension
