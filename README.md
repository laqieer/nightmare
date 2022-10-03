# Nightmare 3

[![pages-build-deployment](https://github.com/laqieer/nightmare/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/laqieer/nightmare/actions/workflows/pages/pages-build-deployment)
[![nightmare-pages-build-deployment](https://github.com/laqieer/nightmare/actions/workflows/nightmare-pages-build-deployment.yml/badge.svg)](https://github.com/laqieer/nightmare/actions/workflows/nightmare-pages-build-deployment.yml)

[![Logo](./nightmare/src/logo.png)](https://laqieer.github.io/nightmare/)

Online modularized ROM editor, successor to [Nightmare](https://www.romhacking.net/utilities/1307/) and [Nightmare 2](https://www.romhacking.net/utilities/610/).

## Features

- Online hosting  
Run anywhere, no installation required

- Cross reference  
Jump between relative modules seamlessly

- Abundant modules  
Provided by communities, free to contribute

- Easy to share  
[Example link to edit Roy's stats](https://laqieer.github.io/nightmare/FE6/CharacterEditor?id=1)

## Usage

[![Demo](https://img.youtube.com/vi/g1nrD-8ofks/0.jpg)](https://www.youtube.com/watch?v=g1nrD-8ofks)

# nightmare-util

[![nightmare-util](https://img.shields.io/github/package-json/v/laqieer/nightmare?filename=nightmare-util%2Fpackage.json&label=nightmare-util)](https://github.com/laqieer/nightmare/pkgs/npm/nightmare-util)
[![nightmare-util-build-publish](https://github.com/laqieer/nightmare/actions/workflows/nightmare-util-build-publish.yml/badge.svg)](https://github.com/laqieer/nightmare/actions/workflows/nightmare-util-build-publish.yml)

Util to parse and convert Nightmare modules for Nightmare 3.

## Features

- Convert Nightmare modules
- Parse Nightmare modules

## Install

1. Add NPM registry to `.npmrc`
```
registry=https://registry.npmjs.org
@laqieer:registry=https://npm.pkg.github.com
```

2. Install package
```
npm install @laqieer/nightmare-util
```

## Usage

### Convert Nightmare modules
```
node node_modules\@laqieer\nightmare-util\src\converter.js module_folder output_folder [reference_file]
```
Example:
```
node node_modules\@laqieer\nightmare-util\src\converter.js "Fire-Emblem-Nightmare-Modules\FE1 Nightmare Modules" ..\nightmare\src\components\Module\FE1 references\FE1.txt
```

### Parse Nightmare modules
```
const parser = require('@laqieer/nightmare-util');
var result = parser.parse(module_file);
```
Example:
```
node .\parse.js '.\Fire-Emblem-Nightmare-Modules\FE1 Nightmare Modules\FE1 Character Editors\fe1_char 01.nmm'
```
```
{
  filename: 'fe1_char 01.nmm',
  version: '1',
  description: 'Character editor 1 (FE1) - By VincentASM and Celice - V 0.2',
  address: '0x204D2',
  entryNum: 7,
  entrySize: 27,
  entryList: 'NULL',
  tbl: 'NULL',
  handlers: [
    {
      description: 'Character',
      offset: 0,
      size: 1,
      type: 'NDHU',
      entryList: 'Chardata.txt'
    },
    {
      description: 'Class',
      offset: 1,
      size: 1,
      type: 'NDHU',
      entryList: 'Class_list.txt'
    },
    ...
  ]
}
```
