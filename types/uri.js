const CustomString = require('../utils/custom-string')

module.exports = class Uri extends CustomString {
  validate(value){
    if (!/^((https:|http:|[\/][\/]|www.)([a-z]|[A-Z]|[:0-9]|[\/.])*)$/.test(value))
      throw 'Incorrect value format: expected valid uri format'
  }
}
