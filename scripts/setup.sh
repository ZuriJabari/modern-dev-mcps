#!/bin/bash

# Build all MCP Docker images
echo "Building MCP Docker images..."

docker build -t mcp/component-library ./component-library
docker build -t mcp/api-tools ./api-tools
docker build -t mcp/testing-suite ./testing-suite
docker build -t mcp/deployment-manager ./deployment-manager
docker build -t mcp/ai-assistant ./ai-assistant
docker build -t mcp/database-tools ./database-tools

echo "All MCPs built successfully!"

# Create config if not exists
if [ ! -f .env ]; then
    cp config/env.example .env
    echo ".env file created. Please update with your settings."
fi
