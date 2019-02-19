#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
let pkg = require('../package.json');
const application_1 = require("./app/application");
const app = new application_1.Application();
commander_1.default
    .version(pkg.version)
    //Information
    .option('-i, --information', 'Gets information from project/srcPath for language, framework, package.json and tags in directory')
    //Hosting
    .option('-S, --server', 'Creates a server on localhost (default port: 5200) ' +
    'which displays the documentation')
    //Configuration
    .option('-C, --configuration [configuration]', 'Fetches the current configuration')
    //Options
    .option('--port [port]', 'sets port for hosted server');
commander_1.default.command('gen')
    .option('-o, --output [outDir]', 'sets output path to generate document there')
    .option('-s, --source [srcDir]', 'sets source path as an input')
    .action((program) => {
    console.log("hi");
    let source = process.cwd();
    let output = '';
    if (program.source)
        source = program.source;
    if (program.output)
        output = program.output;
    app.generate(source, output);
});
commander_1.default.parse(process.argv);
if (commander_1.default.check)
    console.log('-c or --check');
if (commander_1.default.server)
    console.log('-S or --server');
