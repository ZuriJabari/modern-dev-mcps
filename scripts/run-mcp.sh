#!/bin/bash

MCP_NAME=$1
shift

if [ -z "$MCP_NAME" ]; then
    echo "Error: Please specify an MCP name"
    echo "Available MCPs:"
    echo "  - component-library"
    echo "  - api-tools"
    echo "  - testing-suite"
    echo "  - deployment-manager"
    echo "  - ai-assistant"
    echo "  - database-tools"
    exit 1
fi

# Load environment variables
if [ -f .env ]; then
    source .env
fi

# Run the specified MCP
case $MCP_NAME in
    "component-library")
        docker run -i \
            -v "${PWD}:/app/project" \
            mcp/component-library "$@"
        ;;
    "api-tools")
        docker run -i \
            -p ${API_PORT:-3001}:3001 \
            mcp/api-tools "$@"
        ;;
    "testing-suite")
        docker run -i \
            -v "${PWD}:/app/tests" \
            mcp/testing-suite "$@"
        ;;
    "deployment-manager")
        docker run -i \
            -v "${PWD}:/app/deploy" \
            mcp/deployment-manager "$@"
        ;;
    "ai-assistant")
        docker run -i \
            -p ${AI_PORT:-3002}:3002 \
            mcp/ai-assistant "$@"
        ;;
    "database-tools")
        docker run -i \
            -v "${PWD}:/app/db" \
            mcp/database-tools "$@"
        ;;
    *)
        echo "Error: Unknown MCP '$MCP_NAME'"
        exit 1
        ;;
esac
