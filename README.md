# typeteca

[![NPM](https://nodei.co/npm/typeteca.png?downloads=true&downloadRank=true)](https://nodei.co/npm/typeteca/)

**Typeteca** is a library of brand new Types on top of built-in String, Number, etc. Each new Type has it's own validation mechanism, so that you can use any data essence like it is native JS data type :boom:🎉:star2:

It is tiny and zero-dependencies package.

## Motivation

To develop new programming pattern and get rid of need to use validation libraries.

## Usage

Installing package:
```bash
npm i typeteca
```

Importing Types and standard usage:
```js
const {Email} = require('typeteca')
// or
const Email = require('typeteca/types/email')

const email = new Email('username@example.com')

console.log(email)            // [String: 'username@example.com']
console.log(email.valueOf())  // username@example.com
```

What if value has invalid format?
```js
try {
  const email = new Email('usernameexample.com')
} catch (error) {
  console.log(error.name)     // ValidationError
  console.log(error.message)  // Incorrect value format: expected valid email format
}
```

But passing empty value does not throw any error:
```js
const email = new Email()

console.log(email)            // [String: '']
```

Each of Types inherits one of built-in JavaScript ones:
```js
const email = new Email('username@example.com')

console.log(email instanceof String)   //true
```

You can create custom Types on top of Typeteca:
```js
const {CustomString} = require('typeteca')

class Password extends CustomString {
  validate(value){
    if (!/^.{6,30}$/.test(value))
      throw 'Incorrect value format: expected valid password format'
  }
}
```

CustomString util class extends String with additional validation layer:
```js
try {
  const password = new Password(69)
} catch (error) {
  console.log(error.name)     // ValidationError
  console.log(error.message)  // Incorrect value type - Password: expected valid String type
}
```

You can use ValidationError to keep unified error handling flow
```js
const {Uri, ValidationError} = require('typeteca')

const uri = new Uri('https://example.com')

if (uri.includes('https'))
  throw new ValidationError('Uri might reffer to http protocol only')
```

## Types & APIs

See the detailed [API Reference](https://github.com/walandemar/typeteca/blob/master/API.md).

## Use Cases

All about using Typeteca during modeling your api endpoints in [Express](https://github.com/expressjs/express/) or [Hapi](https://github.com/hapijs/hapi), extending [Mongoose](https://github.com/Automattic/mongoose) Schemas with brand new Types, or other useful cases - see the detailed [Use Cases Reference](https://github.com/walandemar/typeteca/blob/master/CASES.md).

## Integrations and Plugins - Quick Reference

* [`typeteca-mongoose`](https://github.com/walandemar/typeteca-mongoose) - helps easily integrate Typeteca Types into Mongoose Schema registry
* to be continued...

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
