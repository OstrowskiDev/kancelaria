#!/bin/bash

# Stop the server
# Enable below line for Unix-based systems, and delete taskkill line:
# pkill -f node.exe
taskkill //F //IM node.exe

# Navigate to the project directory
cd /c/VSC/project-32-kancelaria/kancelaria

# Pull the latest changes from the repository
git pull origin master

# Install dependencies
npm install

# Build the project
npm run build

# Restart the server (assuming you're using PM2 or a similar process manager)
npm run dev