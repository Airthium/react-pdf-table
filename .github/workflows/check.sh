#!/bin/bash

set -e

# Install
yarn

# Depcheck
yarn depcheck

# Lint
yarn prettier

# Doc
yarn doc

# Test
yarn test

# Build
yarn build