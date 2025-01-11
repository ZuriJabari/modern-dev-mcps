const { program } = require('commander');
const { deploy } = require('./services/deployer');
const { rollback } = require('./services/rollback');

program
  .version('1.0.0')
  .command('deploy')
  .option('-e, --env <environment>', 'Deployment environment')
  .option('-s, --service <service>', 'Service to deploy')
  .option('-r, --region <region>', 'Deployment region')
  .action(async (options) => {
    try {
      await deploy(options);
    } catch (error) {
      console.error('Deployment failed:', error.message);
      process.exit(1);
    }
  });

program
  .command('rollback')
  .option('-e, --env <environment>', 'Environment to rollback')
  .option('-v, --version <version>', 'Version to rollback to')
  .action(async (options) => {
    try {
      await rollback(options);
    } catch (error) {
      console.error('Rollback failed:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
