/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EventLoggerProvider } from '../types/EventLoggerProvider';
import { _globalThis } from '../platform';

export const GLOBAL_EVENTS_API_KEY = Symbol.for(
  'io.opentelemetry.js.api.events'
);

type Get<T> = (version: number) => T;
type OtelGlobal = Partial<{
  [GLOBAL_EVENTS_API_KEY]: Get<EventLoggerProvider>;
}>;

export const _global = _globalThis as OtelGlobal;

/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */
export function makeGetter<T>(
  requiredVersion: number,
  instance: T,
  fallback: T
): Get<T> {
  return (version: number): T =>
    version === requiredVersion ? instance : fallback;
}

/**
 * A number which should be incremented each time a backwards incompatible
 * change is made to the API. This number is used when an API package
 * attempts to access the global API to ensure it is getting a compatible
 * version. If the global API is not compatible with the API package
 * attempting to get it, a NOOP API implementation will be returned.
 */
export const API_BACKWARDS_COMPATIBILITY_VERSION = 1;
