# typeteca

[![NPM](https://nodei.co/npm/typeteca.png?downloads=true&downloadRank=true)](https://nodei.co/npm/typeteca/)

**Typeteca** is a library of brand new types on top of built-in String, Number, etc. Each new type has it's own validation mechanism, so that you can use any data essence like it is native JS data type :boom:🎉:star2:

It is tiny and zero-dependencies package.

## Motivation

To develop new programming pattern and get rid of need to use validation libraries.

## Usage

Installing package:
```bash
npm i typeteca
```

Standart usage:
```js
const {Email} = require('typeteca')

const email = new Email('username@example.com')

console.log(email)            // [String: 'username@example.com']
console.log(email.valueOf())  // username@example.com
```

What if email was passed with invalid format?
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

Each of types inherits one of built-in JavaScript ones:
```js
const email = new Email('username@example.com')

console.log(email instanceof String)   //true
```

You can create custom types on top of Typeteca:
```js
const {CustomString} = require('typeteca')

class Password extends CustomString {
  validate(value){
    if (!/^.{6,30}$/.test(value))
      throw 'Incorrect value format: expected valid password format'
  }
}
```

CustomString class extends String with additional validation layer:
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

## Types

Comming soon.

## Register your own type

Comming soon.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
