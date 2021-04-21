# React Component Template for Files From Template

## Usage:

```
npx https://github.com/luizomf/fft-rc
```

It will create the template and config files for [files from template](https://www.npmjs.com/package/files-from-template).

## After creating the template

After creating the template files, you don't need me anymore. Please follow instructions on [files from template](https://www.npmjs.com/package/files-from-template). I'm gonna show you the basics bellow.

## Basic instructions

To create a component from this template, type:

```
npx files-from-template --config-files="./.fft/config" --root="path-to-components-folder" ComponentName
```

The folder in `path-to-components-folder` should exist, otherwise it will throw an error. The only folder that will be created is the `ComponentName` folder (it'll be whatever you put here).

If you just want to test:

```
npx files-from-template --config-files="./.fft/config" ComponentName
```

And a folder called `ComponentName` will be create inside the directory you are.
