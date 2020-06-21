#!/bin/bash

### Build Back-End ###

# Install dependencies
npm ci

# Remove existing production folder
rm -rf ./build/

# Transpile .ts to .js
tsc --sourceMap false
