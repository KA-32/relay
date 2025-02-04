/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {PluginInterface} from '../RelayLanguagePluginInterface';

const {find} = require('./FindGraphQLTags');
const {
  formatGeneratedCommonjsModule,
  formatGeneratedESModule,
} = require('./formatGeneratedModule');
const RelayFlowGenerator = require('./RelayFlowGenerator');

module.exports = (options?: {|eagerESModules: boolean|}): PluginInterface => ({
  inputExtensions: ['js', 'jsx'],
  outputExtension: 'js',
  typeGenerator: RelayFlowGenerator,
  formatModule:
    options && options.eagerESModules
      ? formatGeneratedESModule
      : formatGeneratedCommonjsModule,
  findGraphQLTags: find,
});
