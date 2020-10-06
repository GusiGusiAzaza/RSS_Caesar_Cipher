# RSS_Caesar_Cipher
## Task 1. Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

## How to start

**To start using this Caesar Cipher CLI:**
- go to the "/CaesarCipher" folder. **ALL commands must be run from this folder**
- run "npm install" in the "/caesar-cipher" folder
- start using Caesar Cipher CLI commands and options
- command format "node caesar-cipher-cli <option 1> <option 2> ...."

CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

**Details:**

1. Action (encode/decode) and the shift are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.
2. If the input file is missed - use stdin as an input source.
3. If the output file is missed - use stdout as an output destination.
4. If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.
5. If passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).
6. For encoding/decoding use only the English alphabet, all other characters should be kept untouched.

**Usage example:**

```bash
$ node CaesarCipher -a encode -s 7 -i "./in.txt" -o "./out.txt"
```

```bash
$ node CaesarCipher --action encode --shift 7 --input in.txt --output out.txt
```

```bash
$ node CaesarCipher.js --action decode --shift 7 --input in.txt --output out.txt
```

```bash
$ node CaesarCipher -a encode -s 7 -i in.txt
```

```bash
$ node CaesarCipher -a encode -s 7 -o out.txt
```

```bash
$ node CaesarCipher -a encode -s 7
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
