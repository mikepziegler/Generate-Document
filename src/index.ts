#!/usr/bin/env node

import program from 'commander';
let pkg = require('../package.json');

import { Application } from './app/application'
import chalk from "chalk";

const app = new Application();


program
    .version(pkg.version)
    //Information
    .option('-i, --information',
        'Gets information from project/srcPath for language, framework, package.json and tags in directory')

    //Hosting
    .option('-S, --server',
        'Creates a server on localhost (default port: 5200) ' +
        'which displays the documentation')

    //Configuration
    .option('-C, --configuration [configuration]',
        'Fetches the current configuration')

    //Options

    .option('--port [port]', 'sets port for hosted server');

program.command('gen')
    .option('-o, --output [outDir]', 'sets output path to generate document there')
    .option('-s, --source [srcDir]', 'sets source path as an input')
    .action((program) => {

        console.log("hi");

        let source = process.cwd();
        let output = '';

        if (program.source) source = program.source;
        if (program.output) output = program.output;

        app.generate(source, output);
    });

program.parse(process.argv);

if (program.check) console.log('-c or --check');
if (program.server) console.log('-S or --server');
