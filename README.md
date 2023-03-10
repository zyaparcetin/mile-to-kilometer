# mile-to-kilometer
An npm library to convert miles to kilometers.
## &nbsp;
## Installation

```$ npm i mile-to-kilometer```

## &nbsp;
## What is it?

It is a simple library that converts miles to kilometers. 

## &nbsp;
## Usage

As with most npm libraries, you just need to import it in a file

```require('mile-to-kilometer')();```

## &nbsp;
```milesToKilometers(miles); // returns kilometers as a number.```


Throws an error if miles is not a number. 

Examples:

```milesToKilometers(1); // returns 1.609```

```milesToKilometers(0); // returns 0```

```milesToKilometers('a'); // throws Error('miles must be a number!')```

## &nbsp;
## Contribution
This is a work in progress; I hope to be able to update soon. Or if you want to collaborate,  it's a library open to collaboration!

## &nbsp;
## License
MIT License

Copyright (c) 2023 zyaparcetin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
