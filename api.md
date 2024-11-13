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

Methods:

- <code title="get /tune/prompt/{job_id}">client.tune.prompt.<a href="./src/resources/tune/prompt/prompt.ts">get</a>(jobId) -> OptimizationStatus</code>
- <code title="post /tune/prompt">client.tune.prompt.<a href="./src/resources/tune/prompt/prompt.ts">optimize</a>({ ...params }) -> OptimizationStatus</code>

### Messages

Types:

- <code><a href="./src/resources/tune/prompt/messages.ts">MessageRetrieveResponse</a></code>

Methods:

- <code title="get /tune/prompt/{job_id}/messages">client.tune.prompt.messages.<a href="./src/resources/tune/prompt/messages.ts">retrieve</a>(jobId) -> string</code>

# Experiment

Types:

- <code><a href="./src/resources/experiment.ts">ExperimentStatus</a></code>

Methods:

- <code title="post /experiments">client.experiment.<a href="./src/resources/experiment.ts">create</a>({ ...params }) -> ExperimentStatus</code>
- <code title="get /experiments/{job_id}">client.experiment.<a href="./src/resources/experiment.ts">get</a>(jobId) -> ExperimentStatus</code>

# Contract

Types:

- <code><a href="./src/resources/contract/contract.ts">ContractsScoreMetrics</a></code>

Methods:

- <code title="post /contracts/calibrate">client.contract.<a href="./src/resources/contract/contract.ts">calibrate</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/generate_dimensions">client.contract.<a href="./src/resources/contract/contract.ts">generateDimensions</a>({ ...params }) -> Contract</code>
- <code title="post /contracts/score">client.contract.<a href="./src/resources/contract/contract.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>

## Dimension

Methods:

- <code title="post /contracts/dimensions/generate">client.contract.dimension.<a href="./src/resources/contract/dimension.ts">generate</a>({ ...params }) -> Dimension</code>
- <code title="post /contracts/dimensions/score">client.contract.dimension.<a href="./src/resources/contract/dimension.ts">score</a>({ ...params }) -> ContractsScoreMetrics</code>
