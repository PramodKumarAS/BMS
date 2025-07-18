#!/bin/bash

# Step 1: Build the frontend
cd frontend
npm install
npm run build

# Step 2: Copy built files to backend folder
rm -rf ../backend/frontend
mkdir -p ../backend/frontend
cp -r dist ../backend/frontend/

# Step 3: Install backend dependencies
cd ../backend
npm install
