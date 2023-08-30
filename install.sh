#!/bin/bash

echo "Checking Node.js version..."
node_version=$(node -v)
if [[ "$node_version" != v16* ]]; then
    echo "Node.js 16 or later is required."
    echo "Please download and install Node.js from https://nodejs.org/"
else
    echo "Welcome to Fusion! We are installing right now!"
    npm install
    echo "Starting Server..."
    npm start
fi
