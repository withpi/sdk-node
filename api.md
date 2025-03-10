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

Types:

- <code><a href="./src/resources/data/generate-inputs.ts">GenerateInputListResponse</a></code>
- <code><a href="./src/resources/data/generate-inputs.ts">GenerateInputCancelResponse</a></code>
- <code><a href="./src/resources/data/generate-inputs.ts">GenerateInputStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate-inputs.ts">GenerateInputStreamMessagesResponse</a></code>

Methods:

- <code title="get /data/generate_inputs/{job_id}">client.data.generateInputs.<a href="./src/resources/data/generate-inputs.ts">retrieve</a>(jobId) -> DataGenerationStatus</code>
- <code title="get /data/generate_inputs">client.data.generateInputs.<a href="./src/resources/data/generate-inputs.ts">list</a>({ ...params }) -> GenerateInputListResponse</code>
- <code title="delete /data/generate_inputs/{job_id}">client.data.generateInputs.<a href="./src/resources/data/generate-inputs.ts">cancel</a>(jobId) -> string</code>
- <code title="post /data/generate_inputs">client.data.generateInputs.<a href="./src/resources/data/generate-inputs.ts">startJob</a>({ ...params }) -> DataGenerationStatus</code>
- <code title="get /data/generate_inputs/{job_id}/data">client.data.generateInputs.<a href="./src/resources/data/generate-inputs.ts">streamData</a>(jobId) -> string</code>
- <code title="get /data/generate_inputs/{job_id}/messages">client.data.generateInputs.<a href="./src/resources/data/generate-inputs.ts">streamMessages</a>(jobId) -> string</code>

## GenerateExamples

Types:

- <code><a href="./src/resources/data/generate-examples.ts">GenerateExampleListResponse</a></code>
- <code><a href="./src/resources/data/generate-examples.ts">GenerateExampleCancelResponse</a></code>
- <code><a href="./src/resources/data/generate-examples.ts">GenerateExampleStreamDataResponse</a></code>
- <code><a href="./src/resources/data/generate-examples.ts">GenerateExampleStreamMessagesResponse</a></code>

Methods:

- <code title="post /data/generate_examples">client.data.generateExamples.<a href="./src/resources/data/generate-examples.ts">create</a>({ ...params }) -> SyntheticDataStatus</code>
- <code title="get /data/generate_examples/{job_id}">client.data.generateExamples.<a href="./src/resources/data/generate-examples.ts">retrieve</a>(jobId) -> SyntheticDataStatus</code>
- <code title="get /data/generate_examples">client.data.generateExamples.<a href="./src/resources/data/generate-examples.ts">list</a>({ ...params }) -> GenerateExampleListResponse</code>
- <code title="delete /data/generate_examples/{job_id}">client.data.generateExamples.<a href="./src/resources/data/generate-examples.ts">cancel</a>(jobId) -> string</code>
- <code title="get /data/generate_examples/{job_id}/data">client.data.generateExamples.<a href="./src/resources/data/generate-examples.ts">streamData</a>(jobId) -> GenerateExampleStreamDataResponse</code>
- <code title="get /data/generate_examples/{job_id}/messages">client.data.generateExamples.<a href="./src/resources/data/generate-examples.ts">streamMessages</a>(jobId) -> string</code>

# Model

## Classifier

Types:

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

## Sft

Types:

- <code><a href="./src/resources/model/sft.ts">SftRetrieveResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftListResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftCancelResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftDownloadResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftLoadResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftStartJobResponse</a></code>
- <code><a href="./src/resources/model/sft.ts">SftStreamMessagesResponse</a></code>

Methods:

- <code title="get /model/sft/{job_id}">client.model.sft.<a href="./src/resources/model/sft.ts">retrieve</a>(jobId) -> SftRetrieveResponse</code>
- <code title="get /model/sft">client.model.sft.<a href="./src/resources/model/sft.ts">list</a>({ ...params }) -> SftListResponse</code>
- <code title="delete /model/sft/{job_id}">client.model.sft.<a href="./src/resources/model/sft.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/sft/{job_id}/download">client.model.sft.<a href="./src/resources/model/sft.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /model/sft/{job_id}/load">client.model.sft.<a href="./src/resources/model/sft.ts">load</a>(jobId) -> SftLoadResponse</code>
- <code title="post /model/sft">client.model.sft.<a href="./src/resources/model/sft.ts">startJob</a>({ ...params }) -> SftStartJobResponse</code>
- <code title="get /model/sft/{job_id}/messages">client.model.sft.<a href="./src/resources/model/sft.ts">streamMessages</a>(jobId) -> string</code>

## Grpo

Types:

- <code><a href="./src/resources/model/grpo.ts">GrpoListResponse</a></code>
- <code><a href="./src/resources/model/grpo.ts">GrpoCancelResponse</a></code>
- <code><a href="./src/resources/model/grpo.ts">GrpoDownloadResponse</a></code>
- <code><a href="./src/resources/model/grpo.ts">GrpoLaunchResponse</a></code>
- <code><a href="./src/resources/model/grpo.ts">GrpoLoadResponse</a></code>
- <code><a href="./src/resources/model/grpo.ts">GrpoMessagesResponse</a></code>
- <code><a href="./src/resources/model/grpo.ts">GrpoStatusResponse</a></code>

Methods:

- <code title="get /model/grpo">client.model.grpo.<a href="./src/resources/model/grpo.ts">list</a>({ ...params }) -> GrpoListResponse</code>
- <code title="delete /model/grpo/{job_id}">client.model.grpo.<a href="./src/resources/model/grpo.ts">cancel</a>(jobId) -> string</code>
- <code title="post /model/grpo/{job_id}/download">client.model.grpo.<a href="./src/resources/model/grpo.ts">download</a>(jobId, { ...params }) -> string</code>
- <code title="post /model/grpo">client.model.grpo.<a href="./src/resources/model/grpo.ts">launch</a>({ ...params }) -> GrpoLaunchResponse</code>
- <code title="post /model/grpo/{job_id}/load">client.model.grpo.<a href="./src/resources/model/grpo.ts">load</a>(jobId) -> GrpoLoadResponse</code>
- <code title="get /model/grpo/{job_id}/messages">client.model.grpo.<a href="./src/resources/model/grpo.ts">messages</a>(jobId) -> string</code>
- <code title="get /model/grpo/{job_id}">client.model.grpo.<a href="./src/resources/model/grpo.ts">status</a>(jobId) -> GrpoStatusResponse</code>

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

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryClassifyResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryGenerateFanoutsResponse</a></code>

Methods:

- <code title="post /queries/classify">client.queries.<a href="./src/resources/queries.ts">classify</a>({ ...params }) -> QueryClassifyResponse</code>
- <code title="post /queries/generate_fanouts">client.queries.<a href="./src/resources/queries.ts">generateFanouts</a>({ ...params }) -> QueryGenerateFanoutsResponse</code>

# Scorer

Types:

- <code><a href="./src/resources/scorer/scorer.ts">ScorerScoreResponse</a></code>

Methods:

- <code title="post /scorer/generate_dimensions">client.scorer.<a href="./src/resources/scorer/scorer.ts">generateDimensions</a>({ ...params }) -> Scorer</code>
- <code title="post /scorer/read_from_hf">client.scorer.<a href="./src/resources/scorer/scorer.ts">readFromHf</a>({ ...params }) -> Scorer</code>
- <code title="post /scorer/score">client.scorer.<a href="./src/resources/scorer/scorer.ts">score</a>({ ...params }) -> ScorerScoreResponse</code>

## Calibrate

Types:

- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateCreateResponse</a></code>
- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateRetrieveResponse</a></code>
- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateListResponse</a></code>
- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateCancelResponse</a></code>
- <code><a href="./src/resources/scorer/calibrate.ts">CalibrateMessagesResponse</a></code>

Methods:

- <code title="post /scorer/calibrate">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">create</a>({ ...params }) -> CalibrateCreateResponse</code>
- <code title="get /scorer/calibrate/{job_id}">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">retrieve</a>(jobId) -> CalibrateRetrieveResponse</code>
- <code title="get /scorer/calibrate">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">list</a>({ ...params }) -> CalibrateListResponse</code>
- <code title="delete /scorer/calibrate/{job_id}">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">cancel</a>(jobId) -> string</code>
- <code title="get /scorer/calibrate/{job_id}/messages">client.scorer.calibrate.<a href="./src/resources/scorer/calibrate.ts">messages</a>(jobId) -> string</code>
