// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as GenerateFromSeedsAPI from './generate-from-seeds';
import { GenerateFromSeeds } from './generate-from-seeds';

export class Inputs extends APIResource {
  generateFromSeeds: GenerateFromSeedsAPI.GenerateFromSeeds = new GenerateFromSeedsAPI.GenerateFromSeeds(
    this._client,
  );
}

Inputs.GenerateFromSeeds = GenerateFromSeeds;

export declare namespace Inputs {
  export { GenerateFromSeeds as GenerateFromSeeds };
}
