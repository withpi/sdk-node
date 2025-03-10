// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClassifierAPI from './classifier';
import { Classifier } from './classifier';
import * as GrpoAPI from './grpo';
import { Grpo } from './grpo';
import * as SftAPI from './sft';
import { Sft } from './sft';

export class Training extends APIResource {
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
  sft: SftAPI.Sft = new SftAPI.Sft(this._client);
  grpo: GrpoAPI.Grpo = new GrpoAPI.Grpo(this._client);
}

Training.Classifier = Classifier;
Training.Sft = Sft;
Training.Grpo = Grpo;

export declare namespace Training {
  export { Classifier as Classifier };

  export { Sft as Sft };

  export { Grpo as Grpo };
}
