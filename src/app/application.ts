import chalk from 'chalk';

import { Compiler } from './compiler/compiler';
import { Parser } from './parser/parser';
import { Configuration } from "../configuration/configuration";

const inquirer = require('inquirer');

const
    compiler = new Compiler(),
    parser = new Parser(),
    config = new Configuration();

export class Application {

    srcDir : string = '';
    outDir: string = '';

    constructor() {

    }

    init() {

    }

    info(): string {
        return config.getConfig();
    }

    generate(srcDir: string, outDir: string) {

        console.log(chalk.greenBright('start generating document...'))

        if (outDir === '') outDir = config.getOutputDir();

        this.srcDir = srcDir;
        this.outDir = outDir;

        console.log(`${chalk.blueBright('Sources in Directory:')} ${this.srcDir}`);
        console.log(`${chalk.blueBright('Directory for output:')} ${this.outDir}`);

        console.log()

        compiler.create(this.srcDir, this.outDir);
    }


    openServer() {
        console.log("open server")
    }

    configuration() {
        console.log('hi');
    }
}

