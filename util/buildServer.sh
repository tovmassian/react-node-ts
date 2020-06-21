#!/bin/bash

### Build Back-End ###

# Remove existing production folder
rm -rf ./build/

# Install dependencies
npm install &&

# Transpile .ts to .js
tsc --sourceMap false
