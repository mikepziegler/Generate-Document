"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const compiler_1 = require("./compiler/compiler");
const parser_1 = require("./parser/parser");
const configuration_1 = require("../configuration/configuration");
const inquirer = require('inquirer');
const compiler = new compiler_1.Compiler(), parser = new parser_1.Parser(), config = new configuration_1.Configuration();
class Application {
    constructor() {
        this.srcDir = '';
        this.outDir = '';
    }
    init() {
    }
    info() {
        return config.getConfig();
    }
    generate(srcDir, outDir) {
        console.log(chalk_1.default.greenBright('start generating document...'));
        if (outDir === '')
            outDir = config.getOutputDir();
        this.srcDir = srcDir;
        this.outDir = outDir;
        console.log(`${chalk_1.default.blueBright('Sources in Directory:')} ${this.srcDir}`);
        console.log(`${chalk_1.default.blueBright('Directory for output:')} ${this.outDir}`);
        console.log();
        compiler.create(this.srcDir, this.outDir);
    }
    openServer() {
        console.log("open server");
    }
    configuration() {
        console.log('hi');
    }
}
exports.Application = Application;
