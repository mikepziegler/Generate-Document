import * as fs from 'fs-extra';

export class Configuration {
    constructor() {

    }

    getConfig() : string {
        console.log('getting Configurations');

        return '';
    }

    setConfig() /* : string */  {
        console.log('setting Configurations');
    }

    getOutputDir() : string  {
        console.log('getting output Directory');

        return 'co';
    }

    getTheme() /* : string */ {
        console.log('getting themes');
    }

    getCustomTemplates() {
        console.log()
    }

}