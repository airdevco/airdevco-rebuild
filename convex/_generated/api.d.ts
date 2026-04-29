/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as bolsterCaseStudySeed from "../bolsterCaseStudySeed.js";
import type * as caseStudies from "../caseStudies.js";
import type * as caseStudiesMissingSeed from "../caseStudiesMissingSeed.js";
import type * as coreCaseStudiesDetailedSeed from "../coreCaseStudiesDetailedSeed.js";
import type * as seed from "../seed.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  bolsterCaseStudySeed: typeof bolsterCaseStudySeed;
  caseStudies: typeof caseStudies;
  caseStudiesMissingSeed: typeof caseStudiesMissingSeed;
  coreCaseStudiesDetailedSeed: typeof coreCaseStudiesDetailedSeed;
  seed: typeof seed;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
