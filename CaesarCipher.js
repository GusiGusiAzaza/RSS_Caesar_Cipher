'use strict';
const commander = require('commander')
const fs = require('fs');
const funcs  = require("./funcs");

const program = new commander.Command();
let input_stream, output_stream;

program
    .storeOptionsAsProperties(true) // <--- change behaviour
    .passCommandToAction(false); // <--- change behaviour

program
    .requiredOption('-a, --action <encode/decode>', 'encode/decode string', funcs.checkEncode)
    .requiredOption('-s, --shift <number>', 'value to shift string', funcs.myParseInt)
    .option('-i, --input <file>', 'input file')
    .option('-o, --output <file>', 'input file');

program.parse(process.argv);

if(program.action.toString() === 'decode') program.shift = -1 * program.shift;

if(program.output === undefined) {
    output_stream = process.stdout;
} else {
    funcs.checkFile(program.output);
    output_stream = fs.createWriteStream(program.output, { flags: "a" });
}

if(program.input === undefined) {
    input_stream = process.stdin;
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
} else {
    funcs.checkFile(program.input);
    input_stream = fs.createReadStream(program.input);
}


input_stream.on('data', txt=> {
    let res = funcs.caesar(txt, program.shift);
    output_stream.write(res);
})
