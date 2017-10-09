const {CustomString} = require('../utils')

module.exports = class Password extends CustomString {
  validate(value){
    if (!/^.{6,30}$/.test(value))
      throw 'Incorrect value format: expected valid password format'
  }
}
