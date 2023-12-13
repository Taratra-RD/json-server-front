#!/bin/bash

set -x

# Redirect output to a log file
exec >> /home/stage/Documents/New/logfileb.log 2>&1

# Navigate to the directory where your Node.js app is located
cd /home/stage/Documents/New/back/

npm start
