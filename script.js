const path = require('path');
const copyDir = require('./lib/copy-dir-recursively/copy-dir');

const inputDir = path.resolve(__dirname, 'template-files');
const outputDir = path.resolve('.', '.fft');

const run = () => copyDir(inputDir, outputDir);

run()
  .then(() => {
    console.log('\n\u001b[32m⮞⮞⮞ Files created successfully ⮜⮜⮜\u001b[0;0m\n');
  })
  .catch((e) => {
    console.error(e);
  });
