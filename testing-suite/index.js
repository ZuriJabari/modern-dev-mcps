const { program } = require('commander');
const { runTests } = require('./runners/test-runner');
const { generateReport } = require('./reporters/report-generator');

program
  .version('1.0.0')
  .command('run')
  .option('-t, --type <type>', 'Test type (unit/integration/e2e)')
  .option('-p, --pattern <pattern>', 'Test file pattern')
  .option('-r, --reporter <reporter>', 'Test reporter')
  .action(async (options) => {
    try {
      const results = await runTests(options);
      await generateReport(results, options.reporter);
    } catch (error) {
      console.error('Testing failed:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
