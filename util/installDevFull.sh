#!/bin/bash

### Install Back-End dependencies###

npm ci

### Install Front-End ###

npm ci --prefix public/app

