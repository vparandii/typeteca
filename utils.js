class ValidationError extends Error {
  constructor(...props){
    super(...props)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
  }
}

class CustomString extends String {
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

module.exports = {
  CustomString,
  ValidationError
}
