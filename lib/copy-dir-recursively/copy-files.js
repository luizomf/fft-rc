const fs = require('fs');
const path = require('path');

const copyFiles = async ({ inputDir, outputDir, parentDirsList = [] }) => {
  const inputs = await fs.promises.readdir(inputDir);

  for await (const inputName of inputs) {
    const inputPath = path.resolve(inputDir, inputName);
    const stat = await fs.promises.stat(inputPath);
    const isDirectory = stat.isDirectory();
    const currentOutputPath = path.resolve(
      outputDir,
      ...parentDirsList,
      inputName,
    );

    if (isDirectory) {
      parentDirsList.push(inputName);

      if (!fs.existsSync(currentOutputPath)) {
        await fs.promises.mkdir(currentOutputPath);
      }

      await copyFiles({
        inputDir: inputPath,
        parentDirsList,
        outputDir,
      });

      parentDirsList.pop();
    } else {
      await fs.promises.copyFile(inputPath, currentOutputPath);
    }
  }
};

module.exports = copyFiles;
