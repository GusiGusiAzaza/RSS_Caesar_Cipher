const fs = require('fs');

function myParseInt(num) {
    if(!!!parseInt(num)) {
        let err = new Error('   --shift argument must be a number.\n    Process finished with exit code');
        err.code = -22;
        console.error(err.message, err.code);
        process.exit(-11);
    }
    return parseInt(num);
}

function checkEncode(str) {
    if(str !== 'encode' && str !== 'decode') {
        let err = new Error('   --action argument must be either \'encode\' or \'decode\'.\n    Process finished with exit code');
        err.code = -22;
        console.error(err.message, err.code);
        process.exit(-22);
    }
    return str;
}

function caesar(str, offset) {
    str = str.toString();
    let result = '';
    offset = (offset % 26);
    for (let i = 0; i<str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        let ascOff = asciiNum + offset;
        if(asciiNum >= 65 && asciiNum <= 90) {
            if(ascOff > 90) result += String.fromCharCode(ascOff - 91 + 65);
            else if(ascOff < 65) result += String.fromCharCode(ascOff - 65 + 91);
            else result += String.fromCharCode(ascOff);
        } else if(asciiNum >= 97 && asciiNum <= 122) {
            if(asciiNum + offset > 122) result += String.fromCharCode(ascOff - 123 + 97);
            else if(ascOff < 97) result += String.fromCharCode(ascOff - 97 + 123);
            else result += String.fromCharCode(ascOff);
        }
        else {
            result += str[i];
        }
    }
    return result;
}

function checkFile(file) {
    // Check if the file exists in the current directory.
    try {
        fs.accessSync(file, fs.constants.F_OK);
    } catch (err) {
        console.error(`error: file '${file}' does not exist`);
        process.exit(1);
    }

    // Check if the file is readable.
    try {
        fs.accessSync(file, fs.constants.R_OK);
    } catch (err) {
        console.error(`error: file '${file}' is not readable`);
        process.exit(1);
    }

    // Check if the file is writable.
    try {
        fs.accessSync(file, fs.constants.W_OK);
    } catch (err) {
        console.error(`error: file '${file}' is not writable`);
        process.exit(1);
    }

    try {
        fs.accessSync(file, fs.constants.F_OK | fs.constants.W_OK,);
    } catch (err) {
        console.error(`error: file '${file}' ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
        process.exit(1);
    }
}

module.exports = {
    myParseInt,
    checkEncode,
    caesar,
    checkFile
}