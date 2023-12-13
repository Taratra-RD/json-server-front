
#!/bin/bash

set -x

# Redirect output to a log file
exec >> /home/stage/Documents/New/logfilef.log 2>&1

# Navigate to the directory where your React app is located
cd /home/stage/Documents/New/pass/

# Install serve globally (if not already installed)
# This is needed to serve the React app in a non-interactive environment
npm install -g serve

# Build the React app (assuming you have a build script in your package.json)
npm run build

# Start the serve command to host the built React app
serve -s build -l 3005

