const { program } = require('commander');
const { migrate } = require('./services/migrator');
const { seed } = require('./services/seeder');
const { backup } = require('./services/backup');

program
  .version('1.0.0')
  .command('migrate')
  .option('-d, --direction <direction>', 'up/down')
  .option('-t, --to <version>', 'Target version')
  .action(async (options) => {
    try {
      await migrate(options);
    } catch (error) {
      console.error('Migration failed:', error.message);
      process.exit(1);
    }
  });

program
  .command('seed')
  .option('-e, --env <environment>', 'Environment to seed')
  .option('-d, --data <data>', 'Seed data file')
  .action(async (options) => {
    try {
      await seed(options);
    } catch (error) {
      console.error('Seeding failed:', error.message);
      process.exit(1);
    }
  });

program
  .command('backup')
  .option('-t, --type <type>', 'Backup type (full/incremental)')
  .option('-d, --destination <destination>', 'Backup destination')
  .action(async (options) => {
    try {
      await backup(options);
    } catch (error) {
      console.error('Backup failed:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
