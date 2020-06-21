#!/bin/bash

### Bundle Front-End ###

# Create the directory for React
mkdir -p ./build/public/app/

# Navigate to the react directory
cd ./public/app

# Install dependencies
npm install &&

# Build React code
npm run build &&

# Rename the folder
mv build app

# Move the contains to the build/ dir
mv app ../../build/public/
