#!/bin/bash

### Run Back-End ###

nodemon --config './util/nodemon.json' &

### Run Front-End ###

npm run start --prefix public/app
