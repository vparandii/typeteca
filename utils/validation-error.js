module.exports = class ValidationError extends Error {
  constructor(...props){
    super(...props)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
  }
}
