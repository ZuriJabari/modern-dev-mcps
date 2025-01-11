const { program } = require('commander');
const { generateComponent } = require('./generators/component');

program
  .version('1.0.0')
  .command('generate')
  .option('-t, --type <type>', 'Component type')
  .option('-n, --name <name>', 'Component name')
  .option('-s, --style <style>', 'Style system')
  .action(async (options) => {
    await generateComponent(options);
  });

program.parse(process.argv);
