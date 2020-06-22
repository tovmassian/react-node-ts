#!/bin/bash

### Run Back-End ###

nodemon --config './util/nodemon.json' &

### Run Front-End ###

npm start --prefix public/app
