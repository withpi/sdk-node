// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OptimizeAPI from './optimize';
import {
  Optimize,
  OptimizeCancelResponse,
  OptimizeListParams,
  OptimizeListResponse,
  OptimizeStartJobParams,
  OptimizeStreamMessagesResponse,
} from './optimize';

export class Prompt extends APIResource {
  optimize: OptimizeAPI.Optimize = new OptimizeAPI.Optimize(this._client);
}

Prompt.Optimize = Optimize;

export declare namespace Prompt {
  export {
    Optimize as Optimize,
    type OptimizeListResponse as OptimizeListResponse,
    type OptimizeCancelResponse as OptimizeCancelResponse,
    type OptimizeStreamMessagesResponse as OptimizeStreamMessagesResponse,
    type OptimizeListParams as OptimizeListParams,
    type OptimizeStartJobParams as OptimizeStartJobParams,
  };
}
