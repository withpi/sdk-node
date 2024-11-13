# Shared

Types:

- <code><a href="./src/resources/shared.ts">Contract</a></code>
- <code><a href="./src/resources/shared.ts">Dimension</a></code>
- <code><a href="./src/resources/shared.ts">LlmResponse</a></code>
- <code><a href="./src/resources/shared.ts">SubDimension</a></code>

# Inference

Methods:

- <code title="post /inference/run">client.inference.<a href="./src/resources/inference.ts">run</a>({ ...params }) -> LlmResponse</code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataGenerationStatus</a></code>
- <code><a href="./src/resources/data/data.ts">InputEvaluationMetrics</a></code>

## Inputs

Methods:

- <code title="post /data/input/evaluate">client.data.inputs.<a href="./src/resources/data/inputs.ts">evaluate</a>({ ...params }) -> InputEvaluationMetrics</code>
- <code title="post /data/input/generate">client.data.inputs.<a href="./src/resources/data/inputs.ts">generate</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/input/generate/{job_id}">client.data.inputs.<a href="./src/resources/data/inputs.ts">get</a>(jobId) -> DataGenerationStatus</code>

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

Types:

- <code><a href="./src/resources/experiments.ts">ExperimentStatus</a></code>

Methods:

- <code title="post /experiments">client.experiments.<a href="./src/resources/experiments.ts">create</a>({ ...params }) -> ExperimentStatus</code>
- <code title="get /experiments/{job_id}">client.experiments.<a href="./src/resources/experiments.ts">get</a>(jobId) -> ExperimentStatus</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts/contracts.ts">ContractsScoreMetrics</a></code>

Methods:

- <code title="post /contracts/calibrate">client.contracts.<a href="./src/resources/contracts/contracts.ts">calibrate</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/generate_dimensions">client.contracts.<a href="./src/resources/contracts/contracts.ts">generateDimensions</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/score">client.contracts.<a href="./src/resources/contracts/contracts.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>

## Dimension

Methods:

- <code title="post /contracts/dimensions/generate">client.contracts.dimension.<a href="./src/resources/contracts/dimension.ts">generate</a>({ ...params }) -> Dimension</code>
- <code title="post /contracts/dimensions/score">client.contracts.dimension.<a href="./src/resources/contracts/dimension.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>
