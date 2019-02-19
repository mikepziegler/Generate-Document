"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    constructor() {
    }
    getConfig() {
        console.log('getting Configurations');
        return '';
    }
    setConfig() {
        console.log('setting Configurations');
    }
    getOutputDir() {
        console.log('getting output Directory');
        return 'co';
    }
    getTheme() {
        console.log('getting themes');
    }
    getCustomTemplates() {
        console.log();
    }
}
exports.Configuration = Configuration;
