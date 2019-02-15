"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
class ClassName {
    constructor(Text) {
        console.log(Text);
        this.text = Text;
    }
    getText() {
        return this.text;
    }
    getBlueText() {
        console.log(chalk_1.default.blue(this.text));
    }
}
module.exports = [ClassName];
