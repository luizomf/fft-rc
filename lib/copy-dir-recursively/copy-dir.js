const fs = require('fs');
const copyFiles = require('./copy-files');

const copyDir = async (inputDir, outputDir) => {
  if (!fs.existsSync(outputDir)) {
    await fs.promises.mkdir(outputDir);
  } else {
    throw new Error(
      `\u001b[0m\u001b[33mFolder \u001b[0m\u001b[31m${outputDir}\u001b[0m\u001b[33m already exists\u001b[0m`,
    );
  }

  await copyFiles({ inputDir, parentDir: [], outputDir });
};

module.exports = copyDir;
