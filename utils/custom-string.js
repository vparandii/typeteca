const ValidationError = require('./validation-error')

module.exports = class CustomString extends String {
  constructor(value){
    if (!value) {
      super()
    } else {
      super(value)
      try {
        if (typeof value !== 'string')
          throw `Incorrect value type - ${this.constructor.name}: expected valid String type`
        this.validate(value)
      } catch (message) {
        throw new ValidationError(message)
      }
    }
  }
}
