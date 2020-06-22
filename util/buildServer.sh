#!/bin/bash

### Build Back-End ###

# Remove existing production folder
rm -rf ./build/

# Remove existing production folder
rm -rf ./node_modules

# Install dependencies
npm ci

# Transpile .ts to .js
tsc --sourceMap false
