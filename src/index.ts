import chalk from 'chalk';

class ClassName {

    text: string;

    constructor(Text: string) {
        console.log(Text);
        this.text = Text;
    }

    getText(): string {
        return this.text;
    }

    getBlueText() {
        console.log(chalk.blue(this.text))
    }
}

export = ClassName;