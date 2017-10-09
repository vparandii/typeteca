module.exports = {
  ...require('./utils'),
  Email: require('./types/email'),
  Uri: require('./types/uri'),
  Password: require('./types/password'),
  BcryptHash: require('./types/bcrypt-hash')
}
