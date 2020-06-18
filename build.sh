#!/bin/bash

### Build BackEnd ###

# Remove existing production folder
rm -rf ./build/

# Transpile .ts to .js
tsc --sourceMap false &&

cd ./build

NODE_ENV=production node start.js

### Bundle FrontEnd ###

# Create the directory for React
mkdir -p ./build/public/app/

# Navigate to the react directory
cd ./src/public/app

# Build React code
npm run build

# Rename the folder
mv build app

# Move the contains to the build/ dir
mv app ../../../../build/public/
