module.exports = {
  componentLibrary: {
    templatePath: process.env.TEMPLATE_PATH || './templates',
    styleSystem: process.env.STYLE_SYSTEM || 'default',
  },
  apiTools: {
    port: process.env.API_PORT || 3001,
    swaggerEnabled: process.env.SWAGGER_ENABLED === 'true',
  },
  testingSuite: {
    reporter: process.env.TEST_REPORTER || 'jest-junit',
    coverage: process.env.COVERAGE_ENABLED === 'true',
  },
  deploymentManager: {
    provider: process.env.CLOUD_PROVIDER || 'aws',
    region: process.env.CLOUD_REGION || 'us-west-2',
  },
  aiAssistant: {
    model: process.env.AI_MODEL || 'gpt-4',
    port: process.env.AI_PORT || 3002,
  },
  databaseTools: {
    type: process.env.DB_TYPE || 'postgresql',
    migrationPath: process.env.MIGRATION_PATH || './migrations',
  },
};
