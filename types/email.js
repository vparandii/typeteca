const {CustomString} = require('../utils')

module.exports = class Email extends CustomString {
  validate(value){
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value))
      throw 'Incorrect value format: expected valid email format'
  }
}
